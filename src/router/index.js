import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Intro from "@/views/Intro";
import Join from "@/views/Join";
import Member from "@/views/Member";
import CustomGame from "@/views/CustomGame";
import CustomGameTest from "@/views/CustomGameTest";
import League from "@/views/league/League";
import LeagueResult from "@/views/league/LeagueResult";
import LeagueStatistics from "@/views/league/Statistics";
import LeagueStatisticsPick from "@/views/league/StatisticsPick";
import Login from "@/views/Login";
import Register from "@/views/Register";
import User from "@/views/User";
import FindPassword from "@/views/FindPassword";
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
    path: "/league-result",
    name: "league-result",
    component: LeagueResult
  },
  {
    path: "/league-statistics",
    name: "league-statistics",
    component: LeagueStatistics
  },
  {
    path: "/league-statistics-pick",
    name: "league-statistics-pick",
    component: LeagueStatisticsPick
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
  },
  {
    path: "/register",
    name: "register",
    beforeEnter: (from, to, next) => {
      let user = store.getters.getUser;

      if (user === null) {
        next();
      } else {
        next("/");
      }
    },
    component: Register
  },
  {
    path: "/user",
    name: "user",
    beforeEnter: (from, to, next) => {
      let user = store.getters.getUser;

      if (user === null) {
        next("/");
      } else {
        next();
      }
    },
    component: User
  },
  {
    path: "/find-password",
    name: "findPassword",
    beforeEnter: (from, to, next) => {
      let user = store.getters.getUser;

      if (user === null) {
        next();
      } else {
        next("/");
      }
    },
    component: FindPassword
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
