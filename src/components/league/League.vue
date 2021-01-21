<template>
  <v-app>
    <v-container class="contents" fluid>
      <v-row dense>
        <v-col lg="12">
          <v-row dense>
            <v-col cols="12" lg="2">
              <v-btn
                v-if="resultComponent"
                large
                color="white"
                @click="goToIntro()"
              >
                <v-icon left color="blue">fas fa-arrow-left</v-icon>
                <span class="body-1">리그 설명 보러 가기</span>
              </v-btn>
            </v-col>
            <v-col cols="12" lg="2" offset-lg="8">
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
      <v-row dense>
        <v-col cols="12" lg="12">
          <LeagueIntro
            v-if="!resultComponent"
            :league-index="league.idx"
            @showResult="showResult"
          />

          <LeagueResult
            v-if="resultComponent"
            :league-index="league.idx"
            :schedule-index="scheduleIndex"
            @goToIntro="goToIntro"
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" lg="12">
          <v-dialog v-model="fileUploadDialog" max-width="900px">
            <v-card>
              <v-card-title>
                <template>
                  <v-icon style="margin-right:10px;" large color="light-blue"
                    >fas fa-cloud-upload-alt</v-icon
                  >
                  <span class="headline" large>리플레이 파일 업로드</span>
                </template>
                <v-spacer></v-spacer>
                <v-btn icon @click="hideFileUploadDialog()">
                  <v-icon>fas fa-times</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    style="position: relative; border:1px solid #2196F3; border-style:dashed; "
                  >
                    <LeagueResultFileUpload
                      :league-index="league.idx"
                      :sub-menu-index="subMenuIndex"
                      @addedLeagueResult="addedLeagueResult"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import LeagueIntro from "@/components/league/LeagueIntro";
import LeagueResult from "@/components/league/LeagueResult";
import LeagueResultFileUpload from "@/components/league/LeagueResultFileUpload";
import { mapMutations } from "vuex";

export default {
  name: "Member",
  components: { LeagueIntro, LeagueResult, LeagueResultFileUpload },
  props: {},
  data: () => ({
    subMenuIndex: null,
    league: {},
    leagues: [],
    fileUploadDialog: false,
    resultComponent: false
  }),
  created() {
    this.$eventBus.$on("hideFileUploadDialog", this.hideFileUploadDialog);

    this.subMenuIndex =
      this.$route.query.subMenuIndex == null
        ? 1
        : this.$route.query.subMenuIndex;

    this.getLeagues().then(response => {
      this.leagues = response.data.leagues;

      if (this.leagues.length > 0) {
        this.league = this.leagues[this.leagues.length - 1];
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
    onChangeLeague(event) {
      this.league = event;
    },
    setSubMenuIndex(subMenuIndex) {
      this.subMenuIndex = subMenuIndex;
    },
    showFileUploadDialog() {
      this.fileUploadDialog = true;
    },
    hideFileUploadDialog() {
      this.fileUploadDialog = false;
    },
    addedLeagueResult() {
      if (this.subMenuIndex === 2) {
        this.subMenuIndex = 1;
        this.subMenuIndex = 2;
      }
    },
    showResult(scheduleIndex) {
      scroll(0, 0);
      this.resultComponent = true;
      this.scheduleIndex = scheduleIndex;
    },
    goToIntro() {
      scroll(0, 0);
      this.resultComponent = false;
    },
    ...mapMutations({
      setLoading: "setLoading"
    })
  }
};
</script>
