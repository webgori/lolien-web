<template>
  <!-- <v-card class="mx-auto" :color="color">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="title mb-4" :class="titleColor">{{
          title
        }}</v-list-item-title>
        <div class="headline" :class="textColor">{{ text }}회</div>
      </v-list-item-content>

      <v-list-item-avatar size="50">
        <img
          src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Yasuo.png"
          alt="John"
        />
      </v-list-item-avatar>
    </v-list-item>
  </v-card> -->

  <v-card>
    <v-row class="no-gutters">
      <div class="col-auto">
        <div class="fill-height" :class="color + ' ' + color + '--text'">
          <pre> </pre>
        </div>
      </div>

      <div class="col pa-3 py-4" :class="color + '--text'">
        <v-list-item>
          <v-list-item-content :class="color + '--text'">
            <h5 class="text-truncate text-uppercase mb-3">{{ title }}</h5>
            <h1>{{ text }}</h1>
          </v-list-item-content>

          <v-list-item-avatar v-if="championUrl != null" size="50">
            <img :src="championUrl" alt="John" />
          </v-list-item-avatar>
        </v-list-item>

        <div v-if="detail != null">
          <v-divider></v-divider>
          <v-card-actions class="pa-2">
            <span class="font-italic" :class="color + '--text'">{{
              detail
            }}</span>
            <v-spacer></v-spacer>
          </v-card-actions>
        </div>
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String },
    subtitle: { type: String },
    text: { type: String },
    detail: { type: String },
    color: { type: String },
    titleColor: { type: String },
    textColor: { type: String },
    championName: { type: String },
    championUrl: { type: String }
  },
  data: () => {
    return {};
  },
  created() {},
  methods: {}
};
</script>
