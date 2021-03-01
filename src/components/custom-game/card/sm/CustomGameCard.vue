<template>
  <v-card>
    <v-toolbar :color="teamColor" dark flat>
      <v-toolbar-title v-if="customGame.blueTeamSummoners[0].win"
        ><span class="text-button">Blue팀</span>
        <v-icon small color="#fbc02d" class="ml-1"
          >fas fa-trophy</v-icon
        ></v-toolbar-title
      >

      <v-toolbar-title v-if="customGame.redTeamSummoners[0].win"
        ><span class="text-button">Red팀</span>
        <v-icon small color="#fbc02d" class="ml-1"
          >fas fa-trophy</v-icon
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <b class="text-button"
        >{{ customGame.gameCreation | moment("YYYY-MM-DD a hh:mm") }} /

        {{ { seconds: customGame.gameDuration } | duration("humanize") }}
        게임</b
      >

      <template v-slot:extension>
        <v-tabs v-model="tab">
          <v-tabs-slider color="amber"></v-tabs-slider>

          <v-tab
            v-for="tabName in tabsName"
            :key="tabName"
            @click="changeTeamColor(tabName)"
          >
            {{ tabName }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="tabName in tabsName"
        :key="tabName"
        transition="false"
        reverse-transition="false"
      >
        <v-card flat>
          <v-card-text>
            <v-row
              v-for="(number, index) in 5"
              :key="index"
              dense
              no-gutters
              align="center"
              :class="{
                summonerHighlight:
                  summonerName ===
                  customGame.blueTeamSummoners[index].summonerName
              }"
            >
              <CustomGameCardChampion
                :summoner="getTeamSummoner(tabName, customGame, index)"
              />
              <CustomGameCardChampionLevel
                :summoner="getTeamSummoner(tabName, customGame, index)"
              />
              <CustomGameCardSpell
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="1"
              />
              <CustomGameCardSpell
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="2"
              />
              <CustomGameCardRune
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="1"
              />
              <CustomGameCardRune
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="2"
              />
              <CustomGameCardSummonerNameAndKillDeathAssists
                :summoner="getTeamSummoner(tabName, customGame, index)"
              />

              <CustomGameCardItem
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="1"
              />
              <CustomGameCardItem
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="2"
              />
              <CustomGameCardItem
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="3"
              />
              <CustomGameCardItem
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="4"
              />
              <CustomGameCardItem
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="5"
              />
              <CustomGameCardItem
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="6"
              />
              <CustomGameCardItem
                :summoner="getTeamSummoner(tabName, customGame, index)"
                :number="7"
              />
              <CustomGameCardTotalDamage
                class="ml-2"
                :custom-game="customGame"
                :summoner="getTeamSummoner(tabName, customGame, index)"
              />
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import CustomGameCardChampion from "@/components/custom-game/CustomGameCardChampion";
import CustomGameCardChampionLevel from "@/components/custom-game/CustomGameCardChampionLevel";
import CustomGameCardSpell from "@/components/custom-game/CustomGameCardSpell";
import CustomGameCardRune from "@/components/custom-game/CustomGameCardRune";
import CustomGameCardSummonerNameAndKillDeathAssists from "@/components/custom-game/CustomGameCardSummonerNameAndKillDeathAssists";
import CustomGameCardItem from "@/components/custom-game/CustomGameCardItem";
import CustomGameCardTotalDamage from "@/components/custom-game/CustomGameCardTotalDamage";

export default {
  components: {
    CustomGameCardChampion,
    CustomGameCardChampionLevel,
    CustomGameCardSpell,
    CustomGameCardRune,
    CustomGameCardSummonerNameAndKillDeathAssists,
    CustomGameCardItem,
    CustomGameCardTotalDamage
  },
  props: {
    customGame: { type: Object },
    summonerName: { type: String },
    dialog: { type: Boolean }
  },
  data: () => {
    return {
      tab: null,
      tabsName: ["Blue팀", "Red팀"],
      teamColor: "blue lighten-2"
    };
  },
  created() {},
  methods: {
    changeTeamColor(tabName) {
      if (tabName === "Blue팀") {
        this.teamColor = "blue lighten-2";
      } else if (tabName === "Red팀") {
        this.teamColor = "red lighten-2";
      }
    },
    getTeamSummoner(tabName, customGame, index) {
      return this.getTeamSummoners(tabName, customGame)[index];
    },
    getTeamSummoners(tabName, customGame) {
      if (tabName === "Blue팀") {
        return customGame.blueTeamSummoners;
      } else if (tabName === "Red팀") {
        return customGame.redTeamSummoners;
      }
    }
  }
};
</script>
