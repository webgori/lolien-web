import api from "../api/api";
import router from "../router";
import Cookies from "js-cookie";

export default {
  state: {
    userInfo: null,
    login: false,
    accessToken: null,
    refreshToken: null
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getUserEmail(state) {
      return state.userInfo.email;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getRefreshToken(state) {
      return state.refreshToken;
    },
    getLogin(state) {
      return state.login;
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
    setLogin(state, login) {
      state.login = login;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    register: request => {
      return api.register(request);
    },
    login: ({ commit, dispatch }, request) => {
      return api
        .login(request)
        .then(response => {
          let accessToken = response.data.accessToken;
          Cookies.set("accessToken", accessToken);
          //localStorage.setItem("accessToken", accessToken);
          commit("setAccessToken", accessToken);

          let refreshToken = response.data.refreshToken;
          Cookies.set("refreshToken", refreshToken);
          // localStorage.setItem("refreshToken", refreshToken);
          // commit("setRefreshToken", refreshToken);

          commit("setLogin", true);

          dispatch("getUserInfo");

          router.push("/");

          let rememberEmail = request.rememberEmail;
          Cookies.set("rememberEmail", rememberEmail);

          if (rememberEmail) {
            let email = request.email;
            Cookies.set("email", email);
          } else {
            Cookies.remove("email");
          }

          let autoLogin = request.autoLogin;

          if (autoLogin) {
            Cookies.set("autoLogin", autoLogin, "30");
          }
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
          commit("setLogin", true);
          commit("setUserInfo", response.data.userInfo);
        })
        .catch(error => {
          console.log(error);
          Cookies.remove("accessToken");
        });
    },
    generateAccessToken: ({ dispatch }, request) => {
      return api.generateAccessToken(request).then(response => {
        let accessToken = response.data.accessToken;
        Cookies.set("accessToken", accessToken);
        // commit("setAccessToken", accessToken);

        dispatch("getUserInfo");
      });
    },
    logout: ({ commit }) => {
      let currentRouteName = router.currentRoute.name;

      return api.logout().then(() => {
        localStorage.removeItem("accessToken");
        commit("setAccessToken", null);

        localStorage.removeItem("refreshToken");
        commit("setRefreshToken", null);

        commit("setLogin", false);
        commit("setUserInfo", null);

        Cookies.remove("autoLogin");

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
    }
  }
};
