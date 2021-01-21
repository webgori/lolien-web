<template>
  <v-app>
    <v-row dense>
      <v-col lg="12">
        <v-row dense>
          <v-col cols="12" lg="2" offset-lg="10">
            <v-select
              v-model="league"
              dense
              :items="leagues"
              solo
              item-text="title"
              item-value="idx"
              return-object
              @change="onChangeLeague($event)"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
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
  </v-app>
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
    league: {},
    leagues: [],
    statisticsPick: {}
  }),
  created() {
    this.getLeagues().then(response => {
      this.leagues = response.data.leagues;

      if (this.leagues.length > 0) {
        this.league = this.leagues[this.leagues.length - 1];

        this.getStatisticsPick()
          .then(response => {
            this.statisticsPick = response.data;
          })
          .catch(error => {
            // handle error
            console.log(error);
          });
      }
    });
  },
  methods: {
    getLeagues() {
      var _this = this;

      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        axios
          .get("/v1/leagues")
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
          });
      });
    },
    getStatisticsPick() {
      this.statisticsPick = {};
      var _this = this;

      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        axios
          .get("/v1/leagues/" + _this.league.idx + "/statistics/pick")
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
    onChangeLeague(event) {
      this.league = event;

      this.getStatisticsPick()
        .then(response => {
          this.statisticsPick = response.data;
        })
        .catch(error => {
          // handle error
          console.log(error);
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
