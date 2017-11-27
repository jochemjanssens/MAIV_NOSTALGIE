export default class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, `player`, `p1_stand.png`);
    this.anchor.set(0.5, 0.5);
    const frames = [
      `p1_walk01.png`,
      `p1_walk02.png`,
      `p1_walk03.png`,
      `p1_walk04.png`,
      `p1_walk05.png`,
      `p1_walk06.png`,
      `p1_walk07.png`,
      `p1_walk08.png`,
      `p1_walk09.png`,
      `p1_walk10.png`,
      `p1_walk11.png`
    ];
    this.animations.add(`walk`, frames, `20`, false);


    this.game.physics.arcade.enableBody(this);
    this.body.gravity.y = 2000;
  }
}
