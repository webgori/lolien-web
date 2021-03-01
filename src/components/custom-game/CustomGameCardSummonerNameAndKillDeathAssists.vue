<template>
  <v-col class="text-center" cols="3" sm="2" lg="2">
    <v-btn
      v-if="$vuetify.breakpoint.lgAndUp"
      text
      small
      @click="getCustomGamesBySummonerName(summoner.summonerName)"
    >
      {{ summoner.summonerName }}</v-btn
    >

    <v-btn
      v-else
      text
      x-small
      @click="getCustomGamesBySummonerName(summoner.summonerName)"
    >
      {{ summoner.summonerName }}</v-btn
    >

    <div class="text-center">
      {{ summoner.kills }} / {{ summoner.deaths }} /
      {{ summoner.assists }}
    </div>
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
  methods: {
    getCustomGamesBySummonerName(summonerName) {
      this.$emit("searchBySummonerName", summonerName);
    }
  }
};
</script>