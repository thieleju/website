import * as PIXI from "pixi.js";
import { Scene } from "./Scene";

export class Player {
  static playerCount = 0;

  name = "";
  color = "";
  radius = 0;
  x = 0;
  y = 0;
  opacity = 1; //0.8;

  constructor(options) {
    // set class attributes for player
    this.name = options.name;
    this.color = options.color;
    this.radius = options.radius;

    // set starting position
    if (options.position) {
      this.x = options.position.x;
      this.y = options.position.y;
    } else {
      let pos = this.generateRandomStartingPosition();
      console.log("Starting position", pos);
      this.x = pos.x;
      this.y = pos.y;
    }
  }

  create() {
    this.playerCount += 1;

    const container = new PIXI.Container();

    let g = new PIXI.Graphics();
    g.lineStyle(0);
    g.beginFill(this.color, this.opacity);
    g.drawCircle(this.x, this.y, this.radius);
    g.endFill();

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

    let tb = new PIXI.Graphics();
    let tb_padding = 2;
    tb.beginFill(0x000, 0.5);
    tb.drawRect(
      t.x - tb_padding,
      t.y - tb_padding,
      t.width + 2 * tb_padding,
      t.height + 2 * tb_padding
    );
    tb.endFill();

    container.addChild(g, t, tb);
    container.interactive = true;
    return container;
  }

  generateRandomStartingPosition() {
    let padding_top = 25;
    return {
      x: this.getRandomNumberBetween(
        this.radius,
        Scene.getSceneWidth() - this.radius
      ),
      y: this.getRandomNumberBetween(
        this.radius + padding_top,
        Scene.getSceneHeight() - this.radius
      ),
    };
  }

  getRandomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
}
