import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://api.lolien.kr";
const REFRESH_TOKEN_END_POINT_LIST = ["/v1/users/access-token"];
const NONE_AUTH_END_POINT_LIST = [
  "/v1/users/register",
  "/v1/users/login",
  "/v1/users/logout"
];

axios.interceptors.request.use(function(config) {
  let requestUrl = config.url;
  let endPoint = requestUrl.replace(BASE_URL, "");

  if (REFRESH_TOKEN_END_POINT_LIST.includes(endPoint)) {
    let refreshToken = Cookies.get("refreshToken");
    config.headers.Authorization = "Bearer " + refreshToken;
  } else {
    if (!NONE_AUTH_END_POINT_LIST.includes(endPoint)) {
      let accessToken = Cookies.get("accessToken");
      config.headers.Authorization = "Bearer " + accessToken;
    }
  }

  return config;
});

export default {
  BASE_URL: "https://api.lolien.kr",
  register(email, password, nickname) {
    return axios.post(this.BASE_URL + "/v1/users/register", {
      email: email,
      password: password,
      nickname: nickname
    });
  },
  login(request) {
    return axios.post(this.BASE_URL + "/v1/users/login", {
      email: request.email,
      password: request.password
    });
  },
  generateAccessToken(request) {
    return axios.post(this.BASE_URL + "/v1/users/access-token", {
      email: request.email
    });
  },
  logout() {
    return axios.post(this.BASE_URL + "/v1/users/logout", {
      accessToken: Cookies.get("accessToken"),
      refreshToken: Cookies.get("refreshToken")
    });
  },
  getUserInfo() {
    return axios.get(this.BASE_URL + "/v1/users");
  }
};
