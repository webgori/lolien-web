<template>
  <v-app class="px-5">
    <v-row v-if="user">
      <v-col lg="12" class="text-lg-right">
        <v-btn icon color="black" @click="showFileUploadDialog()">
          <v-icon>fas fa-plus</v-icon>
        </v-btn>
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
                  <ResultFileUpload />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col>
        <v-dialog v-model="deleteResultDialog" max-width="290">
          <v-card>
            <v-card-title class="headline">확인</v-card-title>

            <v-card-text>
              내전 결과를 삭제하시겠습니까?
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
        v-for="customGame in customGames"
        :key="customGame.idx"
        cols="12"
        lg="12"
      >
        <CustomGameCard
          :custom-game="customGame"
          :summoner-name="summonerName"
          @searchBySummonerName="searchBySummonerName"
          @setDeleteResultDialog="setDeleteResultDialog"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="12">
        <CustomGamePagination
          v-show="!loading"
          :total-pages="totalPages"
          @updatePage="updatePage"
        />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
import CustomGameCard from "@/components/custom-game/CustomGameCard";
import CustomGamePagination from "@/components/custom-game/CustomGamePagination";
import ResultFileUpload from "@/components/custom-game/ResultFileUpload";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Member",
  components: { CustomGameCard, CustomGamePagination, ResultFileUpload },
  props: {},
  data: () => {
    return {
      page: 1,
      totalPages: null,
      size: 3,
      clientVersions: [],
      customGamesVersion: [],
      summonerData: {},
      championData: {},
      customGames: [],
      itemData: {},
      summonerName: null,
      deleteResultDialog: false,
      fileUploadDialog: false
    };
  },
  computed: {
    ...mapGetters({
      loading: "getLoading",
      user: "getUser"
    })
  },
  created() {
    this.$eventBus.$on("hideFileUploadDialog", this.hideFileUploadDialog);

    this.summonerName = this.$route.query.summonerName;
    this.getCustomGames();
  },
  methods: {
    updatePage: function(page) {
      this.page = page;
      this.getCustomGames();
      scroll(0, 0);
    },
    getCustomGames() {
      var _this = this;
      return new Promise(function(resolve, reject) {
        _this.setLoading(true);

        if (_this.summonerName == null) {
          axios
            .get("/v1/custom-game", {
              params: {
                page: _this.page - 1,
                size: _this.size
              }
            })
            .then(response => {
              // handle success
              _this.customGames = response.data.customGames;
              _this.totalPages = response.data.totalPages;
              resolve(response.data.customGames);
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
        } else {
          axios
            .get("/v1/custom-game/" + _this.summonerName, {
              params: {
                page: _this.page - 1,
                size: _this.size
              }
            })
            .then(response => {
              // handle success
              _this.customGames = response.data.customGames;
              _this.totalPages = response.data.totalPages;
              resolve(response.data.customGames);
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
        }
      });
    },
    searchBySummonerName(summonerName) {
      this.$router.push({
        name: "custom-game",
        query: { summonerName: summonerName }
      });

      //this.summonerName = summonerName;
      //this.getCustomGames();
      scroll(0, 0);
    },
    acceptDeleteResult() {
      var _this = this;

      axios
        .delete("/v1/custom-game/result/" + this.deleteResultGameId)
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
    cancelDeleteResult() {
      this.deleteResultDialog = false;
      this.deleteResultGameId = null;
    },
    setDeleteResultDialog(deleteResultDialog, gameId) {
      this.deleteResultDialog = deleteResultDialog;
      this.deleteResultGameId = gameId;
    },
    showFileUploadDialog() {
      this.fileUploadDialog = true;
    },
    hideFileUploadDialog() {
      this.fileUploadDialog = false;
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
