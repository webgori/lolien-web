import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    leagueIndex: null,
    leagueResults: [],
    page: null,
    size: 10,
    totalPages: null
  },
  getters: {
    getLoading(state) {
      return state.loading;
    }
  },
  mutations: {
    setLeagueResults(state, response) {
      state.leagueResults = response.data.results;
      state.totalPages = response.data.totalPages;
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    getLeagueResults({ commit }) {
      this.state.loading = true;
      this.$emit("setLoading", true);
      this.loading = true;

      axios
        .get("https://api.lolien.kr/v1/leagues/" + this.state.leagueIndex, {
          params: {
            page: this.page - 1,
            size: this.size
          }
        })
        .then(response => {
          // handle success
          commit("setLeagueResults", response);
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(function() {
          this.state.loading = false;
          this.loading = false;
          // always executed
        });
    },
    refrashLeagueResults() {
      this.getLeagueResults();
    }
  },
  modules: {}
});
