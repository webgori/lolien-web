import axios from "axios";

const REFRESH_TOKEN_END_POINT_LIST = ["/v1/users/access-token"];
const NONE_AUTH_END_POINT_LIST = [
  "/v1/users/register",
  "/v1/users/login",
  "/v1/users/logout"
];

axios.interceptors.request.use(function(config) {
  let requestUrl = config.url;

  if (requestUrl.includes(REFRESH_TOKEN_END_POINT_LIST)) {
    let refreshToken = localStorage.getItem("refreshToken");
    config.headers.Authorization = "Bearer " + refreshToken;
  } else {
    NONE_AUTH_END_POINT_LIST.forEach(ep => {
      if (!requestUrl.includes(ep)) {
        let accessToken = localStorage.getItem("accessToken");
        config.headers.Authorization = "Bearer " + accessToken;
      }
    });
  }

  return config;
});

export default {
  register(request) {
    return axios.post("/v1/users/register", {
      email: request.email,
      emailAuthNumber: request.emailAuthNumber,
      nickname: request.nickname,
      password: request.password,
      clienId: request.clienId,
      clienIdAuthNumber: request.clienIdAuthNumber,
      summonerName: request.summonerName
    });
  },
  login(request) {
    return axios.post("/v1/users/login", {
      email: request.email,
      password: request.password
    });
  },
  generateAccessToken(request) {
    return axios.post("/v1/users/access-token", {
      email: request.email
    });
  },
  logout() {
    return axios.post("/v1/users/logout", {
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken")
    });
  },
  getUserInfo() {
    return axios.get("/v1/users/info");
  },
  alter(request) {
    return axios.patch("/v1/users", {
      nickname: request.nickname,
      currentPassword: request.currentPassword,
      alterPassword: request.alterPassword,
      summonerName: request.summonerName,
      positions: request.positions
    });
  },
  leave() {
    return axios.delete("/v1/users");
  },
  tempPassword(request) {
    return axios.post("/v1/users/temp-password", {
      email: request.email
    });
  }
};
