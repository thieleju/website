import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";

import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

// init socket connection
var socket = io(process.env.VUE_APP_BASE_URL, {
  path: "/socket.io",
  reconnectionDelayMax: 10000,
});

// set axios base URL
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

// use axios and socket io
Vue.use(VueSocketIOExt, socket, { store });
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
