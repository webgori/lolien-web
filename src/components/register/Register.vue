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
                    autocomplete="off"
                    :disabled="requestedVerifyEmail"
                    @keyup.enter="register()"
                  ></v-text-field>
                </v-col>

                <v-col lg="2" align-self="center">
                  <v-btn
                    :disabled="
                      email.length == 0 ||
                        requestedVerifyEmail == true ||
                        loadingVerifyEmail
                    "
                    :loading="loadingVerifyEmail"
                    @click="verifyEmail"
                    >인증하기</v-btn
                  >
                </v-col>
              </v-row>

              <v-row v-if="requestedVerifyEmail" dense>
                <v-col lg="12">
                  <v-text-field
                    v-model="emailAuthNumber"
                    prepend-icon="fas fa-key"
                    name="emailAuthNumber"
                    label="이메일 인증 번호"
                    type="text"
                    autocomplete="off"
                    @keyup.enter="register()"
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
                    autocomplete="off"
                    @keyup.enter="register()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    id="password"
                    v-model="password"
                    prepend-icon="fas fa-lock"
                    name="password"
                    label="비밀번호"
                    type="password"
                    autocomplete="off"
                    @keyup.enter="register()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    id="passwordConfirm"
                    v-model="passwordConfirm"
                    prepend-icon="fas fa-lock"
                    name="passwordConfirm"
                    label="비밀번호 확인"
                    type="password"
                    autocomplete="off"
                    @keyup.enter="register()"
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
                    autocomplete="off"
                    :disabled="requestedVerifyClienId"
                    @keyup.enter="register()"
                  ></v-text-field>
                </v-col>

                <v-col lg="2" align-self="center">
                  <v-btn
                    :disabled="
                      clienId.length == 0 ||
                        requestedVerifyClienId == true ||
                        loadingVerifyClienId
                    "
                    :loading="loadingVerifyClienId"
                    @click="verifyClienId"
                    >인증하기</v-btn
                  >
                </v-col>
              </v-row>

              <v-row v-if="requestedVerifyClienId" dense>
                <v-col lg="12">
                  <v-text-field
                    v-model="clienIdAuthNumber"
                    prepend-icon="fas fa-key"
                    name="clienIdAuthNumber"
                    label="클리앙 인증 번호"
                    type="text"
                    autocomplete="off"
                    @keyup.enter="register()"
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
                    autocomplete="off"
                    @keyup.enter="register()"
                    @keydown.space="event => event.preventDefault()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-select
                    v-model="positions"
                    prepend-icon="fas fa-search-location"
                    :items="positionsData"
                    label="포지션"
                    multiple
                    chips
                    :rules="[
                      v =>
                        v.length > 0 ||
                        '최소 하나의 포지션을 선택해주셔야 합니다.'
                    ]"
                    required
                  ></v-select>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12" class="text-right">
                  <v-btn
                    color="primary"
                    block
                    :loading="loadingRegister"
                    @click="register()"
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
import { mapActions } from "vuex";

export default {
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
      rememberEmail: false,
      autoLogin: false,
      positionsData: ["Top", "Jungle", "Mid", "AD", "Support"],
      positions: []
    };
  },
  created() {},
  methods: {
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
    checkNickname() {
      if (this.nickname.length < 2) {
        let errorMessage = "닉네임은 최소 2자부터 사용 가능합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      } else if (this.nickname.length > 12) {
        let errorMessage = "닉네임은 최대 12자까지 사용 가능합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      }
    },
    checkPassword() {
      if (this.password.length < 8) {
        let errorMessage = "비밀번호는 최소 8자부터 사용 가능합니다.";

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
    checkSummonerName() {
      if (this.summonerName.length < 2) {
        let errorMessage = "소환사 이름은 최소 2자부터 사용 가능합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      } else if (this.summonerName.length > 20) {
        let errorMessage = "소환사 이름은 최대 20자까지 사용 가능합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      }
    },
    checkPosition() {
      if (this.positions.length === 0) {
        let errorMessage = "최소 하나의 포지션을 선택해주셔야 합니다.";

        alert(errorMessage);
        throw new TypeError(errorMessage);
      }
    },
    verifyEmail() {
      this.checkEmail();

      this.loadingVerifyEmail = true;

      var _this = this;

      axios
        .post("/v1/users/register/verify/email", {
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
        .post("/v1/users/register/verify/clien-id", {
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
      this.checkNickname();
      this.checkPassword();
      this.checkSummonerName();
      this.checkPosition();

      this.registerUser({
        email: this.email,
        emailAuthNumber: this.emailAuthNumber,
        nickname: this.nickname,
        password: this.password,
        clienId: this.clienId,
        clienIdAuthNumber: this.clienIdAuthNumber,
        summonerName: this.summonerName,
        positions: this.positions
      });
    },
    ...mapActions(["registerUser"])
  }
};
</script>

<style scoped>
.login-sub-btn {
  font-size: 14px;
}
</style>
