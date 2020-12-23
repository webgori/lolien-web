<template>
  <v-app>
    <v-container class="contents" bg fill-height grid-list-lg text-lg-left>
      <v-row>
        <v-col lg="12">
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="fas fa-search"
                label="소환사명을 입력해주세요."
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>

            <v-data-table
              :headers="headers"
              :items="users"
              :search="search"
              :items-per-page="15"
            ></v-data-table>
          </v-card>
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
  data: () => ({
    search: "",
    mmr: "",
    users: []
  }),
  computed: {
    headers() {
      return [
        {
          text: "가입일",
          align: "center",
          filterable: false,
          value: "createdAt"
        },
        {
          text: "닉네임",
          align: "center",
          filterable: false,
          value: "nickname"
        },
        { text: "소환사명", align: "center", value: "summonerName" },
        { text: "티어", align: "center", filterable: false, value: "tier" },
        {
          text: "내전 MMR",
          align: "center",
          filterable: false,
          value: "mmr",
          sort: function(a, b) {
            if (a === "휴면" || a === "-") {
              return -1;
            }

            return a - b;
          }
        }
      ];
    }
  },
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
    },
    test(a, b) {
      console.log(a);
      console.log(b);
    }
  }
};
</script>
