<template>
  <div>
    <canvas class="canvas" id="pixi"></canvas>
  </div>
</template>

<script>
import * as PIXI from "pixi.js";
import { uniqueNamesGenerator, starWars } from "unique-names-generator";

import { Player } from "./../objects/Player.js";

export default {
  data() {
    return {
      app: null,
      keys: [],
      scene: {
        width: 1080, //(window.innerWidth / 3) * 2,
        height: 720, //(window.innerHeight / 3) * 2,
      },
      allPlayers: [],
      allPlayerInstances: [],
      player: {
        alive: true,
        id: "",
        name: null,
        color: 0x38a3a5,
        radius: 20,
        speed: 4,
        velocity: {
          x: 0,
          y: 0,
        },
      },
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
    // init application and add borders
    this.initApplication();
    this.initBorders();

    // add own player
    this.player.id = this.generateID();
    this.allPlayers.push({
      id: this.player.id,
      name: this.getNewRandomUserName(),
      color: this.player.color,
      radius: this.player.radius,
      speed: this.player.speed,
      velocity: this.player.velocity,
    });

    // add all players to scene
    this.initPlayers();
  },
  sockets: {
    message(msg) {
      console.log(msg);
    },
  },
  methods: {
    initPlayers() {
      this.allPlayers.forEach((el) => {
        // create new player instance
        let p = new Player(this.scene, el.id, el.name, el.color, el.radius);

        // add player to objects array
        this.allPlayerInstances.push(p);

        // add player object to stage
        this.app.stage.addChild(p.getGraphics());
        // obj.on("click", (e) => {
        //   console.log("clicked", e.target);
        // });
      });
    },
    updatePlayerPosition(delta) {
      // find player object
      let ownPlayer = this.allPlayerInstances.find(
        (p) => p.getID() == this.player.id
      );

      // move if alive
      if (ownPlayer && ownPlayer.isAlive()) {
        // forward and backward movement
        if (this.keys["w"]) this.player.velocity.y = -this.player.speed;
        else if (this.keys["s"]) this.player.velocity.y = this.player.speed;
        else this.player.velocity.y = 0;

        // left and right movement
        if (this.keys["a"]) this.player.velocity.x = -this.player.speed;
        else if (this.keys["d"]) this.player.velocity.x = this.player.speed;
        else this.player.velocity.x = 0;

        // update player position
        ownPlayer.moveByVelocity(this.player.velocity, delta);
      }
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
    getNewRandomUserName() {
      return uniqueNamesGenerator({
        dictionaries: [starWars],
        separator: " ",
        style: "capital",
      });
    },
    generateID() {
      return Math.random().toString(36).substr(2, 15);
    },
  },
};
</script>

<style lang="scss">
.canvas {
  margin: auto;
}
</style>
