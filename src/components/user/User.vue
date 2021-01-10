<template>
  <v-container fluid fill-height class="contents">
    <v-dialog v-model="leaveDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">확인</v-card-title>

        <v-card-text>
          정말 탈퇴 하시겠습니까?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="leaveDialog = false">
            취소
          </v-btn>

          <v-btn color="green darken-1" text @click="leave()">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row align="center" justify="center">
      <v-col lg="4">
        <v-card class="elevation-4">
          <v-toolbar dark color="cyan">
            <v-toolbar-title>회원 정보</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    prepend-icon="fas fa-user"
                    name="login"
                    label="이메일"
                    disabled
                    type="text"
                    :value="user.email"
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
                    @keyup.enter="alter()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    id="currentPassword"
                    v-model="currentPassword"
                    prepend-icon="fas fa-lock"
                    name="currentPassword"
                    label="현재 비밀번호"
                    type="password"
                    autocomplete="off"
                    @keyup.enter="alter()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    id="alterPassword"
                    v-model="alterPassword"
                    prepend-icon="fas fa-lock"
                    name="alterPassword"
                    label="변경할 비밀번호"
                    type="password"
                    autocomplete="off"
                    @keyup.enter="alter()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="12">
                  <v-text-field
                    prepend-icon="fab fa-cuttlefish"
                    name="clienId"
                    label="클리앙 아이디"
                    type="text"
                    disabled
                    :value="user.clienId"
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
                    @keyup.enter="alter()"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col lg="6" class="text-right">
                  <v-btn
                    color="error"
                    block
                    :loading="loading.leave"
                    @click="leaveDialog = true"
                    >탈퇴</v-btn
                  >
                </v-col>
                <v-col lg="6" class="text-right">
                  <v-btn
                    color="primary"
                    block
                    :loading="loading.alter"
                    @click="alter()"
                    >수정</v-btn
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      nickname: "",
      currentPassword: "",
      alterPassword: "",
      summonerName: "",
      leaveDialog: false,
      loading: { alter: false, leave: false }
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  created() {
    this.nickname = this.user.nickname;
    this.summonerName = this.user.summonerName;
  },
  methods: {
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
      if (this.currentPassword.length > 0 || this.alterPassword.length > 0) {
        if (this.currentPassword.length < 8 || this.alterPassword.length < 8) {
          let errorMessage = "비밀번호는 최소 8자부터 사용 가능합니다.";

          alert(errorMessage);
          throw new TypeError(errorMessage);
        } else if (
          this.currentPassword.length > 20 ||
          this.alterPassword.length > 20
        ) {
          let errorMessage = "비밀번호는 최대 20자까지 사용 가능합니다.";

          alert(errorMessage);
          throw new TypeError(errorMessage);
        } else if (this.currentPassword === this.alterPassword) {
          let errorMessage = "변경할 비밀번호가 현재 비밀번호와 동일합니다.";

          alert(errorMessage);
          throw new TypeError(errorMessage);
        }
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
    ...mapActions(["alterUser", "leaveUser"]),
    alter() {
      this.checkNickname();
      this.checkPassword();
      this.checkSummonerName();

      this.alterUser({
        nickname: this.nickname,
        currentPassword: this.currentPassword,
        alterPassword: this.alterPassword,
        summonerName: this.summonerName,
        loading: this.loading
      });
    },
    leave() {
      this.loading.leave = true;
      this.leaveDialog = false;

      this.leaveUser()
        .then(() => {
          alert("탈퇴 되었습니다.");
          this.loading.leave = false;
        })
        .catch(error => {
          this.loading.leave = false;

          if (error.response) {
            let status = error.response.status;

            if (status === 400) {
              let message = error.response.data.message;
              alert(message);
            }
          }
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
