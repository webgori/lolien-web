<template>
  <v-app>
    <v-container class="contents" bg fill-height grid-list-lg text-lg-left>
      <v-row>
        <v-col lg="12">
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    v-if="$vuetify.breakpoint.xs"
                    class="text-center"
                    width="25%"
                    >가입일</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.xs"
                    class="text-center"
                    width="35%"
                    >닉네임</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.xs"
                    class="text-center"
                    width="40%"
                    >소환사명</th
                  >

                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="15%"
                    >가입일</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="25%"
                    >닉네임</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="20%"
                    >소환사명</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="20%"
                    >티어</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="20%"
                    >내전 MMR</th
                  >
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.createdAt">
                  <td class="text-center">
                    {{ user.createdAt | moment("YYYY년 MM월 DD일") }}
                  </td>
                  <td class="text-center">{{ user.nickname }}</td>
                  <td class="text-center">{{ user.summonerName }}</td>
                  <td v-if="$vuetify.breakpoint.smAndUp" class="text-center">{{
                    user.tier
                  }}</td>
                  <td v-if="$vuetify.breakpoint.smAndUp" class="text-center">{{
                    user.mmr
                  }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Member",
  components: {},
  data: () => ({ users: [] }),
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://api.lolien.kr/v1/users")
        .then(response => {
          this.users = response.data.users;
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  }
};
</script>
