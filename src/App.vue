<template>
  <v-app v-if="$vuetify.breakpoint.smAndDown">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>홈</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/intro">
          <v-list-item-action>
            <v-icon>fas fa-file-alt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>소개</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="false" link to="/join">
          <v-list-item-action>
            <v-icon>fas fa-user-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>가입</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/member">
          <v-list-item-action>
            <v-icon>fas fa-user-friends</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>당원명부</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/custom-game">
          <v-list-item-action>
            <v-icon>fas fa-gamepad</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>내전</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/league">
          <v-list-item-action>
            <v-icon>fas fa-gamepad</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>리그</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="openKakao()">
          <v-list-item-action>
            <v-icon>fas fa-comments</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>대화방</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="light-blue">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><router-link to="/"
          ><span class="white--text navbar-logo">LoLien.kr</span></router-link
        ></v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <v-progress-linear
        :active="loading"
        color="primary"
        :indeterminate="true"
        class="ma-0"
        height="5"
        style="top: 1px;"
      />
      <router-view :key="$route.fullPath" />
    </v-main>

    <v-footer app color="light-blue">
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>

  <v-app v-else>
    <v-app-bar app color="light-blue" dense>
      <v-toolbar-title>
        <router-link to="/">
          <!-- LoLien.kr -->
          <span class="white--text navbar-logo">LoLien.kr</span>
        </router-link>
      </v-toolbar-title>

      <div class="flex-grow-1" />

      <v-toolbar-items class="navbar">
        <v-btn text to="/intro" class="white--text font-weight-bold title">
          소개
        </v-btn>
        <v-btn
          v-if="false"
          text
          to="/join"
          class="white--text font-weight-bold title"
        >
          가입
        </v-btn>
        <v-btn text to="/member" class="white--text font-weight-bold title">
          당원명부
        </v-btn>
        <v-btn
          text
          to="/custom-game"
          class="white--text font-weight-bold title"
        >
          내전
        </v-btn>
        <!-- <v-btn text to="/custom-game-test">
        내전 테스트
      </v-btn> -->

        <v-btn text to="/league" class="white--text font-weight-bold title">
          리그
        </v-btn>

        <!-- <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
              class="white--text font-weight-bold title"
            >
              리그
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/league">
              <v-list-item-title>안내</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->

        <!-- <v-btn text to="/league" class="white--text font-weight-bold title">
          리그
        </v-btn> -->
        <v-btn
          text
          @click="openKakao()"
          class="white--text font-weight-bold title"
        >
          대화방
        </v-btn>
      </v-toolbar-items>

      <template>
        <v-btn v-if="login" text @click="logout" color="white">
          <v-icon left>fas fa-sign-out-alt</v-icon> Logout
        </v-btn>
        <v-btn v-else text to="/login" color="white">
          <v-icon left>fas fa-sign-in-alt</v-icon> Login
        </v-btn>
        <!-- <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn> -->
      </template>
    </v-app-bar>

    <v-main
      v-if="
        leagueSubMenus.map(e => e.routeName).includes($router.currentRoute.name)
      "
      class="grey lighten-5"
    >
      <v-progress-linear
        :active="loading"
        color="primary"
        :indeterminate="true"
        class="ma-0"
        height="5"
        style="top: 1px;"
      />
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="subMenu in leagueSubMenus"
                  :key="subMenu.text"
                  link
                  :to="subMenu.to"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ subMenu.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <!--
                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-5">
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                -->
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view :key="$route.fullPath" />
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-main v-else>
      <v-progress-linear
        :active="loading"
        color="primary"
        :indeterminate="true"
        class="ma-0"
        height="5"
        style="top: 1px;"
      />
      <router-view :key="$route.fullPath" />
    </v-main>

    <v-footer app color="light-blue">
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Cookies from "js-cookie";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "App",
  created() {
    this.autoLogin();
  },
  computed: {
    ...mapGetters({
      loading: "getLoading",
      login: "getLogin",
      accessToken: "getAccessToken"
    })
  },
  data: () => ({
    drawer: null,
    leagueSubMenus: [
      {
        text: "소개",
        to: "/league",
        routeName: "league"
      },
      {
        text: "통계",
        to: "/league-statistics",
        routeName: "league-statistics"
      }
      /*{
        text: "리그 결과 등록",
        to: "/"
      }
      {
        text: "통계",
        to: "/league-statistics",
        routeName: "league"
      },
      {
        text: "소환사명으로 검색",
        to: "/",
        routeName: "league"
      },
      {
        text: "챔피언으로 검색",
        to: "/",
        routeName: "league"
      }*/
    ]
  }),
  methods: {
    openKakao: function() {
      window.open("https://open.kakao.com/o/g2FEzQ5");
      return;
    },
    openMembers: function() {
      window.open(
        "https://docs.google.com/spreadsheets/d/1QEoTuk_e7HLsSX9pnKJvKEt8yjxJJB1lS3aCwUottY4/edit#gid=139641232"
      );
      return;
    },
    ...mapActions(["getUserInfo", "generateAccessToken", "logout"]),
    autoLogin() {
      let autoLogin = Cookies.get("autoLogin") === "true";

      if (this.login == false && autoLogin) {
        let accessToken = Cookies.get("accessToken");

        if (accessToken == null) {
          let email = Cookies.get("email");
          let refreshToken = Cookies.get("refreshToken");

          this.generateAccessToken({
            email: email,
            refreshToken: refreshToken
          });
        } else {
          let jwt = VueJwtDecode.decode(accessToken);
          let expire = jwt.exp;
          let timestamp = this.getTimestamp();

          if (expire > timestamp) {
            this.getUserInfo();
          }
        }
      }
    },
    getTimestamp() {
      return +new Date() / 1000;
    }
  }
};
</script>
