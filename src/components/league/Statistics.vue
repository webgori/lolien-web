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

    <v-row>
      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostBannedChampionName != ''"
          title="가장 많이 밴을 당한 챔피언"
          :text="mostBannedChampionName"
          :champion-url="mostBannedChampionUrl"
          :detail="mostBannedCount"
          color="secondary"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3">
        <statistics-card
          v-if="mostPlayedChampionName != ''"
          title="가장 많이 플레이한 챔피언"
          :text="mostPlayedChampionName"
          :champion-url="mostPlayedChampionUrl"
          :detail="mostPlayedCount"
          color="accent"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3">
        <statistics-card
          v-if="mostWinningChampionName != ''"
          title="가장 승률이 높은 챔피언"
          :text="mostWinningChampionName"
          :champion-url="mostWinningChampionUrl"
          :detail="mostWinningWinRate"
          color="error"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3">
        <statistics-card
          v-if="mostWinningChampionName != ''"
          title="가장 많이 내전에 참여한 소환사"
          :champion-name="mostPlayedSummonerName"
          :text="mostPlayedSummonerName"
          :detail="mostPlayedSummonerDetail"
          color="info"
        >
        </statistics-card
      ></v-col>
    </v-row>

    <v-row>
      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostKdaSummonerName != ''"
          title="KDA가 가장 좋은 소환사"
          :text="mostKdaSummonerName"
          :detail="mostKdaSummonerDetail"
          color="success"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostKillSummonerName != ''"
          title="가장 많이 처치한 소환사"
          :text="mostKillSummonerName"
          :detail="mostKillSummonerDetail"
          color="warning"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostDeathSummonerName != ''"
          title="가장 많이 죽은 소환사"
          :text="mostDeathSummonerName"
          :detail="mostDeathSummonerDetail"
          color="pink"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostAssistSummonerName != ''"
          title="가장 많이 처치 기여한 소환사"
          :text="mostAssistSummonerName"
          :detail="mostAssistSummonerDetail"
          color="purple"
        >
        </statistics-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostVisionScoreSummonerName != ''"
          title="시야 점수가 가장 높은 소환사"
          :text="mostVisionScoreSummonerName"
          :detail="mostVisionScoreSummonerDetail"
          color="deep-purple"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostTotalDamageDealtToChampionsSummonerName != ''"
          title="총 챔피언에게 가한 피해량이 가장 높은 소환사"
          :text="mostTotalDamageDealtToChampionsSummonerName"
          :detail="mostTotalDamageDealtToChampionsSummonerDetail"
          color="indigo"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostTotalDamageTakenSummonerName != ''"
          title="총 받은 피해량이 가장 높은 소환사"
          :text="mostTotalDamageTakenSummonerName"
          :detail="mostTotalDamageTakenSummonerDetail"
          color="blue"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostGoldEarnedSummonerName != ''"
          title="획득한 골드가 가장 높은 소환사"
          :text="mostGoldEarnedSummonerName"
          :detail="mostGoldEarnedSummonerDetail"
          color="light-blue"
        >
        </statistics-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostNeutralMinionsKilledSummonerName != ''"
          title="CS가 가장 많은 소환사"
          :text="mostNeutralMinionsKilledSummonerName"
          :detail="mostNeutralMinionsKilledSummonerDetail"
          color="cyan"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostFirstBloodKillSummonerName != ''"
          title="FIRST BLOOD가 가장 많은 소환사"
          :text="mostFirstBloodKillSummonerName"
          :detail="mostFirstBloodKillSummonerDetail"
          color="teal"
        >
        </statistics-card>
      </v-col>

      <v-col lg="3" cols="sm" class="pb-2">
        <statistics-card
          v-if="mostFirstTowerKillSummonerName != ''"
          title="첫 포탑을 가장 많이 파괴한 소환사"
          :text="mostFirstTowerKillSummonerName"
          :detail="mostFirstTowerKillSummonerDetail"
          color="green"
        >
        </statistics-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
//import Navbar from "../components/Navbar"
import axios from "axios";
import StatisticsCard from "../home/cards/StatisticsCard";
import { mapMutations } from "vuex";

export default {
  name: "Index",
  components: {
    StatisticsCard
  },
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    league: {},
    leagues: [],
    page: 1,
    totalPages: null,
    size: 3,
    summonerName: "",
    startDateOfMonth: "",
    endDateOfMonth: "",
    mostBannedChampionName: "",
    mostBannedChampionUrl: "",
    mostBannedCount: "",
    mostPlayedChampionName: "",
    mostPlayedChampionUrl: "",
    mostPlayedCount: "",
    mostWinningChampionName: "",
    mostWinningChampionUrl: "",
    mostWinningWinRate: "",
    mostPlayedSummonerName: "",
    mostPlayedSummonerDetail: "",
    mostKdaSummonerName: "",
    mostKdaSummonerDetail: "",

    mostKillSummonerName: "",
    mostKillSummonerDetail: "",

    mostDeathSummonerName: "",
    mostDeathSummonerDetail: "",

    mostAssistSummonerName: "",
    mostAssistSummonerDetail: "",

    mostVisionScoreSummonerName: "",
    mostVisionScoreSummonerDetail: "",

    mostTotalDamageDealtToChampionsSummonerName: "",
    mostTotalDamageDealtToChampionsSummonerDetail: "",

    mostTotalDamageTakenSummonerName: "",
    mostTotalDamageTakenSummonerDetail: "",

    mostGoldEarnedSummonerName: "",
    mostGoldEarnedSummonerDetail: "",

    mostNeutralMinionsKilledSummonerName: "",
    mostNeutralMinionsKilledSummonerDetail: "",

    mostFirstTowerKillSummonerName: "",
    mostFirstTowerKillSummonerDetail: "",

    mostFirstBloodKillSummonerName: "",
    mostFirstBloodKillSummonerDetail: "",
    matchesChartData: {
      //Data to be represented on x-axis
      labels: [],
      datasets: [
        {
          label: "참여 횟수",
          borderColor: "#1976D2",
          backgroundColor: "#1976D2",
          pointBackgroundColor: "white",
          borderWidth: 3,
          pointBorderColor: "#82B1FF",
          fill: false,
          lineTension: 0,
          //Data to be represented on y-axis
          data: []
        }
      ]
    },
    //Chart.js options that controls the appearance of the chart
    matchesChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "일별 내전 참여 횟수",
        fontSize: 20,
        fontColor: "#1976d2"
      },
      tooltips: {
        mode: "index",
        intersect: false
      },
      hover: {
        mode: "nearest",
        intersect: true
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: false
              //labelString: "x축"
            }
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
              suggestedMin: 0
            },
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: false
              //labelString: "y축"
            }
          }
        ]
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  }),
  created() {
    this.getLeagues().then(response => {
      this.leagues = response.data.leagues;

      if (this.leagues.length > 0) {
        this.league = this.leagues[0];

        this.getStatistics()
          .then(response => {
            let matches = response.data.matches;

            if (matches.length > 0) {
              this.startDateOfMonth = response.data.startDateOfMonth;
              this.endDateOfMonth = response.data.endDateOfMonth;

              this.matchesChartData.labels = response.data.matches.map(
                m => m.gameCreation
              );
              this.matchesChartData.datasets[0].data = response.data.matches.map(
                m => m.matchCount
              );

              this.mostBannedChampionName =
                response.data.mostBannedList[0].championName;
              this.mostBannedChampionUrl =
                response.data.mostBannedList[0].championUrl;
              this.mostBannedCount =
                response.data.mostBannedList[0].count + " 회";

              this.mostPlayedChampionName =
                response.data.mostPlayedChampionList[0].championName;
              this.mostPlayedChampionUrl =
                response.data.mostPlayedChampionList[0].championUrl;
              this.mostPlayedCount =
                response.data.mostPlayedChampionList[0].count + " 회";

              this.mostWinningChampionName =
                response.data.mostWinningList[0].championName;
              this.mostWinningChampionUrl =
                response.data.mostWinningList[0].championUrl;
              this.mostWinningWinRate =
                response.data.mostWinningList[0].winRate + " %";

              this.mostPlayedSummonerName =
                response.data.mostPlayedSummonerList[0].summonerName;
              this.mostPlayedSummonerDetail =
                response.data.mostPlayedSummonerList[0].count + " 회";

              this.mostKdaSummonerName =
                response.data.mostKillDeathAssistList[0].summonerName;
              this.mostKdaSummonerDetail =
                "KDA " + response.data.mostKillDeathAssistList[0].kda;

              this.mostKillSummonerName = response.data.mostKill.summonerName;
              this.mostKillSummonerDetail = response.data.mostKill.kills.toString();

              this.mostDeathSummonerName = response.data.mostDeath.summonerName;
              this.mostDeathSummonerDetail = response.data.mostDeath.deaths.toString();

              this.mostAssistSummonerName =
                response.data.mostAssist.summonerName;
              this.mostAssistSummonerDetail = response.data.mostAssist.assists.toString();

              this.mostVisionScoreSummonerName =
                response.data.mostVisionScore.summonerName;
              this.mostVisionScoreSummonerDetail = response.data.mostVisionScore.visionScore.toString();

              this.mostTotalDamageDealtToChampionsSummonerName =
                response.data.mostTotalDamageDealtToChampions.summonerName;
              this.mostTotalDamageDealtToChampionsSummonerDetail = this.numberWithCommas(
                response.data.mostTotalDamageDealtToChampions
                  .totalDamageDealtToChampions
              );

              this.mostTotalDamageTakenSummonerName =
                response.data.mostTotalDamageTaken.summonerName;
              this.mostTotalDamageTakenSummonerDetail = this.numberWithCommas(
                response.data.mostTotalDamageTaken.totalDamageTaken
              );

              this.mostGoldEarnedSummonerName =
                response.data.mostGoldEarned.summonerName;
              this.mostGoldEarnedSummonerDetail = this.numberWithCommas(
                response.data.mostGoldEarned.goldEarned
              );

              this.mostNeutralMinionsKilledSummonerName =
                response.data.mostNeutralMinionsKilled.summonerName;
              this.mostNeutralMinionsKilledSummonerDetail = response.data.mostNeutralMinionsKilled.neutralMinionsKilled.toString();

              this.mostFirstBloodKillSummonerName =
                response.data.mostFirstBloodKill.summonerName;
              this.mostFirstBloodKillSummonerDetail =
                response.data.mostFirstBloodKill.count + " 회";

              this.mostFirstTowerKillSummonerName =
                response.data.mostFirstTowerKill.summonerName;
              this.mostFirstTowerKillSummonerDetail =
                response.data.mostFirstTowerKill.count + " 회";
            }
          })
          .catch(error => {
            // handle error
            console.log(error);
          });

        /*this.getSchedules().then(response => {
          this.schedules = response.data.schedules;

          if (this.schedules.length > 0) {
            this.schedule = this.schedules[0];
            this.getLeagueResult();
          }
        });*/
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
    checkSummonerName() {
      let summonerName = this.summonerName.replace(/\s/g, "");

      var _this = this;
      return new Promise(function(resolve, reject) {
        axios
          .get("/v1/summoners/" + summonerName, {
            params: {
              page: _this.page - 1,
              size: _this.size
            }
          })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            if (error.response) {
              let status = error.response.status;

              if (status === 400) {
                alert("소환사를 찾을 수 없습니다.");
                _this.summonerName = "";
              }
            }
            // handle error
            console.log(error);
            reject(error);
          })
          .then(function() {
            // always executed
          });
      });
    },
    getCustomGamesBySummonerName() {
      let summonerName = this.summonerName.replace(/\s/g, "");

      var _this = this;

      this.checkSummonerName().then(function() {
        _this.$router.push({
          name: "custom-game",
          // params: { summonerName: _this.summonerName }
          query: { summonerName: summonerName }
        });
      });
    },
    getStatistics() {
      var _this = this;

      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        axios
          .get("/v1/leagues/" + _this.league.idx + "/statistics")
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
    getLogoUrl() {
      return require(`@/assets/images/logo.jpg`);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    onChangeLeague(event) {
      this.league = event;

      this.getStatistics()
        .then(response => {
          this.summonerName = "";
          this.startDateOfMonth = "";
          this.endDateOfMonth = "";
          this.mostBannedChampionName = "";
          this.mostBannedChampionUrl = "";
          this.mostBannedCount = "";
          this.mostPlayedChampionName = "";
          this.mostPlayedChampionUrl = "";
          this.mostPlayedCount = "";
          this.mostWinningChampionName = "";
          this.mostWinningChampionUrl = "";
          this.mostWinningWinRate = "";
          this.mostPlayedSummonerName = "";
          this.mostPlayedSummonerDetail = "";
          this.mostKdaSummonerName = "";
          this.mostKdaSummonerDetail = "";

          this.mostKillSummonerName = "";
          this.mostKillSummonerDetail = "";

          this.mostDeathSummonerName = "";
          this.mostDeathSummonerDetail = "";

          this.mostAssistSummonerName = "";
          this.mostAssistSummonerDetail = "";

          this.mostVisionScoreSummonerName = "";
          this.mostVisionScoreSummonerDetail = "";

          this.mostTotalDamageDealtToChampionsSummonerName = "";
          this.mostTotalDamageDealtToChampionsSummonerDetail = "";

          this.mostTotalDamageTakenSummonerName = "";
          this.mostTotalDamageTakenSummonerDetail = "";

          this.mostGoldEarnedSummonerName = "";
          this.mostGoldEarnedSummonerDetail = "";

          this.mostNeutralMinionsKilledSummonerName = "";
          this.mostNeutralMinionsKilledSummonerDetail = "";

          this.mostFirstTowerKillSummonerName = "";
          this.mostFirstTowerKillSummonerDetail = "";

          this.mostFirstBloodKillSummonerName = "";
          this.mostFirstBloodKillSummonerDetail = "";

          let matches = response.data.matches;

          if (matches.length > 0) {
            this.startDateOfMonth = response.data.startDateOfMonth;
            this.endDateOfMonth = response.data.endDateOfMonth;

            this.matchesChartData.labels = response.data.matches.map(
              m => m.gameCreation
            );
            this.matchesChartData.datasets[0].data = response.data.matches.map(
              m => m.matchCount
            );

            this.mostBannedChampionName =
              response.data.mostBannedList[0].championName;
            this.mostBannedChampionUrl =
              response.data.mostBannedList[0].championUrl;
            this.mostBannedCount =
              response.data.mostBannedList[0].count + " 회";

            this.mostPlayedChampionName =
              response.data.mostPlayedChampionList[0].championName;
            this.mostPlayedChampionUrl =
              response.data.mostPlayedChampionList[0].championUrl;
            this.mostPlayedCount =
              response.data.mostPlayedChampionList[0].count + " 회";

            this.mostWinningChampionName =
              response.data.mostWinningList[0].championName;
            this.mostWinningChampionUrl =
              response.data.mostWinningList[0].championUrl;
            this.mostWinningWinRate =
              response.data.mostWinningList[0].winRate + " %";

            this.mostPlayedSummonerName =
              response.data.mostPlayedSummonerList[0].summonerName;
            this.mostPlayedSummonerDetail =
              response.data.mostPlayedSummonerList[0].count + " 회";

            this.mostKdaSummonerName =
              response.data.mostKillDeathAssistList[0].summonerName;
            this.mostKdaSummonerDetail =
              "KDA " + response.data.mostKillDeathAssistList[0].kda;

            this.mostKillSummonerName = response.data.mostKill.summonerName;
            this.mostKillSummonerDetail = response.data.mostKill.kills.toString();

            this.mostDeathSummonerName = response.data.mostDeath.summonerName;
            this.mostDeathSummonerDetail = response.data.mostDeath.deaths.toString();

            this.mostAssistSummonerName = response.data.mostAssist.summonerName;
            this.mostAssistSummonerDetail = response.data.mostAssist.assists.toString();

            this.mostVisionScoreSummonerName =
              response.data.mostVisionScore.summonerName;
            this.mostVisionScoreSummonerDetail = response.data.mostVisionScore.visionScore.toString();

            this.mostTotalDamageDealtToChampionsSummonerName =
              response.data.mostTotalDamageDealtToChampions.summonerName;
            this.mostTotalDamageDealtToChampionsSummonerDetail = this.numberWithCommas(
              response.data.mostTotalDamageDealtToChampions
                .totalDamageDealtToChampions
            );

            this.mostTotalDamageTakenSummonerName =
              response.data.mostTotalDamageTaken.summonerName;
            this.mostTotalDamageTakenSummonerDetail = this.numberWithCommas(
              response.data.mostTotalDamageTaken.totalDamageTaken
            );

            this.mostGoldEarnedSummonerName =
              response.data.mostGoldEarned.summonerName;
            this.mostGoldEarnedSummonerDetail = this.numberWithCommas(
              response.data.mostGoldEarned.goldEarned
            );

            this.mostNeutralMinionsKilledSummonerName =
              response.data.mostNeutralMinionsKilled.summonerName;
            this.mostNeutralMinionsKilledSummonerDetail = response.data.mostNeutralMinionsKilled.neutralMinionsKilled.toString();

            this.mostFirstBloodKillSummonerName =
              response.data.mostFirstBloodKill.summonerName;
            this.mostFirstBloodKillSummonerDetail =
              response.data.mostFirstBloodKill.count + " 회";

            this.mostFirstTowerKillSummonerName =
              response.data.mostFirstTowerKill.summonerName;
            this.mostFirstTowerKillSummonerDetail =
              response.data.mostFirstTowerKill.count + " 회";
          }
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
