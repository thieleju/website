import * as PIXI from "pixi.js";

// import { Scene } from "./Scene";

export class App {
  app = null;
  antialias = true;
  backgroundAlpha = 0;
  autoDensity = true;

  constructor(scene, view) {
    this.app = new PIXI.Application({
      width: scene.width,
      height: scene.height,
      antialias: this.antialias,
      autoDensity: this.autoDensity,
      backgroundAlpha: this.backgroundAlpha,
      view: view,
    });
  }

  getApplication() {
    return this.app;
  }
}
