<template>
  <v-container class="back" fluid fill-height>
    <v-row>
      <v-col lg="12"
        ><p class="text-center font-weight-bold display-1">
          LLL Winter 2020
        </p></v-col
      >
    </v-row>

    <v-row v-for="team in statisticsPick.teams" :key="team.teamName">
      <v-col lg="12"
        ><p class="text-center">
          <span class="font-weight-bold headline">{{ team.teamName }}</span>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    소환사 이름
                  </th>
                  <th class="text-center">
                    챔피언 이름 (픽 횟수)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="summoner in team.summoners"
                  :key="summoner.summonerName"
                >
                  <td>{{ summoner.summonerName }}</td>
                  <td>
                    <span v-for="champ in summoner.champs" :key="champ.champId"
                      >{{ champ.champName }} ({{ champ.pickCount }})<br />
                    </span>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table> </p
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
//import Navbar from "../components/Navbar"
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Index",
  components: {},
  props: {},
  data: () => ({
    statisticsPick: {}
  }),
  created() {
    this.getStatisticsPick()
      .then(response => {
        this.statisticsPick = response.data;
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  },
  methods: {
    getStatisticsPick() {
      var _this = this;

      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        axios
          .get("https://api.lolien.kr/v1/leagues/2/statistics/pick")
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            // handle error
            console.log(error);
            reject(error);
          })
          .then(function() {
            // always executed
            _this.setLoading(false);
          });
      });
    },
    ...mapMutations({
      setLoading: "setLoading"
    })
  }
};
</script>

<style scoped>
.logo-xs {
  width: 300px;
  height: 81px;
  border-radius: 20px;
}

.logo-lg-xl {
  width: 475px;
  height: 128px;
  border-radius: 20px;
}
</style>
