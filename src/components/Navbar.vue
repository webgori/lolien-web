<template>
  <v-toolbar>
    <v-toolbar-title><router-link to="/">LoLien.kr</router-link></v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-toolbar-items>
      <v-btn text to="/intro">소개</v-btn>
      <v-btn text to="/join">가입</v-btn>
      <v-btn text @click="openKakao()">대화방</v-btn>
      <v-btn text>내전</v-btn>
      <v-btn text>리그</v-btn>
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
  </v-toolbar>
</template>