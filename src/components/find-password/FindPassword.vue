<template>
  <v-container fluid fill-height class="contents">
    <v-row align="center" justify="center">
      <v-col lg="4">
        <v-card class="elevation-4">
          <v-toolbar dark color="cyan">
            <v-toolbar-title>비밀번호 찾기</v-toolbar-title>
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
                <v-col lg="12" class="text-right">
                  <v-btn
                    color="primary"
                    block
                    :loading="loading"
                    @click="keyupEnter()"
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
import api from "../../api/api.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      rememberEmail: false,
      autoLogin: false,
      loading: false
    };
  },
  created() {
    this.getRememberEmail();
  },
  methods: {
    keyupEnter() {
      this.checkEmail();

      this.loading = true;

      api
        .tempPassword({
          email: this.email
        })
        .then(() => {
          alert("임시 비밀번호를 이메일로 전송하였습니다.");
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;

          if (error.response) {
            let status = error.response.status;

            if (status === 400) {
              let message = error.response.data.message;
              alert(message);
            }
          }
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
    }
  }
};
</script>

<style scoped>
.login-sub-btn {
  font-size: 14px;
}
</style>
