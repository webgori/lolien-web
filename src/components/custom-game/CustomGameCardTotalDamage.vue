<template>
  <v-col cols="5" sm="2" md="2" lg="2" xl="2">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-progress-linear
          v-bind="attrs"
          :value="getPercentDamage(summoner, customGame)"
          v-on="on"
        ></v-progress-linear>
      </template>
      {{ numberToFormattedString(summoner.totalDamageDealtToChampions) }}
    </v-tooltip>
  </v-col>
</template>

<script>
export default {
  components: {},
  props: {
    customGame: { type: Object },
    summoner: { type: Object }
  },
  data: () => {
    return {};
  },
  created() {},
  methods: {
    getMaxDamage(customGame) {
      let summoner1Damage =
        customGame.blueTeamSummoners[0].totalDamageDealtToChampions;
      let summoner2Damage =
        customGame.blueTeamSummoners[1].totalDamageDealtToChampions;
      let summoner3Damage =
        customGame.blueTeamSummoners[2].totalDamageDealtToChampions;
      let summoner4Damage =
        customGame.blueTeamSummoners[3].totalDamageDealtToChampions;
      let summoner5Damage =
        customGame.blueTeamSummoners[4].totalDamageDealtToChampions;
      let summoner6Damage =
        customGame.redTeamSummoners[0].totalDamageDealtToChampions;
      let summoner7Damage =
        customGame.redTeamSummoners[1].totalDamageDealtToChampions;
      let summoner8Damage =
        customGame.redTeamSummoners[2].totalDamageDealtToChampions;
      let summoner9Damage =
        customGame.redTeamSummoners[3].totalDamageDealtToChampions;
      let summoner10Damage =
        customGame.redTeamSummoners[4].totalDamageDealtToChampions;

      let maxDamage = summoner1Damage;

      if (summoner2Damage > maxDamage) {
        maxDamage = summoner2Damage;
      }
      if (summoner3Damage > maxDamage) {
        maxDamage = summoner3Damage;
      }
      if (summoner4Damage > maxDamage) {
        maxDamage = summoner4Damage;
      }
      if (summoner5Damage > maxDamage) {
        maxDamage = summoner5Damage;
      }
      if (summoner6Damage > maxDamage) {
        maxDamage = summoner6Damage;
      }
      if (summoner7Damage > maxDamage) {
        maxDamage = summoner7Damage;
      }
      if (summoner8Damage > maxDamage) {
        maxDamage = summoner8Damage;
      }
      if (summoner9Damage > maxDamage) {
        maxDamage = summoner9Damage;
      }
      if (summoner10Damage > maxDamage) {
        maxDamage = summoner10Damage;
      }
      return maxDamage;
    },
    getPercentDamage(summoner, customGame) {
      let summonerDamage = summoner.totalDamageDealtToChampions;
      return parseInt((summonerDamage / this.getMaxDamage(customGame)) * 100);
    },
    numberToFormattedString(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>