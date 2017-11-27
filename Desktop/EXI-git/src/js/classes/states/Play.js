import Player from '../objects/Player';
import Button from '../objects/Button';

const BACKGROUND_SPEED = 3;
const PLATFORM_SPEED = 3;
const ENEMY_INTERVAL = 2000;

const socket = io.connect(`http://localhost:8080/`);
let down1 = false;
let down2 = false;
socket.on(`update`, message => {
  if (Object.keys(message)[0] === `one`) {
    if (message.one === true) {
      down1 = true;
    } else {
      down1 = false;
    }
  }
  if (Object.keys(message)[0] === `two`) {
    if (message.two === true) {
      down2 = true;
    } else {
      down2 = false;
    }
  }
});


export default class Play extends Phaser.State {
  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.lives = 3;

    this.createBackground();
    this.createSounds();
    this.makeExplosives();
    this.makePlatforms();
    this.makeStartPlatforms();
    this.makePlayer();
    this.makeLives();
    this.createScore();
  }
  createBackground() {
    this.stage.backgroundColor = `c6eefa`;
    this.sea = this.add.tileSprite(0, this.game.height - 70, this.game.width, 70, `tiles`, `liquidWaterTop_mid.png`);
    this.sea.autoScroll(- BACKGROUND_SPEED, 0);
  }
  createSounds() {
    this.jumpSound = this.add.audio(`jumpSound`);
    this.explodeSound = this.add.audio(`explodeSound`);
  }
  makePlatforms() {
    this.platforms = this.add.group();
    this.platforms.physicsBodyType = Phaser.Physics.ARCADE;
    this.platforms.enableBody = true;
    this.platforms.createMultiple(20, `tiles`, [
      `grassLeft.png`,
      `grassMid.png`,
      `grassRight.png`
    ]);
    this.platforms.setAll(`anchor.x`, 0.5);
    this.platforms.setAll(`anchor.y`, 0.5);
    //this.platforms.setAll('outOfBoundsKill', true);
    this.platforms.setAll(`checkWorldBounds`, true);

    this.platformTimer = this.time.events.loop(ENEMY_INTERVAL, this.makeNewPlatform, this);
  }
  makeStartPlatforms() {
    for (let i = 0;i < 4;i ++) {
      this.makePlatform(i * 210, 400);
    }
  }
  makePlatform(x, y) {
    for (let i = 1;i < 4;i ++) {
      const platform = this.platforms.getFirstExists(false);
      if (!platform) {
        return;
      }
      platform.body.immovable = true;
      platform.reset(x + (i * 70), y);
      platform.body.velocity.set(- PLATFORM_SPEED, 0);
    }
  }
  makeExplosives() {
    this.explosives = this.add.group();
    this.explosives.enableBody = true;
    this.explosives.physicsBodyType = Phaser.Physics.ARCADE;
    this.explosives.createMultiple(20, `tiles`, `boxExplosive.png`);
    this.explosives.setAll(`anchor.x`, 0.5);
    this.explosives.setAll(`anchor.y`, 0.5);
    this.explosives.setAll(`checkWorldBounds`, true);
  }
  makeExplosive(x, y) {
    const explosive = this.explosives.getFirstExists(false);
    explosive.body.immovable = true;
    this.position = this.rnd.integerInRange(0, 1);
    if (this.position === 0) {
      explosive.reset(x + 70, y - 70);
    } else {
      explosive.reset(x + 210, y - 70);
    }
    explosive.body.velocity.set(- PLATFORM_SPEED, 0);
  }
  makeNewPlatform() {
    const yPos = this.rnd.integerInRange(200, this.game.height - 100);
    this.makePlatform(this.game.width, yPos);
    this.makeExplosive(this.game.width, yPos);
  }
  makePlayer() {
    this.player = new Player(this.game, 140, 140);
    this.add.existing(this.player);
  }
  makeLives() {
    this.totalHearts = 3;
    this.counter = this.lives;
    for (let i = 0;i < this.totalHearts;i ++) {
      if (this.counter > 0) {
        this.heartStatus = `hud_heartFull.png`;
      } else {
        this.heartStatus = `hud_heartEmpty.png`;
      }
      this.heart = this.add.sprite(this.game.width - 60 - (i * 70), 10, `tiles`, this.heartStatus);
      this.counter--;
    }
  }
  createScore() {
    this.scoreText = this.add.text(
      100, 10, `Score: ${  this.points}`,
      {
        font: `20px KenFuture`
      }
    );
  }
  update() {
    this.physics.arcade.collide(this.player, this.platforms);
    this.inputHandler();
    this.checkCollisions();
  }

  inputHandler() {
    this.player.body.velocity.x = 0;
    if (down2 === true) {
      console.log(`left`);
      this.player.body.velocity.x = - 100;
      this.player.animations.play(`walk`);
    }
    if (down1 === true) {
      console.log(`right`);
      this.player.body.velocity.x = 100;
      this.player.animations.play(`walk`);
    }
  }
  checkCollisions() {
    this.physics.arcade.overlap(this.player, this.explosives, this.explosiveHit, null, this);
    if (this.player.y > this.game.height) {
      this.killPlayer();
    }
  }
  killPlayer() {
    this.sea.autoScroll(0, 0);
    this.platforms.forEach(platform => {
      platform.body.velocity.set(0, 0);
    });
    this.explosives.forEach(explosive => {
      explosive.body.velocity.set(0, 0);
    });
    const button = new Button(this.game, this.world.centerX, this.world.centerY, this.buttonClicked, this, `blue`, `Again`);
    button.anchor.setTo(0.5, 0.5);
    this.add.existing(button);
  }
  buttonClicked() {
    this.state.start(`Menu`);
  }
  explosiveHit(player, explosive) {
    explosive.kill();
    this.lives--;
    this.makeLives();
    this.explodeSound.play();

    if (this.lives === 0) {
      this.killPlayer();
    }
  }
}
