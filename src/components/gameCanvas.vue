<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer">
      <v-text :config="fpsText"></v-text>
      <v-line :config="border"></v-line>
      <v-circle ref="player" :config="player"></v-circle>
      <v-circle ref="enemy" :config="enemy"></v-circle>
    </v-layer>
  </v-stage>
</template>

<script>
// import Konva from "konva";

const width = Math.round((window.innerWidth / 3) * 2);
const height = Math.round((window.innerHeight / 3) * 2);

const maxFPS = 60;
const playerRadius = 15;
const enemyRadius = 20;
var lastFrameTimeMs = 0;
var timestep = 1000 / maxFPS;
var delta = 0;
var framesThisSecond = 0;
var lastFpsUpdate = 0;

export default {
  data() {
    return {
      stageSize: {
        width: width,
        height: height,
      },
      player: {
        x: width / 2,
        y: height / 2,
        radius: playerRadius,
        fill: "#38A3A5",
        stroke: "black",
        strokeWidth: 3,
      },
      enemy: {
        x: width / 2,
        y: height / 2,
        radius: enemyRadius,
        fill: "#FF5252",
        stroke: "black",
        strokeWidth: 3,
      },
      border: {
        x: 0,
        y: 0,
        points: [0, 0, width, 0, width, height, 0, height, 0, 0],
        stroke: "#2D2D2D",
        strokeWidth: 4,
      },
      fpsText: {
        x: 10,
        y: 10,
        text: "",
        fontSize: 15,
        fill: "white",
      },
      mousePos: {
        x: 0,
        y: 0,
      },
      currentFPS: 0,
    };
  },
  mounted() {
    // const vm = this;
    // const amplitude = 100;
    // const period = 5000;
    // // in ms
    // const centerX = vm.$refs.stage.getNode().getWidth() / 2;
    // const player = this.$refs.player.getNode();
    // // example of Konva.Animation
    // const anim = new Konva.Animation(function (frame) {
    //   player.setX(
    //     amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
    //   );
    // }, player.getLayer());
    // anim.start();

    window.addEventListener("mousemove", this.mouseCallback);
    // first update
    requestAnimationFrame(this.mainLoop);
  },
  methods: {
    // https://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
    update(delta) {
      const enemy = this.$refs.enemy?.getNode();
      const player = this.$refs.player?.getNode();

      player?.setX(this.getXInBounds(this.mousePos.x, playerRadius));
      player?.setY(this.getYInBounds(this.mousePos.y, playerRadius));

      // set x and y coordinates of the enemy to the mouse position in relation to velocity
      var dx = this.mousePos.x - enemy.x();
      var dy = this.mousePos.y - enemy.y();

      // get distance and round to integer
      var distance = Math.round(Math.sqrt(dx * dx + dy * dy));

      if (distance != 0) {
        var factor = distance / 0.2;
        var velx = (dx / factor) * delta;
        var vely = (dy / factor) * delta;

        var newX = enemy.x() + velx;
        var newY = enemy.y() + vely;

        enemy?.setX(this.getXInBounds(newX, enemyRadius));
        enemy?.setY(this.getYInBounds(newY, enemyRadius));
      }
    },
    getXInBounds(x, radius) {
      const rect = this.$refs.stage
        ?.getNode()
        .container()
        .getBoundingClientRect();

      if (x < radius) return radius;
      else if (x > rect.width - radius) return rect.width - radius;
      else return x;
    },
    getYInBounds(y, radius) {
      const rect = this.$refs.stage
        ?.getNode()
        .container()
        .getBoundingClientRect();

      if (y < radius) return radius;
      else if (y > rect.height - radius) return rect.height - radius;
      else return y;
    },
    mainLoop(timestamp) {
      // Throttle the frame rate.
      if (timestamp < lastFrameTimeMs + 1000 / maxFPS) {
        requestAnimationFrame(this.mainLoop);
        return;
      }

      delta += timestamp - lastFrameTimeMs;
      lastFrameTimeMs = timestamp;

      if (timestamp > lastFpsUpdate + 1000) {
        // update every second
        this.currentFPS =
          0.25 * framesThisSecond + (1 - 0.25) * this.currentFPS;
        this.fpsText.text = "FPS: " + Math.round(this.currentFPS);
        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
      }
      framesThisSecond++;

      var numUpdateSteps = 0;
      while (delta >= timestep) {
        this.update(timestep);
        delta -= timestep;
        if (++numUpdateSteps >= 240) {
          this.panic();
          break;
        }
      }

      window.requestAnimationFrame(this.mainLoop);
    },
    panic() {
      delta = 0;
    },
    mouseCallback(event) {
      let rect = this.$refs.stage
        ?.getNode()
        .container()
        .getBoundingClientRect() || { x: 0, y: 0 };
      this.mousePos = {
        x: event.pageX - Math.round(rect.x),
        y: event.pageY - Math.round(rect.y),
      };
    },
    // handlePlayerMove(event) {
    //   // console.log(event);k
    //   event;
    // },
  },
};
</script>

<style></style>
