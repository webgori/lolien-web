import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Intro from "./views/Intro.vue";
import Join from "./views/Join.vue";
import CustomGame from "./views/CustomGame.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/intro",
      name: "intro",
      component: Intro
    },
    {
      path: "/join",
      name: "join",
      component: Join
    },
    {
      path: "/custom-game",
      name: "custom-game",
      component: CustomGame
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
