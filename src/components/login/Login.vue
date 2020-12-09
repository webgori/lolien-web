<template>
  <v-container fluid fill-height class="contents">
    <v-row align="center" justify="center">
      <v-col lg="4">
        <v-card class="elevation-4">
          <v-toolbar dark color="cyan">
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    v-model="email"
                    prepend-icon="fas fa-user"
                    name="login"
                    label="이메일"
                    type="text"
                    autocomplete="off"
                    @keyup.enter="keyupEnter()"
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
                    @keyup.enter="keyupEnter()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-checkbox
                    v-model="rememberEmail"
                    label="이메일 기억하기"
                    hide-details
                  ></v-checkbox> </v-col
              ></v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-checkbox
                    v-model="autoLogin"
                    label="자동 로그인"
                    hide-details
                  ></v-checkbox> </v-col
              ></v-row>

              <v-row dense>
                <v-col lg="12" class="text-right">
                  <v-btn
                    color="primary"
                    block
                    @click="
                      login({
                        email: email,
                        password: password,
                        rememberEmail: rememberEmail,
                        autoLogin: autoLogin
                      })
                    "
                    >확인</v-btn
                  >
                </v-col></v-row
              >
            </v-form>
          </v-card-text>

          <v-divider class="mx-4" />

          <v-card-actions class="login-sub-btn">
            <v-row dense>
              <v-col lg="6">
                <span class="ml-2"
                  ><a href="#" @click="goToFindIdOrPassword">아이디 찾기</a> |
                  <a href="#" @click="goToFindIdOrPassword"
                    >비밀번호 찾기</a
                  ></span
                >
              </v-col>

              <v-spacer />

              <v-col lg="6" class="text-right">
                <span class="mr-2"
                  ><a href="#" @click="goToRegister">회원가입</a></span
                >
              </v-col>
            </v-row>
            <!-- <v-btn
              color="yellow"
              @click="login({ email: email, password: password })"
              >회원가입</v-btn
            >

            <v-btn
              color="alert"
              @click="login({ email: email, password: password })"
              >아이디 찾기</v-btn
            >

            <v-btn
              color="alert"
              @click="login({ email: email, password: password })"
              >비밀번호 찾기</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              @click="login({ email: email, password: password })"
              >확인</v-btn
            > -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      email: "",
      password: "",
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
  created() {
    this.getRememberEmailFromCookie();
  },
  methods: {
    ...mapActions(["login"]),
    keyupEnter() {
      this.checkEmail();
      this.checkPassword();

      this.login({
        email: this.email,
        password: this.password,
        rememberEmail: this.rememberEmail,
        autoLogin: this.autoLogin
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
      }
    },
    goToFindIdOrPassword() {
      this.$router.push("/");
      event.preventDefault();
    },
    goToRegister() {
      this.$router.push("/register");
      event.preventDefault();
    },
    getRememberEmailFromCookie() {
      let rememberEmail = Cookies.get("rememberEmail") === "true";
      this.rememberEmail = rememberEmail;

      if (rememberEmail) {
        this.getEmailFromCookie();
      }
    },
    getEmailFromCookie() {
      let email = Cookies.get("email");
      this.email = email;
    }
  }
};
</script>

<style scoped>
.login-sub-btn {
  font-size: 14px;
}
</style>
