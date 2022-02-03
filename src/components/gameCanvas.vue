<template>
  <div>
    <canvas class="canvas" id="pixi"></canvas>
  </div>
</template>

<script>
import * as PIXI from "pixi.js";

import { Player } from "./../objects/Player.js";

export default {
  data() {
    return {
      app: null,
      scene: {
        width: 1080, //(window.innerWidth / 3) * 2,
        height: 720, //(window.innerHeight / 3) * 2,
      },
      users: [],
      player: {
        object: null,
        name: "Player",
        color: 0x38a3a5,
        speed: 4,
        radius: 20,
        velocity: {
          x: 0,
          y: 0,
        },
      },
      keys: [],
    };
  },
  created() {
    // key events
    document.body.addEventListener("keydown", (e) => {
      this.keys[e.key] = true;
    });
    document.body.addEventListener("keyup", (e) => {
      this.keys[e.key] = false;
    });
  },
  mounted() {
    this.initApplication();
    this.initBorders();
    this.initPlayers();
  },
  methods: {
    updatePlayerPosition(delta) {
      // forward and backward moevement
      if (this.keys["w"]) this.player.velocity.y = -this.player.speed;
      else if (this.keys["s"]) this.player.velocity.y = this.player.speed;
      else this.player.velocity.y = 0;
      // left and right movement
      if (this.keys["a"]) this.player.velocity.x = -this.player.speed;
      else if (this.keys["d"]) this.player.velocity.x = this.player.speed;
      else this.player.velocity.x = 0;

      // keep in bounds of scene
      this.player.object.position = this.getPositionInBounds(
        this.player.object.x + this.player.velocity.x * delta,
        this.player.object.y + this.player.velocity.y * delta,
        this.player.object.children[0].getBounds(),
        this.scene,
        this.player.radius
      );
    },
    getPositionInBounds(newX, newY, bounds, scene, radius) {
      let x = 0;
      let y = 0;

      // set x coordinate
      if (newX < bounds.width - radius) x = bounds.width - radius;
      else if (newX > scene.width - bounds.width + radius)
        x = scene.width - bounds.width + radius;
      else x = newX;

      // set y coordinate
      if (newY < bounds.height - radius) y = bounds.height - radius;
      else if (newY > scene.height - bounds.height + radius)
        y = scene.height - bounds.height + radius;
      else y = newY;

      // return position
      return { x, y };
    },
    gameLoop(delta) {
      this.updatePlayerPosition(delta);
    },
    initApplication() {
      // generate application
      this.app = new PIXI.Application({
        width: this.scene.width,
        height: this.scene.height,
        antialias: true,
        autoDensity: true,
        backgroundAlpha: 0,
        view: document.getElementById("pixi"),
      });

      // make stage interactive
      this.app.stage.interactive = true;
      this.app.stage.hitArea = this.app.renderer.screen;

      // init game loop
      this.app.ticker.add((delta) => this.gameLoop(delta));
    },
    initPlayers() {
      // own player
      this.player.object = new Player(
        this.scene,
        this.player.name,
        this.player.color,
        this.player.radius
      ).create();
      this.users.push(this.player.object);

      this.users.push(
        new Player(
          this.scene,
          this.player.name,
          this.player.color,
          this.player.radius
        ).create()
      );

      // add click events
      this.users.forEach((obj) => {
        obj.on("click", (e) => {
          console.log("clicked", e.target);
        });
      });
      // add each player to stage
      this.app.stage.addChild(...this.users);
    },
    initBorders() {
      let line = new PIXI.Graphics();

      line.lineStyle(2);
      line.lineTo(0, 0);
      line.lineTo(this.scene.width, 0);
      line.lineTo(this.scene.width, this.scene.height);
      line.lineTo(0, this.scene.height);
      line.lineTo(0, 0);

      this.app.stage.addChild(line);
    },
  },
};
</script>

<style lang="scss">
.canvas {
  margin: auto;
}
</style>
