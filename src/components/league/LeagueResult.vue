<template>
  <!-- <v-app> -->
  <v-row dense>
    <v-col>
      <v-dialog v-model="deleteResultDialog" max-width="290">
        <v-card>
          <v-card-title class="headline">확인</v-card-title>

          <v-card-text>
            리그 결과를 삭제하시겠습니까?
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="acceptDeleteResult">
              예
            </v-btn>

            <v-btn color="green darken-1" text @click="cancelDeleteResult">
              아니요
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col
      cols="12"
      lg="12"
      v-for="leagueResult in leagueResults"
      :key="leagueResult.idx"
    >
      <LeagueResultCard
        :leagueResult="leagueResult"
        @searchBySummonerName="searchBySummonerName"
        :summonerName="summonerName"
        @setDeleteResultDialog="setDeleteResultDialog"
        @goToIntro="goToIntro"
      />
    </v-col>
  </v-row>
  <!-- </v-app> -->
</template>

<script>
import axios from "axios";
import LeagueResultCard from "@/components/league/LeagueResultCard";
import { mapMutations } from "vuex";

export default {
  name: "Member",
  components: { LeagueResultCard },
  props: {
    leagueIndex: { type: Number },
    scheduleIndex: { type: Number }
  },
  created() {
    this.$eventBus.$on("getLeagueResults", this.init);
    this.init();
  },
  data: () => {
    return {
      page: 1,
      totalPages: null,
      size: 3,
      clientVersions: [],
      customGamesVersion: [],
      summonerData: {},
      championData: {},
      leagueResults: [],
      itemData: {},
      summonerName: null,
      deleteResultDialog: false,
      deleteResultGameId: null
    };
  },
  methods: {
    init() {
      this.summonerName = this.$route.query.summonerName;

      if (this.summonerName == null) {
        this.getLeagueResults().then(response => {
          this.leagueResults = response.data.results;
          this.totalPages = response.data.totalPages;
        });
      } else {
        this.getLeagueResultsBySummonerName().then(response => {
          this.leagueResults = response.data.customGames;
          this.totalPages = response.data.totalPages;
        });
      }
    },
    updatePage: function(page) {
      this.page = page;
      this.getLeagueResults();
      scroll(0, 0);
    },
    getLeagueResults() {
      var _this = this;
      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        axios
          .get("https://api.lolien.kr/v1/leagues/" + _this.leagueIndex, {
            params: {
              scheduleIdx: _this.scheduleIndex,
              page: _this.page - 1,
              size: _this.size
            }
          })
          .then(response => {
            // handle success
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
    getLeagueResultsBySummonerName() {
      var _this = this;
      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        axios
          .get("https://api.lolien.kr/v1/custom-game/" + _this.summonerName, {
            params: {
              page: _this.page - 1,
              size: _this.size
            }
          })
          .then(response => {
            // handle success
            resolve(response);
          })
          .catch(error => {
            if (error.response) {
              let status = error.response.status;

              if (status === 400) {
                _this.$router.push("/");
                alert("소환사를 찾을 수 없습니다.");
              }
            }
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
    searchBySummonerName(summonerName) {
      this.$router.push({
        name: "league",
        query: { summonerName: summonerName, subMenuIndex: 2 }
      });

      //this.summonerName = summonerName;
      //this.getCustomGames();
      scroll(0, 0);
    },
    setDeleteResultDialog(deleteResultDialog, gameId) {
      this.deleteResultDialog = deleteResultDialog;
      this.deleteResultGameId = gameId;
    },
    cancelDeleteResult() {
      this.deleteResultDialog = false;
      this.deleteResultGameId = null;
    },
    acceptDeleteResult() {
      var _this = this;

      axios
        .delete(
          "https://api.lolien.kr/v1/leagues/result/" + this.deleteResultGameId
        )
        .then(response => {
          let status = response.status;

          if (status === 204) {
            // TODO 리그 결과 삭제 event-bus
            this.$eventBus.$emit("getLeagueResults");
          }
        })
        .then(function() {
          // always executed
          _this.deleteResultDialog = false;
          _this.deleteResultGameId = null;
        });
    },
    goToIntro() {
      this.$emit("goToIntro");
    },
    ...mapMutations({
      setLoading: "setLoading"
    })
  }
};
</script>

<style scoped>
.spell {
  /* width: 3vh;
  height: 3vh; */
  width: 30px;
  height: 30px;
}

.spell1 {
  /* margin-left: 5vh; */
  margin-right: 1vh;
}

.champ {
  width: 3vh;
  height: 3vh;
  margin-right: 1vh;
}

.item {
  width: 3vh;
  height: 3vh;
  margin-right: 1vh;
}
</style>
