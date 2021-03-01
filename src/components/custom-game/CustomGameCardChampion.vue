<template>
  <v-col cols="auto">
    <v-list-item-avatar size="45">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-img v-bind="attrs" :src="summoner.championUrl" v-on="on"></v-img>
        </template>
        <span>{{ summoner.championName }}</span>
      </v-tooltip>
    </v-list-item-avatar>
  </v-col>
</template>

<script>
export default {
  components: {},
  props: {
    summoner: { type: Object }
  },
  data: () => {
    return {};
  },
  created() {},
  methods: {}
};
</script>