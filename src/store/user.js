import api from "../api/api";
import router from "../router";

export default {
  state: {
    user: null,
    accessToken: null,
    refreshToken: null,
    refreshInterval: null
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getUserEmail(state) {
      return state.user.email;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getRefreshToken(state) {
      return state.refreshToken;
    },
    getRefreshInterval(state) {
      return state.refreshInterval;
    }
  },
  mutations: {
    setLeagueResults(state, response) {
      state.leagueResults = response.data.results;
      state.totalPages = response.data.totalPages;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    },
    setUser(state, user) {
      state.user = user;
    },
    setRefreshInterval(state, refreshInterval) {
      state.refreshInterval = refreshInterval;
    }
  },
  actions: {
    registerUser: ({ dispatch }, request) => {
      return api
        .register(request)
        .then(() => {
          dispatch("getUserInfo");
        })
        .catch(error => {
          if (error.response) {
            let status = error.response.status;

            if (status === 400) {
              let message = error.response.data.message;
              alert(message);
            }
          }
        });
    },
    login: ({ commit, dispatch }, request) => {
      return api
        .login(request)
        .then(response => {
          let accessToken = response.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          //localStorage.setItem("accessToken", accessToken);
          commit("setAccessToken", accessToken);

          let refreshToken = response.data.refreshToken;
          localStorage.setItem("refreshToken", refreshToken);
          // localStorage.setItem("refreshToken", refreshToken);
          // commit("setRefreshToken", refreshToken);

          dispatch("getUserInfo");

          router.push("/");

          let rememberEmail = request.rememberEmail;
          localStorage.setItem("rememberEmail", rememberEmail);

          if (rememberEmail) {
            let email = request.email;
            localStorage.setItem("email", email);
          } else {
            localStorage.removeItem("email");
          }

          let autoLogin = request.autoLogin;

          if (autoLogin) {
            localStorage.setItem("autoLogin", autoLogin, "30");
          }

          dispatch("intervalRefresh");
        })
        .catch(error => {
          // handle error
          if (error.response) {
            let status = error.response.status;

            if (status === 401) {
              alert("아이디 또는 비밀번호가 올바르지 않습니다.");
            }
          }
        });
    },
    getUserInfo: ({ commit }) => {
      return api
        .getUserInfo()
        .then(response => {
          commit("setUser", response.data.userInfo);
        })
        .catch(error => {
          if (error.response) {
            let status = error.response.status;

            if (status === 401) {
              let message = error.response.data.message;
              alert(message);
            }
          }

          localStorage.removeItem("accessToken");
        });
    },
    generateAccessToken: ({ dispatch }, request) => {
      return api.generateAccessToken(request).then(response => {
        let accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        // commit("setAccessToken", accessToken);

        dispatch("getUserInfo");
      });
    },
    logout: ({ state, commit }) => {
      let currentRouteName = router.currentRoute.name;

      return api.logout().then(() => {
        localStorage.removeItem("accessToken");
        commit("setAccessToken", null);

        localStorage.removeItem("refreshToken");
        commit("setRefreshToken", null);

        commit("setUser", null);

        localStorage.removeItem("autoLogin");

        var refreshInterval = state.refreshInterval;
        clearInterval(refreshInterval);

        if (currentRouteName != "home") {
          router.push("/");
        }
      });
    },
    checkLogin: ({ state }) => {
      let login = state.login;

      if (!login) {
        let errorMessage = "로그인이 필요합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      }
    },
    intervalRefresh: ({ commit, dispatch }) => {
      var millisecondsPerMinute = 60000;

      var refreshInterval = setInterval(function() {
        let email = localStorage.getItem("email");

        if (email !== null) {
          let refreshToken = localStorage.getItem("refreshToken");

          dispatch("generateAccessToken", {
            email: email,
            refreshToken: refreshToken
          });
        }
      }, millisecondsPerMinute * 30);

      commit("setRefreshInterval", refreshInterval);
    },
    alterUser: ({ dispatch }, request) => {
      request.loading.alter = true;

      return api
        .alter(request)
        .then(() => {
          request.loading.alter = false;
          alert("회원 정보가 수정되었습니다.");
          dispatch("getUserInfo");
        })
        .catch(error => {
          request.loading.alter = false;

          if (error.response) {
            let status = error.response.status;

            if (status === 400) {
              let message = error.response.data.message;
              alert(message);
            }
          }
        });
    },
    leaveUser: ({ dispatch }, request) => {
      return api.leave(request).then(() => {
        dispatch("logout");
      });
    }
  }
};
