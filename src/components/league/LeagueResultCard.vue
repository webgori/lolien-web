<template>
  <v-container fluid grid-list-sm class="pa-0 pb-10">
    <v-row justify="space-between">
      <v-col cols="12" lg="4">
        <div
          class="font-weight-bold"
          :class="{
            'body-2': $vuetify.breakpoint.xs,
            subheading: $vuetify.breakpoint.lgAndUp
          }"
        >
          {{ leagueResult.gameCreation | moment("YYYY-MM-DD a hh:mm:ss") }}
          /
          {{ { seconds: leagueResult.gameDuration } | duration("humanize") }}
          동안 진행
        </div>
      </v-col>

      <v-col cols="12" lg="1" class="text-lg-right">
        <v-btn
          v-if="leagueResult.replayDownloadable === true"
          icon
          color="blue"
          :href="'https://lolien.kr/replay/KR-' + leagueResult.gameId + '.rofl'"
        >
          <v-icon>fas fa-file-download</v-icon>
        </v-btn>

        <v-btn
          v-if="leagueResult.deleteAble"
          icon
          color="pink"
          @click="deleteResult(leagueResult.gameId)"
        >
          <v-icon>fas fa-trash-alt</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12" lg="6">
        <v-card color="blue">
          <v-card-title class="subheading font-weight-bold white--text pa-2"
            >Blue팀
            <i
              v-if="leagueResult.blueTeamSummoners[0].win"
              class="fas fa-trophy"
              style="margin-left:1vh; color:#fbc02d"
            ></i
          ></v-card-title>

          <v-divider></v-divider>

          <v-list class="pa-0">
            <v-container class="pt-1 pl-1 pb-0" fluid grid-list-sm>
              <v-row
                v-for="(number, idx) in 5"
                :key="idx"
                dense
                align-center
                justify-center
                :class="{
                  summonerHighlight:
                    summonerName ==
                    leagueResult.blueTeamSummoners[idx].summonerName
                }"
              >
                <v-col v-if="$vuetify.breakpoint.lgAndUp" lg="1">
                  <v-list-item-avatar size="45">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-img
                          v-bind="attrs"
                          :src="leagueResult.blueTeamSummoners[idx].championUrl"
                          v-on="on"
                        ></v-img>
                      </template>
                      <span>{{
                        leagueResult.blueTeamSummoners[idx].championName
                      }}</span>
                    </v-tooltip>
                  </v-list-item-avatar>
                </v-col>

                <v-col v-else cols="1">
                  <v-list-item-avatar size="20">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-img
                          v-bind="attrs"
                          :src="leagueResult.blueTeamSummoners[idx].championUrl"
                          v-on="on"
                        ></v-img>
                      </template>
                      <span>{{
                        leagueResult.blueTeamSummoners[idx].championName
                      }}</span>
                    </v-tooltip>
                  </v-list-item-avatar>
                </v-col>

                <v-col cols="1" lg="1">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        class="spell1"
                        v-bind="attrs"
                        :src="leagueResult.blueTeamSummoners[idx].spell1Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.blueTeamSummoners[idx].spell1Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.blueTeamSummoners[idx].spell1Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.blueTeamSummoners[idx].spell2Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.blueTeamSummoners[idx].spell2Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.blueTeamSummoners[idx].spell2Description
                      "
                    ></span>
                  </v-tooltip>
                </v-col>

                <v-col v-if="$vuetify.breakpoint.lgAndUp" lg="1">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        class="spell1"
                        v-bind="attrs"
                        :src="
                          leagueResult.blueTeamSummoners[idx].primaryRuneUrl
                        "
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.blueTeamSummoners[idx].primaryRuneName
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.blueTeamSummoners[idx]
                          .primaryRuneDescription
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.blueTeamSummoners[idx].subRuneUrl"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.blueTeamSummoners[idx].subRuneName
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.blueTeamSummoners[idx].subRuneDescription
                      "
                    ></span>
                  </v-tooltip>
                </v-col>
                <v-col v-else cols="1">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        class="spell1"
                        v-bind="attrs"
                        :src="
                          leagueResult.blueTeamSummoners[idx].primaryRuneUrl
                        "
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.blueTeamSummoners[idx].primaryRuneName
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.blueTeamSummoners[idx]
                          .primaryRuneDescription
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.blueTeamSummoners[idx].subRuneUrl"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.blueTeamSummoners[idx].subRuneName
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.blueTeamSummoners[idx].subRuneDescription
                      "
                    ></span>
                  </v-tooltip>
                </v-col>

                <v-col cols="5" lg="5" class="text-center">
                  <v-btn
                    v-if="$vuetify.breakpoint.xs"
                    text
                    x-small
                    @click="
                      getCustomGamesBySummonerName(
                        leagueResult.blueTeamSummoners[idx].summonerName
                      )
                    "
                  >
                    {{
                      leagueResult.blueTeamSummoners[idx].summonerName
                    }}</v-btn
                  >

                  <v-btn
                    v-if="$vuetify.breakpoint.lgAndUp"
                    text
                    small
                    @click="
                      getCustomGamesBySummonerName(
                        leagueResult.blueTeamSummoners[idx].summonerName
                      )
                    "
                  >
                    {{
                      leagueResult.blueTeamSummoners[idx].summonerName
                    }}</v-btn
                  >

                  <div class="text-center">
                    {{ leagueResult.blueTeamSummoners[idx].kills }} /
                    {{ leagueResult.blueTeamSummoners[idx].deaths }} /
                    {{ leagueResult.blueTeamSummoners[idx].assists }}
                  </div>
                </v-col>

                <v-col cols="4" lg="4">
                  <v-row align="center" justify="center">
                    <v-col cols="12">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            v-if="
                              leagueResult.blueTeamSummoners[idx].item0Name !=
                                ''
                            "
                            :class="{
                              'item-xs': $vuetify.breakpoint.xs,
                              'item-lg-xl': $vuetify.breakpoint.lgAndUp
                            }"
                            v-bind="attrs"
                            :src="leagueResult.blueTeamSummoners[idx].item0Url"
                            v-on="on"
                          />
                        </template>
                        <span class="yellow--text">{{
                          leagueResult.blueTeamSummoners[idx].item0Name
                        }}</span
                        ><br /><span
                          v-html="
                            leagueResult.blueTeamSummoners[idx].item0Description
                          "
                        ></span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            v-if="
                              leagueResult.blueTeamSummoners[idx].item1Name !=
                                ''
                            "
                            :class="{
                              'item-xs': $vuetify.breakpoint.xs,
                              'item-lg-xl': $vuetify.breakpoint.lgAndUp
                            }"
                            v-bind="attrs"
                            :src="leagueResult.blueTeamSummoners[idx].item1Url"
                            v-on="on"
                          />
                        </template>
                        <span class="yellow--text">{{
                          leagueResult.blueTeamSummoners[idx].item1Name
                        }}</span
                        ><br /><span
                          v-html="
                            leagueResult.blueTeamSummoners[idx].item1Description
                          "
                        ></span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            v-if="
                              leagueResult.blueTeamSummoners[idx].item2Name !=
                                ''
                            "
                            :class="{
                              'item-xs': $vuetify.breakpoint.xs,
                              'item-lg-xl': $vuetify.breakpoint.lgAndUp
                            }"
                            v-bind="attrs"
                            :src="leagueResult.blueTeamSummoners[idx].item2Url"
                            v-on="on"
                          />
                        </template>
                        <span class="yellow--text">{{
                          leagueResult.blueTeamSummoners[idx].item2Name
                        }}</span
                        ><br /><span
                          v-html="
                            leagueResult.blueTeamSummoners[idx].item2Description
                          "
                        ></span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            v-if="
                              leagueResult.blueTeamSummoners[idx].item3Name !=
                                ''
                            "
                            :class="{
                              'item-xs': $vuetify.breakpoint.xs,
                              'item-lg-xl': $vuetify.breakpoint.lgAndUp
                            }"
                            v-bind="attrs"
                            :src="leagueResult.blueTeamSummoners[idx].item3Url"
                            v-on="on"
                          />
                        </template>
                        <span class="yellow--text">{{
                          leagueResult.blueTeamSummoners[idx].item3Name
                        }}</span
                        ><br /><span
                          v-html="
                            leagueResult.blueTeamSummoners[idx].item3Description
                          "
                        ></span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            v-if="
                              leagueResult.blueTeamSummoners[idx].item4Name !=
                                ''
                            "
                            :class="{
                              'item-xs': $vuetify.breakpoint.xs,
                              'item-lg-xl': $vuetify.breakpoint.lgAndUp
                            }"
                            v-bind="attrs"
                            :src="leagueResult.blueTeamSummoners[idx].item4Url"
                            v-on="on"
                          />
                        </template>
                        <span class="yellow--text">{{
                          leagueResult.blueTeamSummoners[idx].item4Name
                        }}</span
                        ><br /><span
                          v-html="
                            leagueResult.blueTeamSummoners[idx].item4Description
                          "
                        ></span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            v-if="
                              leagueResult.blueTeamSummoners[idx].item5Name !=
                                ''
                            "
                            :class="{
                              'item-xs': $vuetify.breakpoint.xs,
                              'item-lg-xl': $vuetify.breakpoint.lgAndUp
                            }"
                            v-bind="attrs"
                            :src="leagueResult.blueTeamSummoners[idx].item5Url"
                            v-on="on"
                          />
                        </template>
                        <span class="yellow--text">{{
                          leagueResult.blueTeamSummoners[idx].item5Name
                        }}</span
                        ><br /><span
                          v-html="
                            leagueResult.blueTeamSummoners[idx].item5Description
                          "
                        ></span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            v-if="
                              leagueResult.blueTeamSummoners[idx].item6Name !=
                                ''
                            "
                            :class="{
                              'item-xs': $vuetify.breakpoint.xs,
                              'item-lg-xl': $vuetify.breakpoint.lgAndUp
                            }"
                            v-bind="attrs"
                            :src="leagueResult.blueTeamSummoners[idx].item6Url"
                            v-on="on"
                          />
                        </template>
                        <span class="yellow--text">{{
                          leagueResult.blueTeamSummoners[idx].item6Name
                        }}</span
                        ><br /><span
                          v-html="
                            leagueResult.blueTeamSummoners[idx].item6Description
                          "
                        ></span>
                      </v-tooltip>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" lg="6">
        <v-card color="red">
          <v-card-title class="subheading font-weight-bold white--text pa-2"
            >Red팀
            <i
              v-if="leagueResult.redTeamSummoners[0].win"
              class="fas fa-trophy"
              style="margin-left:1vh; color:#fbc02d"
            ></i
          ></v-card-title>

          <v-divider></v-divider>

          <v-list class="pa-0">
            <v-container class="pt-1 pl-1 pb-0" fluid grid-list-sm>
              <v-row
                v-for="(number, idx) in 5"
                :key="idx"
                dense
                align-center
                justify-center
                :class="{
                  summonerHighlight:
                    summonerName ==
                    leagueResult.redTeamSummoners[idx].summonerName
                }"
              >
                <v-col v-if="$vuetify.breakpoint.lgAndUp" lg="1">
                  <v-list-item-avatar size="45">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-img
                          v-bind="attrs"
                          :src="leagueResult.redTeamSummoners[idx].championUrl"
                          v-on="on"
                        ></v-img>
                      </template>
                      <span>{{
                        leagueResult.redTeamSummoners[idx].championName
                      }}</span>
                    </v-tooltip>
                  </v-list-item-avatar>
                </v-col>

                <v-col v-else cols="1">
                  <v-list-item-avatar size="20">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-img
                          v-bind="attrs"
                          :src="leagueResult.redTeamSummoners[idx].championUrl"
                          v-on="on"
                        ></v-img>
                      </template>
                      <span>{{
                        leagueResult.redTeamSummoners[idx].championName
                      }}</span>
                    </v-tooltip>
                  </v-list-item-avatar>
                </v-col>

                <v-col cols="1" lg="1">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        class="spell1"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].spell1Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].spell1Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].spell1Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].spell2Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].spell2Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].spell2Description
                      "
                    ></span> </v-tooltip
                ></v-col>

                <v-col v-if="$vuetify.breakpoint.lgAndUp" lg="1">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        class="spell1"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].primaryRuneUrl"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].primaryRuneName
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx]
                          .primaryRuneDescription
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        :class="{
                          'spell-xs': $vuetify.breakpoint.xs,
                          'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].subRuneUrl"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].subRuneName
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].subRuneDescription
                      "
                    ></span> </v-tooltip
                ></v-col>
                <!-- <v-col xs1 lg1> </v-col> -->

                <v-col cols="5" lg="5" class="text-center">
                  <v-btn
                    v-if="$vuetify.breakpoint.xs"
                    text
                    x-small
                    @click="
                      getCustomGamesBySummonerName(
                        leagueResult.redTeamSummoners[idx].summonerName
                      )
                    "
                  >
                    {{ leagueResult.redTeamSummoners[idx].summonerName }}</v-btn
                  >

                  <v-btn
                    v-if="$vuetify.breakpoint.lgAndUp"
                    text
                    small
                    @click="
                      getCustomGamesBySummonerName(
                        leagueResult.redTeamSummoners[idx].summonerName
                      )
                    "
                  >
                    {{ leagueResult.redTeamSummoners[idx].summonerName }}</v-btn
                  >

                  <div class="text-center">
                    {{ leagueResult.redTeamSummoners[idx].kills }} /
                    {{ leagueResult.redTeamSummoners[idx].deaths }} /
                    {{ leagueResult.redTeamSummoners[idx].assists }}
                  </div>
                </v-col>

                <v-col cols="4" lg="4">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        v-if="
                          leagueResult.redTeamSummoners[idx].item0Name != ''
                        "
                        :class="{
                          'item-xs': $vuetify.breakpoint.xs,
                          'item-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].item0Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].item0Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].item0Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        v-if="
                          leagueResult.redTeamSummoners[idx].item1Name != ''
                        "
                        :class="{
                          'item-xs': $vuetify.breakpoint.xs,
                          'item-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].item1Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].item1Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].item1Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        v-if="
                          leagueResult.redTeamSummoners[idx].item2Name != ''
                        "
                        :class="{
                          'item-xs': $vuetify.breakpoint.xs,
                          'item-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].item2Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].item2Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].item2Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        v-if="
                          leagueResult.redTeamSummoners[idx].item3Name != ''
                        "
                        :class="{
                          'item-xs': $vuetify.breakpoint.xs,
                          'item-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].item3Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].item3Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].item3Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        v-if="
                          leagueResult.redTeamSummoners[idx].item4Name != ''
                        "
                        :class="{
                          'item-xs': $vuetify.breakpoint.xs,
                          'item-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].item4Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].item4Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].item4Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        v-if="
                          leagueResult.redTeamSummoners[idx].item5Name != ''
                        "
                        :class="{
                          'item-xs': $vuetify.breakpoint.xs,
                          'item-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].item5Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].item5Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].item5Description
                      "
                    ></span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <img
                        v-if="
                          leagueResult.redTeamSummoners[idx].item6Name != ''
                        "
                        :class="{
                          'item-xs': $vuetify.breakpoint.xs,
                          'item-lg-xl': $vuetify.breakpoint.lgAndUp
                        }"
                        v-bind="attrs"
                        :src="leagueResult.redTeamSummoners[idx].item6Url"
                        v-on="on"
                      />
                    </template>
                    <span class="yellow--text">{{
                      leagueResult.redTeamSummoners[idx].item6Name
                    }}</span
                    ><br /><span
                      v-html="
                        leagueResult.redTeamSummoners[idx].item6Description
                      "
                    ></span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-container>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-card>
    <v-container fluid grid-list-sm pb-0>
      <v-row wrap>
        <v-col cols="12" lg="12">
          <div
            class="font-weight-bold"
            :class="{
              subheading: $vuetify.breakpoint.lg,
              subheading: $vuetify.breakpoint.xl
            }"
          >
            {{ leagueResult.gameCreation | moment("YYYY-MM-DD a hh:mm:ss") }}
            /
            {{ { seconds: leagueResult.gameDuration } | duration("humanize") }}
            동안 진행
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid grid-list-sm>
      
    </v-container>
  </v-card> -->
</template>

<script>
export default {
  name: "Member",
  components: {},
  props: {
    leagueResult: { type: Object },
    summonerName: { type: String },
    dialog: { type: Boolean }
  },
  data: () => {
    return {
      latestClientVersion: null
    };
  },
  created() {},
  methods: {
    getCustomGamesBySummonerName(summonerName) {
      this.$emit("searchBySummonerName", summonerName);
    },
    deleteResult(gameId) {
      this.$emit("setDeleteResultDialog", true, gameId);
    },
    goToIntro() {
      this.$emit("goToIntro");
    }
  }
};
</script>

<style scoped>
.item-xs {
  width: 18px;
  height: 18px;
  margin-right: 3px;
}

.item-lg-xl {
  width: 30px;
  height: 30px;
  margin-right: 3px;
}

.spell-xs {
  width: 18px;
  height: 18px;
}

.spell-lg-xl {
  width: 30px;
  height: 30px;
}

.spell1 {
  margin-right: 1vh;
}

.champ {
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}

.summonerHighlight {
  background-color: #fbc02d;
  opacity: 1;
  font-weight: bold;
}
</style>
