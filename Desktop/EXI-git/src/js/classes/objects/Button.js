export default class Button extends Phaser.Button {
  constructor(game, x, y, callback, callbackContext, colorName, label) {
    super(game, x, y, `buttons`, callback, callbackContext, `${colorName}-over`, `${colorName}-normal`, `${colorName}-down`);
    this.labelField = new Phaser.Text(game, 0, 0, label,
      {
        font: `32px KenFuture`
      }
    );
    this.labelField.anchor.setTo(0.5, 0.5);
    this.addChild(this.labelField);
  }
}
