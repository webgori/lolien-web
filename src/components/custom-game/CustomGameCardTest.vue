<template>
  <v-card>
    <!-- <v-card-text> -->
    <!-- <v-data-iterator
      :items="customGames"
      disable-filtering
      disable-pagination
      disable-sort
      hide-default-footer
    > -->
    <!-- <v-row> -->
    <!-- <v-col> -->

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

    <v-container fluid grid-list-sm>
      <v-layout wrap>
        <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg2> </v-flex>
        <!-- <v-flex v-if="$vuetify.breakpoint.lg" lg2> 일곱번째</v-flex> -->
        <v-flex xs12 lg10>
          <div
            :class="{
              headline: $vuetify.breakpoint.lg,
              headline: $vuetify.breakpoint.xl
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
            <v-card-title class="subheading font-weight-bold"
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
                  v-for="(number, idx) in 5"
                  :key="idx"
                  row
                  align-center
                  justify-center
                >
                  <v-flex xs2 lg1>
                    <v-list-item-avatar size="35">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-img
                            v-bind="attrs"
                            :src="customGame.blueTeamSummoners[idx].championUrl"
                            v-on="on"
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
                          :src="customGame.blueTeamSummoners[idx].spell1Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          :src="customGame.blueTeamSummoners[idx].spell2Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
                        customGame.blueTeamSummoners[idx].spell2Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.blueTeamSummoners[idx].spell2Description
                        "
                      ></span>
                    </v-tooltip>
                  </v-flex>

                  <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg1> </v-flex>
                  <!-- <v-flex xs1 lg1> </v-flex> -->

                  <v-flex xs5 lg5 class="text-center">
                    <v-btn
                      v-if="$vuetify.breakpoint.xs"
                      text
                      x-small
                      :class="{
                        'primary--text':
                          summonerName ==
                          customGame.blueTeamSummoners[idx].summonerName,
                        summonerHighlight:
                          summonerName ==
                          customGame.blueTeamSummoners[idx].summonerName
                      }"
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
                      :class="{
                        'primary--text':
                          summonerName ==
                          customGame.blueTeamSummoners[idx].summonerName,
                        summonerHighlight:
                          summonerName ==
                          customGame.blueTeamSummoners[idx].summonerName
                      }"
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

                  <!-- <v-flex xs2 lg2>
                      {{ customGame.blueTeamSummoners[idx].kills }} /
                      {{ customGame.blueTeamSummoners[idx].deaths }} /
                      {{ customGame.blueTeamSummoners[idx].assists }}
                    </v-flex> -->

                  <v-flex xs4 lg4>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          v-if="customGame.blueTeamSummoners[idx].item0 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.blueTeamSummoners[idx].item0Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.blueTeamSummoners[idx].item1 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.blueTeamSummoners[idx].item1Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.blueTeamSummoners[idx].item2 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.blueTeamSummoners[idx].item2Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.blueTeamSummoners[idx].item3 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.blueTeamSummoners[idx].item3Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.blueTeamSummoners[idx].item4 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.blueTeamSummoners[idx].item4Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.blueTeamSummoners[idx].item5 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.blueTeamSummoners[idx].item5Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.blueTeamSummoners[idx].item6 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.blueTeamSummoners[idx].item6Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
            <v-card-title class="subheading font-weight-bold"
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
                  v-for="(number, idx) in 5"
                  :key="idx"
                  row
                  align-center
                  justify-center
                >
                  <v-flex xs2 lg1>
                    <v-list-item-avatar size="35">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-img
                            v-bind="attrs"
                            :src="customGame.redTeamSummoners[idx].championUrl"
                            v-on="on"
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
                          :src="customGame.redTeamSummoners[idx].spell1Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          :src="customGame.redTeamSummoners[idx].spell2Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
                        customGame.redTeamSummoners[idx].spell2Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].spell2Description
                        "
                      ></span> </v-tooltip
                  ></v-flex>

                  <v-flex v-if="$vuetify.breakpoint.lgAndUp" lg1> </v-flex>
                  <!-- <v-flex xs1 lg1> </v-flex> -->

                  <v-flex xs5 lg5 class="text-center">
                    <v-btn
                      v-if="$vuetify.breakpoint.xs"
                      text
                      x-small
                      :class="{
                        'primary--text':
                          summonerName ==
                          customGame.redTeamSummoners[idx].summonerName,
                        summonerHighlight:
                          summonerName ==
                          customGame.redTeamSummoners[idx].summonerName
                      }"
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
                      :class="{
                        'primary--text':
                          summonerName ==
                          customGame.redTeamSummoners[idx].summonerName,
                        summonerHighlight:
                          summonerName ==
                          customGame.redTeamSummoners[idx].summonerName
                      }"
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

                  <!-- <v-flex xs2 lg2>
                      {{ customGame.redTeamSummoners[idx].kills }} /
                      {{ customGame.redTeamSummoners[idx].deaths }} /
                      {{ customGame.redTeamSummoners[idx].assists }}
                    </v-flex> -->

                  <v-flex xs4 lg4>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          v-if="customGame.redTeamSummoners[idx].item0 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.redTeamSummoners[idx].item0Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.redTeamSummoners[idx].item1 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.redTeamSummoners[idx].item1Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.redTeamSummoners[idx].item2 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.redTeamSummoners[idx].item2Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.redTeamSummoners[idx].item3 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.redTeamSummoners[idx].item3Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.redTeamSummoners[idx].item4 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.redTeamSummoners[idx].item4Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.redTeamSummoners[idx].item5 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.redTeamSummoners[idx].item5Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          v-if="customGame.redTeamSummoners[idx].item6 > 0"
                          :class="{
                            'item-xs': $vuetify.breakpoint.xs,
                            'item-lg-xl': $vuetify.breakpoint.lgAndUp
                          }"
                          v-bind="attrs"
                          :src="customGame.redTeamSummoners[idx].item6Url"
                          v-on="on"
                        />
                      </template>
                      <span class="primary--text">{{
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
    <!-- </v-col> -->

    <!-- <v-col>
          <v-card shaped color="red" class="mx-auto">
            <v-card-title class="subheading font-weight-bold"
              >Red팀<i
                v-if="customGame.redTeamSummoners[0].win"
                class="fas fa-trophy"
                style="margin-left:1vh; color:#fbc02d"
              ></i
            ></v-card-title>

            <v-divider></v-divider>

            <v-list>
              <v-list-item v-for="(number, idx) in 5" :key="idx">
                <v-row no-gutters>
                  <v-col cols="12" sm="4">
                    <v-list-item-avatar>
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

                    <v-btn
                      text
                      small
                      :class="{
                        'primary--text':
                          summonerName ==
                          customGame.redTeamSummoners[idx].summonerName,
                        summonerHighlight:
                          summonerName ==
                          customGame.redTeamSummoners[idx].summonerName
                      }"
                      @click="
                        getCustomGamesBySummonerName(
                          customGame.redTeamSummoners[idx].summonerName
                        )
                      "
                    >
                      {{ customGame.redTeamSummoners[idx].summonerName }}</v-btn
                    >
                  </v-col>

                  <v-col cols="12" sm="2">
                    <v-list-item-content
                      >{{ customGame.redTeamSummoners[idx].kills }} /
                      {{ customGame.redTeamSummoners[idx].deaths }} /
                      {{
                        customGame.redTeamSummoners[idx].assists
                      }}</v-list-item-content
                    >
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          class="item"
                          v-bind="attrs"
                          v-on="on"
                          v-if="customGame.redTeamSummoners[idx].item0 > 0"
                          :src="customGame.redTeamSummoners[idx].item0Url"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          class="item"
                          v-bind="attrs"
                          v-on="on"
                          v-if="customGame.redTeamSummoners[idx].item1 > 0"
                          :src="customGame.redTeamSummoners[idx].item1Url"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          class="item"
                          v-bind="attrs"
                          v-on="on"
                          v-if="customGame.redTeamSummoners[idx].item2 > 0"
                          :src="customGame.redTeamSummoners[idx].item2Url"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          class="item"
                          v-bind="attrs"
                          v-on="on"
                          v-if="customGame.redTeamSummoners[idx].item3 > 0"
                          :src="customGame.redTeamSummoners[idx].item3Url"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          class="item"
                          v-bind="attrs"
                          v-on="on"
                          v-if="customGame.redTeamSummoners[idx].item4 > 0"
                          :src="customGame.redTeamSummoners[idx].item4Url"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          class="item"
                          v-bind="attrs"
                          v-on="on"
                          v-if="customGame.redTeamSummoners[idx].item5 > 0"
                          :src="customGame.redTeamSummoners[idx].item5Url"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          class="item"
                          v-bind="attrs"
                          v-on="on"
                          v-if="customGame.redTeamSummoners[idx].item6 > 0"
                          :src="customGame.redTeamSummoners[idx].item6Url"
                        />
                      </template>
                      <span class="primary--text">{{
                        customGame.redTeamSummoners[idx].item6Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].item6Description
                        "
                      ></span>
                    </v-tooltip>
                  </v-col>

                  <v-col cols="12" sm="2" class="text-right">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <img
                          class="spell spell1"
                          v-bind="attrs"
                          v-on="on"
                          :src="customGame.redTeamSummoners[idx].spell1Url"
                        />
                      </template>
                      <span class="primary--text">{{
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
                          class="spell"
                          v-bind="attrs"
                          v-on="on"
                          :src="customGame.redTeamSummoners[idx].spell2Url"
                        />
                      </template>
                      <span class="primary--text">{{
                        customGame.redTeamSummoners[idx].spell2Name
                      }}</span
                      ><br /><span
                        v-html="
                          customGame.redTeamSummoners[idx].spell2Description
                        "
                      ></span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col> -->
    <!-- </v-row> -->
    <!-- </v-data-iterator> -->
    <!-- </v-card-text> -->
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
      console.log(summonerName);
      // this.$emit("searchBySummonerName", summonerName);
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
  font-weight: bold;
}
</style>
