<template>
  <v-app>
    <v-container class="contents" bg fill-height grid-list-lg text-lg-left>
      <v-row>
        <v-col lg="12">
          <v-card v-show="!loading">
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
              :header-props="headerProps"
            >
              <template v-slot:[`item.createdAt`]="{ item }">
                {{ item.createdAt | moment("YYYY년 MM월 DD일") }}
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Member",
  components: {},
  data: () => ({
    search: "",
    mmr: "",
    users: []
  }),
  computed: {
    ...mapGetters({
      loading: "getLoading",
      login: "getLogin"
    }),
    headerProps() {
      return {
        sortByText: "정렬"
      };
    },
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
        {
          text: "티어",
          align: "center",
          filterable: false,
          value: "tier",
          sort: function(a, b) {
            if (
              a.includes("CHALLENGER") &&
              (b.includes("GRANDMASTER") ||
                b.includes("MASTER") ||
                b.includes("DIAMOND") ||
                b.includes("PLATINUM") ||
                b.includes("GOLD") ||
                b.includes("SILVER") ||
                b.includes("BRONZE") ||
                b.includes("IRON"))
            ) {
              return 1;
            }

            if (
              a.includes("GRANDMASTER") &&
              (b.includes("MASTER") ||
                b.includes("DIAMOND") ||
                b.includes("PLATINUM") ||
                b.includes("GOLD") ||
                b.includes("SILVER") ||
                b.includes("BRONZE") ||
                b.includes("IRON"))
            ) {
              return 1;
            }

            if (
              a.includes("MASTER") &&
              (b.includes("DIAMOND") ||
                b.includes("PLATINUM") ||
                b.includes("GOLD") ||
                b.includes("SILVER") ||
                b.includes("BRONZE") ||
                b.includes("IRON"))
            ) {
              return 1;
            }

            if (
              a.includes("DIAMOND") &&
              (b.includes("PLATINUM") ||
                b.includes("GOLD") ||
                b.includes("SILVER") ||
                b.includes("BRONZE") ||
                b.includes("IRON"))
            ) {
              return 1;
            }

            if (
              a.includes("PLATINUM") &&
              (b.includes("GOLD") ||
                b.includes("SILVER") ||
                b.includes("BRONZE") ||
                b.includes("IRON"))
            ) {
              return 1;
            }

            if (
              a.includes("GOLD") &&
              (b.includes("SILVER") ||
                b.includes("BRONZE") ||
                b.includes("IRON"))
            ) {
              return 1;
            }

            if (
              a.includes("SILVER") &&
              (b.includes("BRONZE") || b.includes("IRON"))
            ) {
              return 1;
            }

            if (a.includes("BRONZE") && b.includes("IRON")) {
              return 1;
            }

            if (
              b.includes("CHALLENGER") &&
              (a.includes("GRANDMASTER") ||
                a.includes("MASTER") ||
                a.includes("DIAMOND") ||
                a.includes("PLATINUM") ||
                a.includes("GOLD") ||
                a.includes("SILVER") ||
                a.includes("BRONZE") ||
                a.includes("IRON"))
            ) {
              return -1;
            }

            if (
              b.includes("GRANDMASTER") &&
              (a.includes("MASTER") ||
                a.includes("DIAMOND") ||
                a.includes("PLATINUM") ||
                a.includes("GOLD") ||
                a.includes("SILVER") ||
                a.includes("BRONZE") ||
                a.includes("IRON"))
            ) {
              return -1;
            }

            if (
              b.includes("MASTER") &&
              (a.includes("DIAMOND") ||
                a.includes("PLATINUM") ||
                a.includes("GOLD") ||
                a.includes("SILVER") ||
                a.includes("BRONZE") ||
                a.includes("IRON"))
            ) {
              return -1;
            }

            if (
              b.includes("DIAMOND") &&
              (a.includes("PLATINUM") ||
                a.includes("GOLD") ||
                a.includes("SILVER") ||
                a.includes("BRONZE") ||
                a.includes("IRON"))
            ) {
              return -1;
            }

            if (
              b.includes("PLATINUM") &&
              (a.includes("GOLD") ||
                a.includes("SILVER") ||
                a.includes("BRONZE") ||
                a.includes("IRON"))
            ) {
              return -1;
            }

            if (
              b.includes("GOLD") &&
              (a.includes("SILVER") ||
                a.includes("BRONZE") ||
                a.includes("IRON"))
            ) {
              return -1;
            }

            if (
              b.includes("SILVER") &&
              (a.includes("BRONZE") || a.includes("IRON"))
            ) {
              return -1;
            }

            if (b.includes("BRONZE") && a.includes("IRON")) {
              return -1;
            }

            if (
              a.endsWith("-I") &&
              (b.endsWith("-II") || b.endsWith("-III") || b.endsWith("-IV"))
            ) {
              return 1;
            }

            if (
              a.endsWith("-II") &&
              (b.endsWith("-III") || b.endsWith("-IV"))
            ) {
              return 1;
            }

            if (a.endsWith("-III") && b.endsWith("-IV")) {
              return 1;
            }

            if (
              b.endsWith("-I") &&
              (a.endsWith("-II") || a.endsWith("-III") || a.endsWith("-IV"))
            ) {
              return -1;
            }

            if (
              b.endsWith("-II") &&
              (a.endsWith("-III") || a.endsWith("-IV"))
            ) {
              return -1;
            }

            if (b.endsWith("-III") && a.endsWith("-IV")) {
              return -1;
            }

            if (a === "" || a === "") {
              return -1;
            }

            return 0;
          }
        },
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
      this.setLoading(true);

      var _this = this;

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
          _this.setLoading(false);
        });
    },
    ...mapMutations({
      setLoading: "setLoading"
    })
  }
};
</script>
