<template>
  <div class="container">
    <gameCanvas v-if="showCanvas"> </gameCanvas>
    <vue-typer
      class="text-center"
      :text="textArray"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="100"
      :type-delay="200"
      :pre-erase-delay="1000"
      :erase-delay="1000"
      erase-style="clear"
      :erase-on-complete="true"
      caret-animation="blink"
      v-else
    ></vue-typer>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import gameCanvas from "./../components/gameCanvas.vue";

export default {
  components: {
    VueTyper,
    gameCanvas,
  },
  data() {
    return {
      textArray: ["Hello!", "Press SPACE to start!"],
      showCanvas: false,
    };
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.code == "Space") {
        this.showCanvas = true;
      }
    });
  },
  sockets: {
    sockets: {
      message(msg) {
        console.log(msg);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 80vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
}

.vue-typer {
  display: inline-block;
  font-family: monospace, "Lucida Console", "Courier New";
  font-size: 4em;
  z-index: 10;

  ::v-deep .custom.caret {
    width: 0.1em;
    background-color: #dbdbdc;
  }

  ::v-deep .typed {
    color: #dbdbdc;
  }
}
</style>
