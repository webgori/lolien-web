<template>
  <v-app v-if="$vuetify.breakpoint.smAndDown">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/intro">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>소개</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/join">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>가입</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><router-link to="/"
          ><span class="white--text navbar-logo">LoLien.kr</span></router-link
        ></v-toolbar-title
      >
    </v-app-bar>

    <v-main> </v-main>
    <v-footer app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>

  <v-app-bar v-else app>
    <v-toolbar-title>
      <router-link to="/">
        <!-- LoLien.kr -->
        <span class="white--text navbar-logo">LoLien.kr</span>
      </router-link>
    </v-toolbar-title>

    <div class="flex-grow-1" />

    <v-toolbar-items class="navbar">
      <v-btn text to="/intro">
        소개
      </v-btn>
      <v-btn text to="/join">
        가입
      </v-btn>
      <v-btn text @click="openMembers()">
        클랜원
      </v-btn>
      <v-btn text to="/custom-game">
        내전
      </v-btn>
      <!-- <v-btn text to="/custom-game-test">
        내전 테스트
      </v-btn> -->
      <v-btn text>
        리그
      </v-btn>
      <v-btn text @click="openKakao()">
        대화방
      </v-btn>
    </v-toolbar-items>

    <template v-if="$vuetify.breakpoint.smAndUp">
      <v-btn icon>
        <v-icon>mdi-export-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-delete-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",
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
