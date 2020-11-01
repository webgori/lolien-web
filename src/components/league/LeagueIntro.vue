<template>
  <!-- <v-app> -->
  <!-- <v-container class="contents"> -->
  <v-row>
    <v-col lg="12" v-if="leagueIndex == 2">
      <p class="display-1 mb-0">LLL Winter 2020</p>
      <v-divider class="mb-2"></v-divider>

      <p>LOLIEN LUPIN LEAGUE Winter 2020</p>
      <p>롤리앙 내전 리그제</p>

      <p class="title font-weight-bold mb-0">개최 인사말</p>
      <v-divider class="mb-2"></v-divider>
      <p>안녕하십니까?</p>
      <p>LLL Winter 2020 총책임자 당주 크리카메 입니다.</p>
      <p>존경하는 롤리앙 당원 여러분, </p>
      <p
        >여러분이 모처럼 한마음으로 펼치는 축제인 " LLL Winter 2020 " 모두 함께
        즐길 수 있는 한 시즌이 될 수 있으면 좋겠고,</p
      >
      <p
        >경쟁력과 동업정신, 즐거운 마음가짐을 갖춘 수준 높은 2020 시즌이 되길
        바랍니다.</p
      >
      <p
        >각팀의 선수들 또한 이번 시즌 잘 준비하여 좋은 활약상을 통해 롤리앙
        미래에 큰 도움이 될 수 있기를 염원합니다.</p
      >
      <p
        >2020 시즌에는 각 팀들이 다양한 목표를 위해 본인 스스로 만족하고 좋은
        경기들을 보여주기를 기원 합니다.</p
      >
      <p>우리 롤리앙 당원들이 함께 하여 하나 되는 LLL Winter 2020에</p>
      <p>여러분들의 적극적인 관심과 참여, 그리고 협조를 부탁드립니다.</p>
      <p>감사합니다.</p>
      <p>2020-10-29</p>

      <p class="title font-weight-bold mb-0">리그 개막전</p>
      <v-divider class="mb-2"></v-divider>

      <v-row v-if="schedules.length > 0">
        <v-col lg="4">
          <v-simple-table class="pt-0 pb-3">
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    v-if="$vuetify.breakpoint.xs"
                    class="text-center"
                    width="35%"
                    >경기 날짜</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.xs"
                    class="text-center"
                    width="65%"
                    >대진</th
                  >

                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="30%"
                    >경기 날짜</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="40%"
                    >대진</th
                  >
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">{{
                    schedules[0].matchDateTime | moment("YYYY-MM-DD a hh:mm:ss")
                  }}</td>
                  <td class="text-center">
                    <img
                      v-if="schedules[0].team.englishName === 'Demacia'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/Demacia_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005456"
                    />

                    <img
                      v-if="schedules[0].team.englishName === 'Noxus'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/38/Noxus_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20161117055828"
                    />

                    <img
                      v-if="schedules[0].team.englishName === 'Freljord'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4e/Freljord_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005359"
                    />

                    <img
                      v-if="schedules[0].team.englishName === 'Shadow Isles'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/72/Shadow_Isles_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005424"
                    />

                    <span>{{ schedules[0].team.koreanName }}</span>

                    vs

                    <img
                      v-if="schedules[0].enemyTeam.englishName === 'Demacia'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/Demacia_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005456"
                    />

                    <img
                      v-if="schedules[0].enemyTeam.englishName === 'Noxus'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/38/Noxus_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20161117055828"
                    />

                    <img
                      v-if="schedules[0].enemyTeam.englishName === 'Freljord'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4e/Freljord_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005359"
                    />

                    <img
                      v-if="
                        schedules[0].enemyTeam.englishName === 'Shadow Isles'
                      "
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/72/Shadow_Isles_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005424"
                    />

                    <span>{{ schedules[0].enemyTeam.koreanName }}</span></td
                  >
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <p class="title font-weight-bold mb-0">리그 기간</p>
      <v-divider class="mb-2"></v-divider>
      <p>2020년 11월 ~ 2020년 12월</p>

      <p class="title font-weight-bold mb-0">리그 참가 자격</p>
      <v-divider class="mb-2"></v-divider>

      <ol>
        <li>당원명부 등록</li>
        <li>오픈채팅 입장</li>
        <li>소환사명. 카카오톡 오픈채팅 닉 통일</li>
        <li>경고 및 정지 받지 않은 당원</li>
        <li>2020년 내전 참여 횟수 최소 10회</li>
      </ol>

      <p v-if="!isEntryConditionReadMore"
        ><a class="" @click="setEntryConditionReadMore(true, $event)" href="#">
          올해 (2020년) 당원별 내전 참여 횟수
        </a>
      </p>

      <div v-if="isEntryConditionReadMore">
        <ul>
          <li
            v-for="summonerForParticipation in summonersForParticipation"
            :key="summonerForParticipation.summonerName"
            class="mb-0 ml-2"
            >{{ summonerForParticipation.summonerName }} ({{
              summonerForParticipation.numberOfParticipation
            }}
            회)</li
          >
        </ul>
        <a class="" @click="setEntryConditionReadMore(false, $event)" href="#">
          접기
        </a></div
      >

      <p class="title font-weight-bold mb-0">신청</p>
      <v-divider class="mb-2"></v-divider>

      <p
        >아래의 양식에 맞춰
        <a
          href="https://www.clien.net/service/board/cm_lol/15361742"
          target="_blank"
          >신청 게시글</a
        >에 댓글로 작성</p
      >

      <p
        >소환사이름 / 현시즌 티어 (언랭시 전시즌 티어) (숫자필요없음) /
        주포지션, 보조포지션</p
      >

      <p>예: KURI KAME / 실버 / 원딜 , 서폿</p>

      <ul>
        <li
          >20명 이상이 신청하였을 경우, 나머지 신청자들은 예비선수 (대기자)</li
        >
      </ul>

      <p class="title font-weight-bold mb-0">신청 마감</p>
      <v-divider class="mb-2"></v-divider>

      <p><v-icon>far fa-clock</v-icon> 2020년 10월 16일 금요일 오후 10시</p>

      <p class="title font-weight-bold mb-0">운영자 및 해설</p>
      <v-divider class="mb-2"></v-divider>

      <p
        >당원명부에 추가되어 있으시고, LOLien 오픈방 채팅에 참여하고 계시다면
        누구든지 운영자 및 해설을 하실 수 있습니다.</p
      >

      <p
        >자세한 내용은
        <a
          href="https://www.clien.net/service/board/cm_lol/15369237"
          target="_blank"
          >해당 글</a
        >을 참고 해주세요.</p
      >

      <p class="title font-weight-bold mb-0">팀</p>
      <v-divider class="mb-2"></v-divider>

      <p>
        <img src="@/assets/images/demacia.png" />
      </p>

      <p class="font-weight-bold">
        데마시아팀
      </p>

      <p>
        <img
          src="@/assets/images/demaciaTeam.jpg"
          :class="{ 'image-fit': $vuetify.breakpoint.xs }"
        />
      </p>

      <p>
        <img src="@/assets/images/noxus.png" />
      </p>

      <p class="font-weight-bold">
        녹서스팀
      </p>

      <p>
        <img
          src="@/assets/images/noxusTeam.jpg"
          :class="{ 'image-fit': $vuetify.breakpoint.xs }"
        />
      </p>

      <p>
        <img src="@/assets/images/freljord.png" />
      </p>

      <p class="font-weight-bold">
        프렐요드팀
      </p>

      <p>
        <img
          src="@/assets/images/freljordTeam.jpg"
          :class="{ 'image-fit': $vuetify.breakpoint.xs }"
        />
      </p>

      <p>
        <img src="@/assets/images/shadowIsles.png" />
      </p>

      <p class="font-weight-bold">
        그림자 군도팀
      </p>

      <p>
        <img
          src="@/assets/images/shadowIslesTeam.jpg"
          :class="{ 'image-fit': $vuetify.breakpoint.xs }"
        />
      </p>

      <!--
      <div v-for="team in teams" :key="team.idx">
        <p>{{ team.englishName }} ({{ team.koreanName }})</p>

        <ul v-if="team.englishName == 'Demacia'" class="pb-5">
          <li>꿈꾸는발라당</li>
          <li>크로누스</li>
          <li>하르크</li>
          <li>bom 네드베드</li>
          <li>Malkuth</li>
        </ul>

        <ul v-if="team.englishName == 'Noxus'" class="pb-5">
          <li>용찐찌</li>
          <li>MFC ATL Module</li>
          <li>IF YeTam</li>
          <li>kkomi kim</li>
          <li>Zella Day</li>
        </ul>

        <ul v-if="team.englishName == 'Freljord'" class="pb-5">
          <li>뭐하는고니</li>
          <li>아미스시마</li>
          <li>영블러드</li>
          <li>LUNA 에릭</li>
          <li>Shee</li>
        </ul>

        <ul v-if="team.englishName == 'Shadow Isles'" class="pb-5">
          <li>역시수저</li>
          <li>Cooltea</li>
          <li>Jajoon</li>
          <li>Range of Xerath</li>
          <li>김갓난</li>
        </ul>
      </div>
      -->

      <p class="title font-weight-bold mb-0">대진표</p>
      <v-divider class="mb-2"></v-divider>

      <v-row>
        <v-col lg="6">
          <v-simple-table class="pt-0 pb-3">
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    v-if="$vuetify.breakpoint.xs"
                    class="text-center"
                    width="35%"
                    >경기 날짜</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.xs"
                    class="text-center"
                    width="45%"
                    >대진</th
                  >

                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="25%"
                    >경기 날짜</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="30%"
                    >대진</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="15%"
                    >방송</th
                  >
                  <th
                    v-if="$vuetify.breakpoint.smAndUp"
                    class="text-center"
                    width="15%"
                    >심판</th
                  >
                  <th class="text-center" width="30%">결과</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="schedule in schedules" :key="schedule.idx">
                  <td class="text-center">{{
                    schedule.matchDateTime | moment("YYYY-MM-DD a hh:mm:ss")
                  }}</td>
                  <td class="text-center">
                    <img
                      v-if="schedule.team.englishName === 'Demacia'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/Demacia_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005456"
                    />

                    <img
                      v-if="schedule.team.englishName === 'Noxus'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/38/Noxus_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20161117055828"
                    />

                    <img
                      v-if="schedule.team.englishName === 'Freljord'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4e/Freljord_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005359"
                    />

                    <img
                      v-if="schedule.team.englishName === 'Shadow Isles'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/72/Shadow_Isles_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005424"
                    />

                    <span>{{ schedule.team.koreanName }}</span>

                    vs

                    <img
                      v-if="schedule.enemyTeam.englishName === 'Demacia'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/Demacia_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005456"
                    />

                    <img
                      v-if="schedule.enemyTeam.englishName === 'Noxus'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/38/Noxus_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20161117055828"
                    />

                    <img
                      v-if="schedule.enemyTeam.englishName === 'Freljord'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4e/Freljord_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005359"
                    />

                    <img
                      v-if="schedule.enemyTeam.englishName === 'Shadow Isles'"
                      class="pt-0"
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/72/Shadow_Isles_Crest_icon.png/revision/latest/scale-to-width-down/15?cb=20190720005424"
                    />

                    <span>{{ schedule.enemyTeam.koreanName }}</span></td
                  >
                  <td v-if="$vuetify.breakpoint.smAndUp" class="text-center">{{
                    schedule.description1
                  }}</td>

                  <td v-if="$vuetify.breakpoint.smAndUp" class="text-center">{{
                    schedule.description2
                  }}</td>

                  <td class="text-center"
                    ><a href="#" @click="showResult(schedule.idx)">보기</a></td
                  >
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <p class="title font-weight-bold mb-0">리그 결과</p>
      <v-divider class="mb-2"></v-divider>

      <p
        >리그 경기 진행 후
        <a href="#" @click="showFileUploadDialog()">리그 결과 등록</a>을 눌러서
        리플레이 파일을 등록하면 됩니다.</p
      >

      <p class="title font-weight-bold mb-0">후원</p>
      <v-divider class="mb-2"></v-divider>

      <p>
        <img
          src="@/assets/images/donator.jpg"
          :class="{ 'image-fit': $vuetify.breakpoint.xs }"
        />
      </p>

      <p class="font-weight-bold mb-0">혜택</p>

      <ul>
        <li
          >루팡리그 상품명 및 상품받는 조건 결정권리 (없으면 당주가 대신
          결정함)</li
        >

        <li>방송 게임 시작하기전에 스폰서 소개때 한줄 코멘트 홍보 가능</li>

        <li>엔딩크래딧 명단 추가</li></ul
      >

      <!-- LOLIEN LUPIN LEAGUE -->
    </v-col>
    <v-col cols="12" lg="12">
      <v-dialog v-model="fileUploadDialog" max-width="900px">
        <v-card>
          <v-card-title class="pl-3 pr-3">
            <template>
              <v-icon style="margin-right:10px;" large color="light-blue"
                >fas fa-cloud-upload-alt</v-icon
              >
              <span class="headline" large>리그 결과 등록</span>
            </template>
            <v-spacer></v-spacer>
            <v-btn icon @click="hideFileUploadDialog()">
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-card-title>

          <v-col lg="7" offset-lg="5">
            <v-select
              dense
              :items="schedules"
              solo
              :item-text="getScheduleText"
              item-value="idx"
              return-object
              label="진행하신 경기를 선택해주세요."
              v-model="schedule"
            ></v-select>
          </v-col>

          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
                style="position: relative; border:1px solid #2196F3; border-style:dashed; "
              >
                <LeagueResultFileUpload
                  :leagueIndex="leagueIndex"
                  :schedule="schedule"
                  @addedLeagueResult="addedLeagueResult"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
  <!-- </v-container> -->
  <!-- </v-app> -->
</template>

<script>
import axios from "axios";
import LeagueResultFileUpload from "@/components/league/LeagueResultFileUpload";
import moment from "moment";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Member",
  components: { LeagueResultFileUpload },
  props: { leagueIndex: { type: Number } },
  created() {
    this.$eventBus.$on("hideFileUploadDialog", this.hideFileUploadDialog);

    this.getSummonersForParticipation().then(response => {
      this.summonersForParticipation = response.data.summoners;
    });

    this.getTeams();
    this.getSchedules();
  },
  computed: {
    ...mapGetters({
      login: "getLogin"
    })
  },
  data: () => ({
    isEntryConditionReadMore: false,
    summonersForParticipation: [],
    fileUploadDialog: false,
    teams: [],
    schedules: [],
    schedule: {}
  }),
  methods: {
    getSummonersForParticipation() {
      return new Promise(function(resolve, reject) {
        axios
          .get("https://api.lolien.kr/v1/leagues/summoners/participation")
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            // handle error
            console.log(error);
            reject(error);
          })
          .then(function() {
            // always executed
          });
      });
    },
    setEntryConditionReadMore(isEntryConditionReadMore, event) {
      this.isEntryConditionReadMore = isEntryConditionReadMore;
      event.preventDefault();
    },
    showFileUploadDialog() {
      if (this.login) {
        this.fileUploadDialog = true;
      } else {
        alert("로그인이 필요합니다.");
      }

      event.preventDefault();
    },
    hideFileUploadDialog() {
      this.fileUploadDialog = false;
    },
    addedLeagueResult() {
      if (this.subMenuIndex === 2) {
        this.subMenuIndex = 1;
        this.subMenuIndex = 2;
      }
    },
    getTeams() {
      axios
        .get("https://api.lolien.kr/v1/leagues/team")
        .then(response => {
          this.teams = response.data.teams;
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    getSchedules() {
      var _this = this;

      axios
        .get("https://api.lolien.kr/v1/leagues/schedule")
        .then(response => {
          this.schedules = response.data.schedules;
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
    showResult(scheduleIndex) {
      this.$emit("showResult", scheduleIndex);
      event.preventDefault();
    },
    getScheduleText(item) {
      if (item.idx == null) {
        return;
      }

      let dateTime = item.matchDateTime;
      let teamName = item.team.koreanName;
      let enemyTeamName = item.enemyTeam.koreanName;
      let text =
        moment(dateTime).format("YYYY-MM-DD a hh:mm:ss") +
        " - " +
        teamName +
        " vs " +
        enemyTeamName;

      return text;
    },
    ...mapMutations({
      setLoading: "setLoading"
    })
  }
};
</script>

<style scoped>
.image-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
