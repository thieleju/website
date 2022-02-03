import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";

// import VueSocketIOExt from "vue-socket.io-extended";
// import { io } from "socket.io-client";

// var socket;

if (process.env.VUE_APP_API_PATH) {
  // production
  axios.defaults.baseURL =
    process.env.VUE_APP_BASE_URL + process.env.VUE_APP_API_PATH;
  // socket = io(process.env.VUE_APP_BASE_URL, {
  //   path: process.env.VUE_APP_API_PATH + "/socket.io",
  //   reconnectionDelayMax: 10000,
  // });
} else {
  // development
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
  // socket = io(process.env.VUE_APP_BASE_URL, {
  //   reconnectionDelayMax: 10000,
  // });
}

Vue.use(VueAxios, axios);
// Vue.use(VueSocketIOExt, socket, { store });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
