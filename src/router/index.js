import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: { title: "About" },
  },
  {
    // fallback route
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// import store from "../store/index";

// router.beforeEach((to, from, next) => {
// });

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title + " - node5";
  });
});

export default router;
