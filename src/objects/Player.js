import * as PIXI from "pixi.js";

export class Player {
  name = "";
  color = "";
  radius = 0;
  x = 0;
  y = 0;
  opacity = 1; //0.8;
  scene = null;

  constructor(scene, name, color, radius) {
    // set class attributes for player
    this.name = name;
    this.color = color;
    this.radius = radius;
    this.scene = scene;
  }

  create() {
    const container = new PIXI.Container();

    let g = new PIXI.Graphics()
      .lineStyle(0)
      .beginFill(this.color, this.opacity)
      .drawCircle(this.x, this.y, this.radius)
      .endFill();

    let ts = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 16,
      fill: "white",
      stroke: "black",
      strokeThickness: 1,
    });

    let t = new PIXI.Text(this.name, ts);
    t.x = this.x - t.width / 2;
    t.y = this.y - this.radius - 1.5 * t.height;

    let tb_padding = 2;
    let tb = new PIXI.Graphics()
      .beginFill(0x000, 0.5)
      .drawRect(
        t.x - tb_padding,
        t.y - tb_padding,
        t.width + 2 * tb_padding,
        t.height + 2 * tb_padding
      )
      .endFill();

    container.addChild(g, t, tb);
    container.interactive = true;

    // set random starting position
    let pos = this.generateRandomStartingPosition();
    container.position.x = pos.x;
    container.position.y = pos.y;
    return container;
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
