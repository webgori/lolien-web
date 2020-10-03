<template>
  <v-app>
    <v-container class="content" bg fill-height grid-list-lg text-lg-left>
      <v-layout row wrap align-content-start>
        <v-flex lg12 v-for="customGame in customGames" :key="customGame.idx">
          <CustomGameCard
            v-bind:customGame="customGame"
            @searchBySummonerName="searchBySummonerName"
            :summonerName="summonerName"
          />
        </v-flex>
        <v-flex lg12>
          <CustomGamePagination
            v-show="!loading"
            :totalPages="totalPages"
            @updatePage="updatePage"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import CustomGameCard from "@/components/custom-game/CustomGameCard";
import CustomGamePagination from "@/components/custom-game/CustomGamePagination";

export default {
  name: "Member",
  components: { CustomGameCard, CustomGamePagination },
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  created() {
    this.summonerName = this.$route.query.summonerName;
    this.getCustomGames();
  },
  data: () => {
    return {
      loading: false,
      page: 1,
      totalPages: null,
      size: 3,
      clientVersions: [],
      customGamesVersion: [],
      summonerData: {},
      championData: {},
      customGames: [],
      itemData: {},
      summonerName: null
    };
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
        _this.$emit("setLoading", true);
        _this.loading = true;

        if (_this.summonerName == null) {
          axios
            .get("https://api.lolien.kr/v1/custom-game", {
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
              _this.$emit("setLoading", false);
              _this.loading = false;
              // always executed
            });
        } else {
          axios
            .get("https://api.lolien.kr/v1/custom-game/" + _this.summonerName, {
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
              setTimeout(function() {
                _this.$emit("setLoading", false);
              }, 500);
              // always executed
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
    }
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
