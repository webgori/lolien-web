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

        <v-list-item link to="/join">
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
        <v-btn text to="/join" class="white--text font-weight-bold title">
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
        <v-btn icon>
          <v-icon>fas fa-sign-in-alt</v-icon>
        </v-btn>
        <!-- <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn> -->
      </template>
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      loading: "getLoading"
    })
  },
  data: () => ({
    drawer: null
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
    }
  }
};
</script>
