<template>
  <div>
    <canvas id="pixi"></canvas>
  </div>
</template>

<script>
import * as PIXI from "pixi.js";

import { App } from "./../objects/App.js";
import { Player } from "./../objects/Player.js";
import { Scene } from "../objects/Scene.js";

export default {
  data() {
    return {
      app: null,
      scene: {
        width: (window.innerWidth / 3) * 2,
        height: (window.innerHeight / 3) * 2,
      },
      users: [],
      player: {
        object: null,
        speed: 3,
        velocity: {
          x: 0,
          y: 0,
        },
        options: {
          name: "Player 1",
          color: 0x38a3a5,
          radius: 20,
          // position: {
          //   x: 0,
          //   y: 0,
          // },
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
      let speed = this.player.speed;

      if (this.keys["w"]) this.player.velocity.y = -speed;
      else if (this.keys["s"]) this.player.velocity.y = speed;
      else this.player.velocity.y = 0;

      if (this.keys["a"]) this.player.velocity.x = -speed;
      else if (this.keys["d"]) this.player.velocity.x = speed;
      else this.player.velocity.x = 0;

      this.player.object.x += this.player.velocity.x * delta;
      this.player.object.y += this.player.velocity.y * delta;
    },
    gameLoop(delta) {
      this.updatePlayerPosition(delta);
    },
    initApplication() {
      // set scene size
      Scene.setScene(this.scene.width, this.scene.height);
      // generate application
      this.app = new App(
        this.scene,
        document.getElementById("pixi")
      ).getApplication();

      // make everything interactive
      this.app.stage.interactive = true;
      this.app.stage.hitArea = this.app.renderer.screen;

      // init game loop
      this.app.ticker.add((delta) => this.gameLoop(delta));
    },
    initPlayers() {
      // own player
      this.player.object = new Player(this.player.options).create();
      this.users.push(this.player.object);

      // add each player to stage
      this.users.forEach((obj) => {
        obj.on("click", (e) => {
          console.log("clicked", e.target);
        });
      });
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

<style></style>
