<template>
  <v-app-bar
    app
  >
    <v-toolbar-title>
      <router-link to="/">
        <!-- LoLien.kr -->
        <span class="white--text navbar-logo">LoLien.kr</span>
      </router-link>
    </v-toolbar-title>

    <div class="flex-grow-1" />

    <v-toolbar-items class="navbar">
      <v-btn
        text
        to="/intro"
      >
        소개
      </v-btn>
      <v-btn
        text
        to="/join"
      >
        가입
      </v-btn>
      <v-btn
        text
        to="/member"
      >
        클랜원
      </v-btn>
      <v-btn
        text
        to="/custom-game"
      >
        내전
      </v-btn>
      <v-btn text>
        리그
      </v-btn>
      <v-btn
        v-blur
        text
        @click="openKakao()"
      >
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
  methods: {
    openKakao: function() {
      window.open("https://open.kakao.com/o/g2FEzQ5");
      return;
    }
  }
};
</script>
