import * as PIXI from "pixi.js";

export class Player {
  id = "";
  name = "";
  color = "";
  radius = 0;
  x = 0;
  y = 0;
  opacity = 1; //0.8;
  scene = null;
  alive = true;
  container = null;
  playerGraphics = null;

  constructor(scene, id, name, color, radius) {
    // set class attributes for player
    this.id = id;
    this.name = name;
    this.color = color;
    this.radius = radius;
    this.scene = scene;

    // generate player graphics
    this.playerGraphics = new PIXI.Graphics()
      .lineStyle(0)
      .beginFill(this.color, this.opacity)
      .drawCircle(this.x, this.y, this.radius)
      .endFill();

    // generate container and add playerGraphics and text
    this.container = new PIXI.Container();
    this.container.addChild(this.playerGraphics);
    this.container.addChild(...this.generateText(this.name));
    this.container.interactive = true;

    // set random starting position
    let pos = this.generateRandomStartingPosition();
    this.container.position.x = pos.x;
    this.container.position.y = pos.y;
  }

  moveByVelocity(velocity, delta) {
    this.container.position = this.getPositionInBounds(
      this.container.position.x + velocity.x * delta,
      this.container.position.y + velocity.y * delta,
      this.playerGraphics.getBounds()
    );
  }

  getPositionInBounds(newX, newY, bounds) {
    let x = 0;
    let y = 0;

    // set x coordinate
    if (newX < bounds.width - this.radius) x = bounds.width - this.radius;
    else if (newX > this.scene.width - bounds.width + this.radius)
      x = this.scene.width - bounds.width + this.radius;
    else x = newX;

    // set y coordinate
    if (newY < bounds.height - this.radius) y = bounds.height - this.radius;
    else if (newY > this.scene.height - bounds.height + this.radius)
      y = this.scene.height - bounds.height + this.radius;
    else y = newY;

    // return position
    return { x, y };
  }

  generateText(content) {
    let textStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 16,
      fill: "white",
      stroke: "black",
      strokeThickness: 1,
    });

    let text = new PIXI.Text(content, textStyle);
    text.x = this.x - text.width / 2;
    text.y = this.y - this.radius - 1.5 * text.height;

    let text_background_padding = 3;
    let text_background = new PIXI.Graphics()
      .beginFill(0x000, 0.5)
      .drawRect(
        text.x - text_background_padding,
        text.y - text_background_padding,
        text.width + 2 * text_background_padding,
        text.height + 2 * text_background_padding
      )
      .endFill();

    return [text, text_background];
  }

  getGraphics() {
    return this.container;
  }

  getID() {
    return this.id;
  }

  isAlive() {
    return this.alive;
  }

  generateRandomStartingPosition() {
    let padding_top = 25;
    return {
      x: this.getRandomNumberBetween(
        this.radius,
        this.scene.width - this.radius
      ),
      y: this.getRandomNumberBetween(
        this.radius + padding_top,
        this.scene.height - this.radius
      ),
    };
  }

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
