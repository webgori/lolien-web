<template>
  <v-container fluid fill-height class="contents">
    <v-row align="center" justify="center">
      <v-col lg="4">
        <v-card class="elevation-4">
          <v-toolbar dark color="cyan">
            <v-toolbar-title>회원가입</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-row dense>
                <v-col lg="10">
                  <v-text-field
                    v-model="email"
                    prepend-icon="fas fa-user"
                    name="login"
                    label="이메일"
                    type="text"
                    @keyup.enter="keyupEnter()"
                    autocomplete="off"
                    :disabled="requestedVerifyEmail"
                  ></v-text-field>
                </v-col>

                <v-col lg="2" align-self="center">
                  <v-btn
                    :disabled="
                      email.length == 0 ||
                        requestedVerifyEmail == true ||
                        loadingVerifyEmail
                    "
                    @click="this.verifyEmail"
                    :loading="loadingVerifyEmail"
                    >인증하기</v-btn
                  >
                </v-col>
              </v-row>

              <v-row dense v-if="this.requestedVerifyEmail">
                <v-col lg="12">
                  <v-text-field
                    v-model="emailAuthNumber"
                    prepend-icon="fas fa-key"
                    name="emailAuthNumber"
                    label="이메일 인증 번호"
                    type="text"
                    @keyup.enter="keyupEnter()"
                    autocomplete="off"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    v-model="nickname"
                    prepend-icon="fas fa-comment"
                    name="nickname"
                    label="닉네임"
                    type="text"
                    @keyup.enter="keyupEnter()"
                    autocomplete="off"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    v-model="password"
                    id="password"
                    prepend-icon="fas fa-lock"
                    name="password"
                    label="비밀번호"
                    type="password"
                    @keyup.enter="keyupEnter()"
                    autocomplete="off"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    v-model="passwordConfirm"
                    id="passwordConfirm"
                    prepend-icon="fas fa-lock"
                    name="passwordConfirm"
                    label="비밀번호 확인"
                    type="password"
                    @keyup.enter="keyupEnter()"
                    autocomplete="off"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="10">
                  <v-text-field
                    v-model="clienId"
                    prepend-icon="fab fa-cuttlefish"
                    name="clienId"
                    label="클리앙 아이디"
                    type="text"
                    @keyup.enter="keyupEnter()"
                    autocomplete="off"
                    :disabled="requestedVerifyClienId"
                  ></v-text-field>
                </v-col>

                <v-col lg="2" align-self="center">
                  <v-btn
                    :disabled="
                      clienId.length == 0 ||
                        requestedVerifyClienId == true ||
                        loadingVerifyClienId
                    "
                    @click="this.verifyClienId"
                    :loading="loadingVerifyClienId"
                    >인증하기</v-btn
                  >
                </v-col>
              </v-row>

              <v-row dense v-if="this.requestedVerifyClienId">
                <v-col lg="12">
                  <v-text-field
                    v-model="clienIdAuthNumber"
                    prepend-icon="fas fa-key"
                    name="clienIdAuthNumber"
                    label="클리앙 인증 번호"
                    type="text"
                    @keyup.enter="keyupEnter()"
                    autocomplete="off"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    v-model="summonerName"
                    prepend-icon="fas fa-gamepad"
                    name="summonerName"
                    label="소환사 이름"
                    type="text"
                    @keyup.enter="keyupEnter()"
                    @keydown.space="event => event.preventDefault()"
                    autocomplete="off"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12" class="text-right">
                  <v-btn
                    color="primary"
                    block
                    @click="register()"
                    :loading="loadingRegister"
                    >확인</v-btn
                  >
                </v-col></v-row
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "../../router";

export default {
  created() {},
  data() {
    return {
      email: "",
      loadingVerifyEmail: false,
      requestedVerifyEmail: false,
      emailAuthNumber: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
      clienId: "",
      loadingVerifyClienId: false,
      requestedVerifyClienId: false,
      clienIdAuthNumber: "",
      summonerName: "",
      loadingRegister: false,
      rules: {
        emailCounter: value =>
          value.length <= 50 || "이메일은 최대 50자까지 사용 가능합니다.",
        passwordMinCounter: value =>
          value.length >= 6 || "비밀번호는 최소 6자부터 사용 가능합니다.",
        passwordMaxCounter: value =>
          value.length <= 20 || "비밀번호는 최대 20자까지 사용 가능합니다.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "올바른 이메일 형식이 아닙니다.";
        }
      },
      rememberEmail: false,
      autoLogin: false
    };
  },
  methods: {
    keyupEnter() {
      this.register({
        email: this.email,
        emailAuthNumber: this.emailAuthNumber,
        nickname: this.nickname,
        password: this.password,
        clienId: this.clienId,
        clienIdAuthNumber: this.clienIdAuthNumber,
        summonerName: this.summonerName
      });
    },
    checkEmail() {
      let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!pattern.test(this.email)) {
        let errorMessage = "올바른 이메일 형식이 아닙니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      } else if (this.email.length > 50) {
        let errorMessage = "이메일은 최대 50자까지 사용 가능합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      }
    },
    checkPassword() {
      if (this.password.length < 6) {
        let errorMessage = "비밀번호는 최소 6자부터 사용 가능합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      } else if (this.password.length > 20) {
        let errorMessage = "비밀번호는 최대 20자까지 사용 가능합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      } else if (this.password != this.passwordConfirm) {
        let errorMessage = "입력하신 비밀번호가 동일하지 않습니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      }
    },
    checkAuthNumber() {
      if (this.emailAuthNumber.length != 6) {
        let errorMessage = "이메일 인증 번호가 올바르지 않습니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      } else if (this.clienIdAuthNumber.length != 6) {
        let errorMessage = "클리앙 아이디 인증 번호가 올바르지 않습니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      }
    },
    verifyEmail() {
      this.checkEmail();

      this.loadingVerifyEmail = true;

      var _this = this;

      axios
        .post("https://api.lolien.kr/v1/users/register/verify/email", {
          email: this.email
        })
        .then(response => {
          // handle success
          let status = response.status;

          if (status === 204) {
            this.requestedVerifyEmail = true;
            this.emailAuthNumber = "";
          }
        })
        .catch(error => {
          // handle error
          let status = error.response.status;

          if (status === 400) {
            let message = error.response.data.message;
            alert(message);
          } else if (status === 404) {
            alert("서버에 문제가 발생하였습니다. 관리자에게 문의해주세요.");
          }
        })
        .then(function() {
          // always executed
          _this.loadingVerifyEmail = false;
        });
    },
    verifyClienId() {
      this.loadingVerifyClienId = true;

      var _this = this;

      axios
        .post("https://api.lolien.kr/v1/users/register/verify/clien-id", {
          clienId: this.clienId
        })
        .then(response => {
          // handle success
          let status = response.status;

          if (status === 204) {
            this.requestedVerifyClienId = true;
            this.authNumber = "";
          }
        })
        .catch(error => {
          // handle error
          let status = error.response.status;

          if (status === 400) {
            let message = error.response.data.message;
            alert(message);
          } else if (status === 404) {
            alert("서버에 문제가 발생하였습니다. 관리자에게 문의해주세요.");
          }
        })
        .then(function() {
          // always executed
          _this.loadingVerifyClienId = false;
        });
    },
    register() {
      this.checkEmail();
      this.checkAuthNumber();
      this.checkPassword();

      this.loadingRegister = true;

      var _this = this;

      axios
        .post("https://api.lolien.kr/v1/users/register", {
          email: this.email,
          emailAuthNumber: this.emailAuthNumber,
          nickname: this.nickname,
          password: this.password,
          clienId: this.clienId,
          clienIdAuthNumber: this.clienIdAuthNumber,
          summonerName: this.summonerName
        })
        .then(response => {
          // handle success
          let status = response.status;

          if (status === 204) {
            alert("회원가입이 성공하였습니다.");
            router.push("/");
          }
        })
        .catch(error => {
          // handle error
          let status = error.response.status;

          if (status === 400) {
            let message = error.response.data.message;
            alert(message);
          } else if (status === 404) {
            alert("서버에 문제가 발생하였습니다. 관리자에게 문의해주세요.");
          }
        })
        .then(function() {
          // always executed
          _this.loadingRegister = false;
        });
    }
  }
};
</script>

<style scoped>
.login-sub-btn {
  font-size: 14px;
}
</style>
