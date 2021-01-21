<template>
  <v-app>
    <v-row dense>
      <v-col lg="12">
        <v-row dense>
          <v-col cols="12" lg="2" offset-lg="6">
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

          <v-col cols="12" lg="4">
            <v-select
              v-model="schedule"
              dense
              :items="schedules"
              solo
              :item-text="getScheduleText"
              item-value="idx"
              return-object
              label="진행하신 경기를 선택해주세요."
              @change="onChangeSchedule($event)"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

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
        v-for="leagueResult in leagueResults"
        :key="leagueResult.idx"
        cols="12"
        lg="12"
      >
        <LeagueResultCard
          :league-result="leagueResult"
          @setDeleteResultDialog="setDeleteResultDialog"
          @goToIntro="goToIntro"
        />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
import LeagueResultCard from "@/components/league/LeagueResultCard";
import { mapMutations } from "vuex";
import moment from "moment";

export default {
  name: "Member",
  components: { LeagueResultCard },
  props: {
    leagueIndex: { default: 0, type: Number },
    scheduleIndex: { default: 0, type: Number }
  },
  data: () => {
    return {
      league: {},
      leagues: [],
      page: 1,
      totalPages: null,
      size: 3,
      clientVersions: [],
      customGamesVersion: [],
      championData: {},
      leagueResults: [],
      itemData: {},
      deleteResultDialog: false,
      deleteResultGameId: null,
      schedules: [],
      schedule: {},
      currentScheduleIndex: 0
    };
  },
  created() {
    this.getLeagues().then(response => {
      this.leagues = response.data.leagues;

      if (this.leagues.length > 0) {
        this.league = this.leagues[this.leagues.length - 1];

        this.getSchedules().then(response => {
          this.schedules = response.data.schedules;

          if (this.schedules.length > 0) {
            this.schedule = this.schedules[0];
            this.getLeagueResult();
          }
        });
      }
    });

    this.$eventBus.$on("getLeagueResults", this.init);
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
    getLeagueResult() {
      this.getLeagueResults(this.schedule).then(response => {
        this.leagueResults = response.data.results;
        this.totalPages = response.data.totalPages;
      });
    },
    updatePage: function(page) {
      this.page = page;
      this.getLeagueResults();
      scroll(0, 0);
    },
    getLeagueResults(schedule) {
      var _this = this;
      var schedule1 = schedule;
      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        axios
          .get("/v1/leagues/" + _this.league.idx, {
            params: {
              scheduleIdx: schedule1.idx,
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
        .delete("/v1/leagues/result/" + this.deleteResultGameId)
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
    getScheduleText(item) {
      if (item.idx == null) {
        return;
      }

      let dateTime = item.matchDateTime;
      let teamName = item.team.koreanName;
      let enemyTeamName = item.enemyTeam.koreanName;
      let text =
        moment(dateTime).format("YYYY-MM-DD a hh:mm:ss") +
        " - " +
        teamName +
        " vs " +
        enemyTeamName;

      return text;
    },
    getSchedules() {
      var _this = this;

      return new Promise(function(resolve, reject) {
        axios
          .get("/v1/leagues/schedule")
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

      this.getSchedules().then(response => {
        this.schedules = response.data.schedules;

        if (this.schedules.length > 0) {
          this.schedule = this.schedules[0];
          this.getLeagueResult();
        }
      });
    },
    onChangeSchedule(event) {
      this.schedule = event;
      this.getLeagueResult();
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
