import Button from '../objects/Button';

const BACKGROUND_SPEED = 30;

export default class Menu extends Phaser.State {
  create() {
    this.createBackground();
    this.createButton();
  }
  createBackground() {
    this.stage.backgroundColor = `c6eefa`;
    this.sea = this.add.tileSprite(0, this.game.height - 70, this.game.width, 70, `tiles`, `liquidWaterTop_mid.png`);
    this.sea.autoScroll(- BACKGROUND_SPEED, 0);
  }
  createButton() {
    const button = new Button(this.game, this.world.centerX, this.world.centerY, this.buttonClicked, this, `blue`, `Play`);
    button.anchor.setTo(0.5, 0.5);
    this.add.existing(button);
  }
  buttonClicked() {
    this.state.start(`Play`);
  }
}
