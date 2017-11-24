export default class Preload extends Phaser.State {
  init(){
    this.asset = this.add.tileSprite(this.world.centerX, this.world.centerY, 222, 21, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.asset.animations.add('preload', [ 0,1,2,3,4,5,6,7,8,9], '60', true);
    this.asset.play('preload');
  }
  preload() {
    this.load.atlasJSONHash('tiles', 'assets/tiles.png', 'assets/tiles.json');
    this.load.atlasJSONHash('player', 'assets/player.png', 'assets/player.json');
    this.load.atlasJSONHash('buttons', 'assets/components.png', 'assets/components.json');
    this.load.audio('jumpSound', 'assets/jump.wav');
    this.load.audio('coinSound', 'assets/coin.mp3');
    this.load.audio('explodeSound', 'assets/explosion.wav');
  }
  create() {
    this.state.start('Menu');
  }
}
