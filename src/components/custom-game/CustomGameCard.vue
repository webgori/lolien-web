<template>
  <v-card>
    <!-- <v-container fluid grid-list-sm>
        <v-layout wrap>
          <v-flex xs6 lg2> 첫번째</v-flex>
          <v-flex xs6 lg2> 두번째</v-flex>
          <v-flex xs6 lg2> 세번째</v-flex>
          <v-flex xs6lg2> 네번째</v-flex>
          <v-flex xs6 lg2> 다섯번째</v-flex>
          <v-flex xs6 lg2> 여섯번째</v-flex>
          <v-flex v-if="$vuetify.breakpoint.xs" xs6> 일곱번째</v-flex>
          <v-flex v-if="$vuetify.breakpoint.xs" xs6> 여덟번째</v-flex>
        </v-layout>
      </v-container> -->

    <v-container fluid grid-list-sm pb-0>
      <v-layout wrap>
        <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg2> </v-flex>
        <!-- <v-flex v-if="$vuetify.breakpoint.lg" lg2> 일곱번째</v-flex> -->
        <v-flex xs12 lg10>
          <div
            class="font-weight-bold"
            :class="{
              subheading: $vuetify.breakpoint.lg,
              subheading: $vuetify.breakpoint.xl
            }"
          >
            {{ customGame.gameCreation | moment("YYYY-MM-DD a hh:mm:ss") }}
            /
            {{ { seconds: customGame.gameDuration } | duration("humanize") }}
            동안 진행
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-sm>
      <v-layout wrap>
        <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg2> </v-flex>
        <!-- <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg2> 여덟번째</v-flex> -->
        <v-flex xs12 lg5>
          <v-card shaped color="blue">
            <v-card-title class="subheading font-weight-bold white--text"
              >Blue팀
              <i
                v-if="customGame.blueTeamSummoners[0].win"
                class="fas fa-trophy"
                style="margin-left:1vh; color:#fbc02d"
              ></i
            ></v-card-title>

            <v-divider></v-divider>

            <v-list>
              <v-container fluid grid-list-sm>
                <v-layout
                  row
                  v-for="(number, idx) in 5"
                  :key="idx"
                  align-center
                  justify-center
                  :class="{
                    summonerHighlight:
                      summonerName ==
                      customGame.blueTeamSummoners[idx].summonerName
                  }"
                >
                  <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg1>
                    <v-list-item-avatar size="35">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-img
                            v-bind="attrs"
                            v-on="on"
                            :src="customGame.blueTeamSummoners[idx].championUrl"
                          ></v-img>
                        </template>
                        <span>{{
                          customGame.blueTeamSummoners[idx].championName
                        }}</span>
                      </v-tooltip>
                    </v-list-item-avatar>
                  </v-flex>

                  <v-flex v-else xs1>
                    <v-list-item-avatar size="20">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-img
                            v-bind="attrs"
                            v-on="on"
                            :src="customGame.blueTeamSummoners[idx].championUrl"
                          ></v-img>
                        </template>
                        <span>{{
                          customGame.blueTeamSummoners[idx].championName
                        }}</span>
                      </v-tooltip>
                    </v-list-item-avatar>
                  </v-flex>

                  <v-flex xs1 lg1>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'spell-xs': $vuetify.breakpoint.xs,
                            'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          class="spell1"
                          v-bind="attrs"
                          v-on="on"
                          :src="customGame.blueTeamSummoners[idx].spell1Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].spell1Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].spell1Description
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
                          v-on="on"
                          :src="customGame.blueTeamSummoners[idx].spell2Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].spell2Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].spell2Description
                        "
                      ></span>
                    </v-tooltip>
                  </v-flex>

                  <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg1>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'spell-xs': $vuetify.breakpoint.xs,
                            'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          class="spell1"
                          v-bind="attrs"
                          v-on="on"
                          :src="
                            customGame.blueTeamSummoners[idx].primaryRuneUrl
                          "
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].primaryRuneName
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx]
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
                          v-on="on"
                          :src="customGame.blueTeamSummoners[idx].subRuneUrl"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].subRuneName
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].subRuneDescription
                        "
                      ></span>
                    </v-tooltip>
                  </v-flex>
                  <v-flex v-else xs1>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'spell-xs': $vuetify.breakpoint.xs,
                            'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          class="spell1"
                          v-bind="attrs"
                          v-on="on"
                          :src="
                            customGame.blueTeamSummoners[idx].primaryRuneUrl
                          "
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].primaryRuneName
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx]
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
                          v-on="on"
                          :src="customGame.blueTeamSummoners[idx].subRuneUrl"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].subRuneName
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].subRuneDescription
                        "
                      ></span>
                    </v-tooltip>
                  </v-flex>

                  <v-flex xs5 lg5 class="text-center">
                    <v-btn
                      v-if="$vuetify.breakpoint.xs"
                      text
                      x-small
                      @click="
                        getCustomGamesBySummonerName(
                          customGame.blueTeamSummoners[idx].summonerName
                        )
                      "
                    >
                      {{
                        customGame.blueTeamSummoners[idx].summonerName
                      }}</v-btn
                    >

                    <v-btn
                      v-if="$vuetify.breakpoint.lgAndUp"
                      text
                      small
                      @click="
                        getCustomGamesBySummonerName(
                          customGame.blueTeamSummoners[idx].summonerName
                        )
                      "
                    >
                      {{
                        customGame.blueTeamSummoners[idx].summonerName
                      }}</v-btn
                    >

                    <div class="text-center">
                      {{ customGame.blueTeamSummoners[idx].kills }} /
                      {{ customGame.blueTeamSummoners[idx].deaths }} /
                      {{ customGame.blueTeamSummoners[idx].assists }}
                    </div>
                  </v-flex>

                  <v-flex xs4 lg4>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.blueTeamSummoners[idx].item0Name != ''
                          "
                          :src="customGame.blueTeamSummoners[idx].item0Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].item0Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].item0Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.blueTeamSummoners[idx].item1Name != ''
                          "
                          :src="customGame.blueTeamSummoners[idx].item1Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].item1Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].item1Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.blueTeamSummoners[idx].item2Name != ''
                          "
                          :src="customGame.blueTeamSummoners[idx].item2Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].item2Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].item2Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.blueTeamSummoners[idx].item3Name != ''
                          "
                          :src="customGame.blueTeamSummoners[idx].item3Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].item3Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].item3Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.blueTeamSummoners[idx].item4Name != ''
                          "
                          :src="customGame.blueTeamSummoners[idx].item4Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].item4Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].item4Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.blueTeamSummoners[idx].item5Name != ''
                          "
                          :src="customGame.blueTeamSummoners[idx].item5Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].item5Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].item5Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.blueTeamSummoners[idx].item6Name != ''
                          "
                          :src="customGame.blueTeamSummoners[idx].item6Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.blueTeamSummoners[idx].item6Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].item6Description
                        "
                      ></span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs12 lg5>
          <v-card shaped color="red">
            <v-card-title class="subheading font-weight-bold white--text"
              >Red팀
              <i
                v-if="customGame.redTeamSummoners[0].win"
                class="fas fa-trophy"
                style="margin-left:1vh; color:#fbc02d"
              ></i
            ></v-card-title>

            <v-divider></v-divider>

            <v-list>
              <v-container fluid grid-list-sm>
                <v-layout
                  row
                  v-for="(number, idx) in 5"
                  :key="idx"
                  align-center
                  justify-center
                  :class="{
                    summonerHighlight:
                      summonerName ==
                      customGame.redTeamSummoners[idx].summonerName
                  }"
                >
                  <v-flex xs2 lg1>
                    <v-list-item-avatar size="35">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-img
                            v-bind="attrs"
                            v-on="on"
                            :src="customGame.redTeamSummoners[idx].championUrl"
                          ></v-img>
                        </template>
                        <span>{{
                          customGame.redTeamSummoners[idx].championName
                        }}</span>
                      </v-tooltip>
                    </v-list-item-avatar>
                  </v-flex>

                  <v-flex xs1 lg1>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'spell-xs': $vuetify.breakpoint.xs,
                            'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          class="spell1"
                          v-bind="attrs"
                          v-on="on"
                          :src="customGame.redTeamSummoners[idx].spell1Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].spell1Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].spell1Description
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
                          v-on="on"
                          :src="customGame.redTeamSummoners[idx].spell2Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].spell2Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].spell2Description
                        "
                      ></span> </v-tooltip
                  ></v-flex>

                  <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg1>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'spell-xs': $vuetify.breakpoint.xs,
                            'spell-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          class="spell1"
                          v-bind="attrs"
                          v-on="on"
                          :src="customGame.redTeamSummoners[idx].primaryRuneUrl"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].primaryRuneName
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx]
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
                          v-on="on"
                          :src="customGame.redTeamSummoners[idx].subRuneUrl"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].subRuneName
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].subRuneDescription
                        "
                      ></span> </v-tooltip
                  ></v-flex>
                  <!-- <v-flex xs1 lg1> </v-flex> -->

                  <v-flex xs5 lg5 class="text-center">
                    <v-btn
                      v-if="$vuetify.breakpoint.xs"
                      text
                      x-small
                      @click="
                        getCustomGamesBySummonerName(
                          customGame.redTeamSummoners[idx].summonerName
                        )
                      "
                    >
                      {{ customGame.redTeamSummoners[idx].summonerName }}</v-btn
                    >

                    <v-btn
                      v-if="$vuetify.breakpoint.lgAndUp"
                      text
                      small
                      @click="
                        getCustomGamesBySummonerName(
                          customGame.redTeamSummoners[idx].summonerName
                        )
                      "
                    >
                      {{ customGame.redTeamSummoners[idx].summonerName }}</v-btn
                    >

                    <div class="text-center">
                      {{ customGame.redTeamSummoners[idx].kills }} /
                      {{ customGame.redTeamSummoners[idx].deaths }} /
                      {{ customGame.redTeamSummoners[idx].assists }}
                    </div>
                  </v-flex>

                  <v-flex xs4 lg4>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.redTeamSummoners[idx].item0Name != ''
                          "
                          :src="customGame.redTeamSummoners[idx].item0Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].item0Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item0Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.redTeamSummoners[idx].item1Name != ''
                          "
                          :src="customGame.redTeamSummoners[idx].item1Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].item1Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item1Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.redTeamSummoners[idx].item2Name != ''
                          "
                          :src="customGame.redTeamSummoners[idx].item2Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].item2Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item2Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.redTeamSummoners[idx].item3Name != ''
                          "
                          :src="customGame.redTeamSummoners[idx].item3Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].item3Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item3Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.redTeamSummoners[idx].item4Name != ''
                          "
                          :src="customGame.redTeamSummoners[idx].item4Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].item4Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item4Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.redTeamSummoners[idx].item5Name != ''
                          "
                          :src="customGame.redTeamSummoners[idx].item5Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].item5Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item5Description
                        "
                      ></span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          v-on="on"
                          v-if="
                            customGame.redTeamSummoners[idx].item6Name != ''
                          "
                          :src="customGame.redTeamSummoners[idx].item6Url"
                        />
                      </template>
                      <span class="yellow--text">{{
                        customGame.redTeamSummoners[idx].item6Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item6Description
                        "
                      ></span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Member",
  components: {},
  props: {
    source: {
      type: String,
      default: ""
    },
    customGame: { type: Object },
    summonerName: { type: String }
  },
  data: () => {
    return {
      latestClientVersion: null,
      customGames: []
    };
  },
  created() {},
  methods: {
    getCustomGamesBySummonerName(summonerName) {
      this.$emit("searchBySummonerName", summonerName);
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
  width: 25px;
  height: 25px;
  margin-right: 3px;
}

.spell-xs {
  width: 18px;
  height: 18px;
}

.spell-lg-xl {
  width: 25px;
  height: 25px;
}

.spell1 {
  margin-right: 1vh;
}

.champ {
  width: 3vh;
  height: 3vh;
  margin-right: 1vh;
}

.summonerHighlight {
  background-color: #fbc02d;
  opacity: 1;
  font-weight: bold;
}
</style>
