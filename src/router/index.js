import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Intro from "@/views/Intro";
import Join from "@/views/Join";
import Member from "@/views/Member";
import CustomGame from "@/views/CustomGame";
import CustomGameTest from "@/views/CustomGameTest";
import League from "@/views/League";
import Login from "@/views/Login";
import store from "../store";

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
    path: "/login",
    name: "login",
    beforeEnter: (from, to, next) => {
      let userInfo = store.getters.getUserInfo;

      if (userInfo == null) {
        next();
      } else {
        next("/");
      }
    },
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
