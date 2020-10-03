import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Intro from "@/views/Intro";
import Join from "@/views/Join";
import Member from "@/views/Member";
import CustomGame from "@/views/CustomGame";
import CustomGameTest from "@/views/CustomGameTest";
import League from "@/views/League";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
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
    path: "/member",
    name: "member",
    component: Member
  },
  {
    path: "/custom-game",
    name: "custom-game",
    component: CustomGame
  },
  {
    path: "/custom-game-test",
    name: "custom-game-test",
    component: CustomGameTest
  },
  {
    path: "/league",
    name: "league",
    component: League
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
