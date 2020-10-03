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
                    v-if="$vuetify.breakpoint.lgAndUp"
                    class="text-center"
                    width="5%"
                    >가입 순서</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.lgAndUp"
                    class="text-center"
                    width="10%"
                    >가입일</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.lgAndUp"
                    class="text-center"
                    width="10%"
                    >클리앙 닉네임</th
                  >
                  <th class="text-center" width="10%">소환사명</th>
                  <th
                    v-if="$vuetify.breakpoint.lgAndUp"
                    class="text-center"
                    width="10%"
                    >가입일 기준 티어</th
                  >
                  <th class="text-center" width="10%">포지션</th>
                  <th
                    v-if="$vuetify.breakpoint.lgAndUp"
                    class="text-center"
                    width="45%"
                    >하고싶은 말</th
                  >
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(member, index) in members"
                  :key="member.registerDate"
                >
                  <td v-if="$vuetify.breakpoint.lgAndUp" class="text-center">
                    {{ index + 1 }}
                  </td>
                  <td v-if="$vuetify.breakpoint.lgAndUp" class="text-center">
                    {{ member.registerDate | moment("YYYY년 MM월 DD일") }}
                  </td>
                  <td v-if="$vuetify.breakpoint.lgAndUp" class="text-center">{{
                    member.clienNickname
                  }}</td>
                  <td class="text-center">{{ member.summonerName }}</td>
                  <td v-if="$vuetify.breakpoint.lgAndUp" class="text-center">{{
                    member.tier
                  }}</td>
                  <td class="text-center">{{ member.position }}</td>
                  <td v-if="$vuetify.breakpoint.lgAndUp" class="text-center">{{
                    member.comment
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
import members from "../../assets/json/members.json";

export default {
  name: "Member",
  components: {},
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  data: () => ({ members: members }),
  created() {
    /*this.$vuetify.theme.dark = true*/
  },
  methods: {
    test: function(event) {
      alert(event);
    }
  }
};
</script>
