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
      allPlayerInstances: [],
      player: {
        id: null,
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
  mounted() {
    // request id
    this.$socket.client.emit("request_id");

    // init application and add borders
    this.initApplication();
    this.initBorders();

    // add keyboard listener
    this.addKeyboardListeners();
  },
  sockets: {
    message(msg) {
      console.log(msg);
    },
    answer_id(id) {
      this.player.id = id;
      // add own player
      this.initOwnPlayer();
    },
    player_leave(id) {
      let player = this.allPlayerInstances.find((el) => el.id == id);
      // remove player instance from allPlayerInstances
      this.allPlayerInstances = this.allPlayerInstances.filter(
        (el) => el.id != id
      );
      // remove child from stage
      player.getGraphics().parent.removeChild(player.getGraphics());
    },
    update_players(players) {
      players.forEach((player) => {
        // skip own player
        if (this.player.id == player.id) return;

        // check if player should be moved or instanciated
        let p = this.playerExists(player.id);
        if (p) {
          p.setPosition(player.position.x, player.position.y);
        } else {
          this.initPlayer(player);
        }
      });
    },
  },
  methods: {
    gameLoop(delta) {
      this.updatePlayerPosition(delta);
    },
    initOwnPlayer() {
      this.player.name = this.getNewRandomUserName();
      let data = {
        id: this.player.id,
        name: this.player.name,
        color: this.player.color,
        radius: this.player.radius,
        position: Player.generateRandomStartingPosition(
          this.scene,
          this.player.radius
        ),
      };
      this.initPlayer(data);
      this.$socket.client.emit("player_join", data);
    },
    playerExists(id) {
      return this.allPlayerInstances.find((p) => p.getID() == id);
    },
    // initPlayer(id, name, color, radius, position) {
    initPlayer(playerObj) {
      // create new player instance and add it to the array and stage
      const player = new Player(
        this.scene,
        playerObj.id,
        playerObj.name,
        playerObj.color,
        playerObj.radius,
        playerObj.position
      );
      this.app.stage.addChild(player.getGraphics());
      this.allPlayerInstances.push(player);
    },
    updatePlayerPosition(delta) {
      // find player object
      let ownPlayer = this.playerExists(this.player.id);

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

        // update player position if player moved
        if (this.player.velocity.x != 0 || this.player.velocity.y != 0) {
          // update player position
          ownPlayer.moveByVelocity(this.player.velocity, delta);

          // emit update to server
          this.$socket.client.emit("player_update", {
            id: this.player.id,
            name: this.player.name,
            color: this.player.color,
            radius: this.player.radius,
            speed: this.player.speed,
            position: {
              x: ownPlayer.getPosX(),
              y: ownPlayer.getPosY(),
            },
          });
        }
      }
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
    addKeyboardListeners() {
      document.body.addEventListener("keydown", (e) => {
        this.keys[e.key] = true;
      });
      document.body.addEventListener("keyup", (e) => {
        this.keys[e.key] = false;
      });
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
