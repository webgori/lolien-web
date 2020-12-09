<template>
  <v-app>
    <v-container class="content" bg fill-height grid-list-lg text-lg-left>
      <v-progress-linear
        :active="loading"
        color="primary"
        :indeterminate="true"
        class="ma-0"
        height="2"
        style="top: -2px;"
      />

      <v-layout row wrap align-content-start>
        <v-flex v-for="customGame in customGames" :key="customGame.idx" lg12>
          <CustomGameCardTest
            :custom-game="customGame"
            :summoner-name="summonerName"
          />
        </v-flex>
        <v-flex lg12>
          <CustomGamePagination
            :total-pages="totalPages"
            @updatePage="updatePage"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import CustomGameCardTest from "@/components/custom-game/CustomGameCardTest";
import CustomGamePagination from "@/components/custom-game/CustomGamePagination";

export default {
  name: "Member",
  components: { CustomGameCardTest, CustomGamePagination },
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  data: () => {
    return {
      page: 1,
      totalPages: null,
      size: 3,
      loading: false,
      clientVersions: [],
      customGamesVersion: [],
      summonerData: {},
      championData: {},

      customGames: [
        {
          idx: 389,
          gameCreation: 1598537243450,
          gameDuration: 1719,
          gameId: 4604338341,
          gameMode: "CLASSIC",
          gameType: "CUSTOM_GAME",
          gameVersion: "10.16.330.9186",
          mapId: 11,
          platformId: "KR",
          queueId: 0,
          seasonId: 13,
          blueTeamSummoners: [
            {
              idx: 196,
              summonerName: "kkomikim",
              championId: 412,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Thresh.png",
              championName: "쓰레쉬",
              totalDamageDealtToChampions: 5464,
              spell1Id: 14,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerDot.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "점화",
              spell2Name: "점멸",
              spell1Description:
                "적 챔피언을 불태워 5초 동안 70~410의 고정 피해(챔피언 레벨에 따라 변동)를 입히고 모습을 드러내며 치료 효과를 감소시킵니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 1,
              deaths: 3,
              assists: 11,
              champLevel: 12,
              totalMinionsKilled: 27,
              item0: 3857,
              item1: 3193,
              item2: 2055,
              item3: 1031,
              item4: 3117,
              item5: 0,
              item6: 3364,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3857.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3193.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2055.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1031.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3117.png",
              item5Url: "",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png",
              item0Name: "화이트록의 갑옷",
              item1Name: "가고일 돌갑옷",
              item2Name: "제어 와드",
              item3Name: "쇠사슬 조끼",
              item4Name: "기동력의 장화",
              item5Name: "",
              item6Name: "예언자의 렌즈",
              item0Description:
                "<stats>체력 +300<br>공격력 +15<br>10초당 골드 +3<br>기본 체력 재생 +100% </stats><br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 4회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
              item1Description:
                "<stats>방어력 +40<br>마법 저항력 +40</stats><br><br><unique>고유 지속 효과 - 바위 피부:</unique> 근처에 적 챔피언이 3명 이상 있으면 방어력과 마법 저항력이 추가로 40 상승합니다.<br><active>고유 사용 효과 - 강철화:</active> 4초 동안 입히는 피해량이 60% 감소하지만 체력이 40% 상승하고 크기가 거대해집니다. (재사용 대기시간 90초) 바위 피부가 활성화된 상태일 경우 체력이 100% 증가합니다.",
              item2Description:
                "<groupLimit>제어 와드는 가방에 2개만 소지할 수 있습니다.</groupLimit><br><br><consumable>클릭하여 사용:</consumable> 주변 지역을 드러내 주는 와드를 설치합니다. 근처의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. 위장 중인 유닛의 모습도 드러냅니다. 하지만 제어 와드로 다른 제어 와드를 무력화시킬 수는 없습니다.<br><br>플레이어 당 맵에 설치할 수 있는 <font color='#BBFFFF'>제어 와드</font>의 개수는  1개로 제한됩니다.",
              item3Description: "<stats>방어력 +40</stats>",
              item4Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +25. 5초 동안 전투에서 벗어나 있으면 이동 속도가 +115 상승합니다.",
              item5Description: "",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용 대기시간 90~60초)",
              wardsPlaced: 34,
              teamId: 100,
              win: true
            },
            {
              idx: 31,
              summonerName: "추풍추풍",
              championId: 104,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Graves.png",
              championName: "그레이브즈",
              totalDamageDealtToChampions: 11265,
              spell1Id: 11,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerSmite.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "강타",
              spell2Name: "점멸",
              spell1Description:
                "대상 에픽 및 대형/중형 몬스터, 혹은 적 미니언에게 390~1,000(챔피언 레벨에 따라 변동)의 고정 피해를 입힙니다. 몬스터에게 사용하면 자신의 최대 체력에 비례해 체력을 회복합니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 7,
              deaths: 1,
              assists: 8,
              champLevel: 15,
              totalMinionsKilled: 35,
              item0: 1412,
              item1: 0,
              item2: 3142,
              item3: 3071,
              item4: 0,
              item5: 3006,
              item6: 3364,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1412.png",
              item1Url: "",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3142.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3071.png",
              item4Url: "",
              item5Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3006.png",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png",
              item0Name: "마법 부여: 용사",
              item1Name: "",
              item2Name: "요우무의 유령검",
              item3Name: "칠흑의 양날 도끼",
              item4Name: "",
              item5Name: "광전사의 군화",
              item6Name: "예언자의 렌즈",
              item0Description:
                "<stats>공격력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
              item1Description: "",
              item2Description:
                "<stats>공격력 +55<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> <a href='Lethality'>물리 관통력</a> +18<br><unique>고유 지속 효과:</unique> 전투에서 벗어나 있을 때 이동 속도 +40<br><active>고유 사용 효과:</active> 6초 동안 이동 속도가 +20% 증가하며 유닛을 통과할 수 있습니다. (재사용 대기시간 45초)",
              item3Description:
                "<stats>체력 +400<br>공격력 +40<br>재사용 대기시간 감소 +20%</stats><br><br><unique>고유 지속 효과:</unique> 적 챔피언에게 물리 피해를 입히면 대상을 베어, 6초 동안 방어력을 4% 감소시킵니다. (최대 6번, 24%까지 중첩)<br><unique>고유 지속 효과 - 격분:</unique> 물리 피해를 입히면 2초 동안 이동 속도가 20 상승합니다. 베어낸 적 챔피언의 처치를 돕거나 어떤 유닛이든 처치하면 대신 2초 동안 이동 속도가 60 상승합니다. 원거리 챔피언은 이 이동 속도의 절반만 상승합니다.",
              item4Description: "",
              item5Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats> 공격 속도 +35%</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용 대기시간 90~60초)",
              wardsPlaced: 9,
              teamId: 100,
              win: true
            },
            {
              idx: 37,
              summonerName: "워윅이아니고워웍",
              championId: 114,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Fiora.png",
              championName: "피오라",
              totalDamageDealtToChampions: 23978,
              spell1Id: 12,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "순간이동",
              spell2Name: "점멸",
              spell1Description:
                "4초 동안 정신을 집중한 다음, 챔피언이 지정한 아군 구조물, 미니언, 혹은 와드로 순간이동하고 이동 속도가 증가합니다. 순간이동의 재사용 대기시간은 챔피언 레벨에 따라 420~240초입니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 9,
              deaths: 4,
              assists: 6,
              champLevel: 17,
              totalMinionsKilled: 208,
              item0: 3074,
              item1: 3078,
              item2: 2055,
              item3: 3812,
              item4: 3047,
              item5: 0,
              item6: 3340,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3074.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3078.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2055.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3812.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3047.png",
              item5Url: "",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png",
              item0Name: "굶주린 히드라",
              item1Name: "삼위일체",
              item2Name: "제어 와드",
              item3Name: "죽음의 무도",
              item4Name: "닌자의 신발",
              item5Name: "",
              item6Name: "와드 토템 (장신구)",
              item0Description:
                "<stats>공격력 +80<br>기본 체력 재생 +100% <br>생명력 흡수 +18%</stats><br><br><passive>기본 지속 효과:</passive> 이 아이템으로 가하는 피해에는 총 생명력 흡수의 50%가 적용됩니다.<br><unique>고유 지속 효과 - 베기:</unique> 기본 공격 적중 시 대상 주위의 적들에게 총 공격력의 20%~60%에 해당하는 추가 물리 피해를 입힙니다. (중앙에서 가장 가까운 적에게 가장 큰 피해)<br><active>고유 사용 효과 - 초승달:</active> 주위에 있는 적 유닛에게 총 공격력의 60%~100%에 해당하는 물리 피해를 입힙니다. (중앙에서 가장 가까운 적에게 가장 큰 피해) (재사용 대기시간 10초)",
              item1Description:
                "<stats>체력 +250<br><mana>마나 +250</mana><br>공격력 +25<br>공격 속도 +40%<br>재사용 대기시간 감소 +20%<br>이동 속도 +5%</stats><br><br><unique>고유 지속 효과 - 격분:</unique> 기본 공격 시 2초간 이동 속도가 20 상승합니다. 적을 처치하면 이동 속도가 60 상승합니다. 원거리 챔피언의 경우 이동 속도 상승 효과는 절반만 적용됩니다.<br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 사용하고 나면 다음 기본 공격 적중 시 기본 공격력의 200%에 해당하는 추가 물리 피해를 입힙니다. (재사용 대기시간 1.5초)",
              item2Description:
                "<groupLimit>제어 와드는 가방에 2개만 소지할 수 있습니다.</groupLimit><br><br><consumable>클릭하여 사용:</consumable> 주변 지역을 드러내 주는 와드를 설치합니다. 근처의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. 위장 중인 유닛의 모습도 드러냅니다. 하지만 제어 와드로 다른 제어 와드를 무력화시킬 수는 없습니다.<br><br>플레이어 당 맵에 설치할 수 있는 <font color='#BBFFFF'>제어 와드</font>의 개수는  1개로 제한됩니다.",
              item3Description:
                "<stats>공격력 +50<br>방어력 +30<br>마법 저항력 +30<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과:</unique> 적에게 가한 피해량의 15%만큼 체력을 회복합니다. 이 효과는 광역 피해에는 33%만 적용됩니다.<br><unique>고유 지속 효과:</unique> 입은 피해의 <specialRules>30%(근접 챔피언)/10%(원거리 챔피언)</specialRules>가 3초 동안 지속되는 출혈 효과로 전환됩니다.",
              item4Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats>방어력 +20</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 피해량의 12%를 막아 줍니다.<br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
              item5Description: "",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 충전량을 1회 소모하여 <scaleLevel>90 ~ 120</scaleLevel>초 동안 주변을 드러내 주는 보이지 않는 <font color='#BBFFFF'>투명 와드</font>를 설치합니다. <br><br>매 <scaleLevel>240 ~ 120</scaleLevel>초마다 1회 충전되며 최대 2회까지 충전됩니다.<br><br>와드 지속시간과 충전 주기는 레벨이 오를수록 향상됩니다.<br><br><rules>(플레이어당 맵에 설치할 수 있는 <font color='#BBFFFF'>투명 와드</font>는 3개로 제한됩니다.)</rules>",
              wardsPlaced: 10,
              teamId: 100,
              win: true
            },
            {
              idx: 21,
              summonerName: "냐하하하히",
              championId: 235,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Senna.png",
              championName: "세나",
              totalDamageDealtToChampions: 16854,
              spell1Id: 7,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerHeal.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "회복",
              spell2Name: "점멸",
              spell1Description:
                "자신과 대상 아군 챔피언의 체력을 90~345만큼 (챔피언 레벨에 따라 변동) 회복시키고 1초 동안 이동 속도가 30% 증가합니다. 최근 소환사 주문 회복의 영향을 받은 유닛의 경우 치유량이 절반만 적용됩니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 7,
              deaths: 0,
              assists: 8,
              champLevel: 15,
              totalMinionsKilled: 190,
              item0: 1055,
              item1: 3042,
              item2: 3147,
              item3: 3031,
              item4: 3009,
              item5: 1036,
              item6: 3363,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1055.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3042.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3147.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3031.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3009.png",
              item5Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1036.png",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3363.png",
              item0Name: "도란의 검",
              item1Name: "무라마나",
              item2Name: "드락사르의 황혼검",
              item3Name: "무한의 대검",
              item4Name: "신속의 장화",
              item5Name: "롱소드",
              item6Name: "망원형 개조",
              item0Description:
                "<stats>공격력 +8<br>체력 +80<br>생명력 흡수 +3%</stats>",
              item1Description:
                "<stats>공격력 +35<br><mana>마나 +1000</mana></stats><br><br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 2%만큼 공격력이 오릅니다. 마나를 사용하면 15%를 돌려받습니다.</mana><br><mana><unique>고유 지속 효과 - 충격:</unique> 단일 대상에 대한 스킬 혹은 기본 공격이 <font color='#FFFFFF'>챔피언</font>에게 적중 시 현재 마나의 3%를 소모하여, 소모한 마나의 두 배만큼 추가 물리 피해를 입힙니다.<br><br>이 효과는 마나가 최대치의 20% 이상 남아 있을 때만 활성화됩니다.</mana><br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>",
              item2Description:
                "<stats>공격력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과</unique>: <a href='Lethality'>물리 관통력</a> +21<br><unique>고유 지속 효과 - 밤의 추적자:</unique> 1초 이상 눈에 띄지 않으면 적 챔피언에 대한 다음 기본 공격은 <scaleLevel>30~150</scaleLevel>의 추가 물리 피해를 입히고 0.25초 동안 99% 둔화시킵니다. 원거리 공격일 경우 대상을 둔화시키지 않습니다. (이 효과는 적 챔피언의 눈에 띈 후 5초간 지속됩니다.)",
              item3Description:
                "<stats>공격력 +80<br>치명타 확률 +25%</stats><br><br><unique>고유 지속 효과:</unique> 치명타가 피해량의 200%가 아닌 225%를 가합니다.",
              item4Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +60<br><unique>고유 지속 효과 - 둔화 저항:</unique> 이동 속도 둔화 효과가 25% 줄어듭니다.",
              item5Description: "<stats>공격력 +10</stats>",
              item6Description:
                "<levelLimit>업그레이드하려면 9레벨 이상이 되어야 합니다.</levelLimit><br><groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><font color='#FFFFFF'>와드 토템</font> 장신구 업그레이드 시:<br><br><stats><font color='#00FF00'>+</font> 설치 가능 범위 대폭(+650%) 증가<br><font color='#00FF00'>+</font> 지속시간 제한 없음, 와드 설치 개수 제한에 관계 없음<br><font color='#FF0000'>-</font> <font color='#FF6600'>재사용 대기시간 10% 증가</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>누구나 볼 수 있는 와드로, 파괴 가능하고 아군의 대상으로 지정 불가</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>와드 시야 범위 45% 감소</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>상점 방문 시 충전되지 않음</font></stats>",
              wardsPlaced: 8,
              teamId: 100,
              win: true
            },
            {
              idx: 156,
              summonerName: "영블러드",
              championId: 84,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Akali.png",
              championName: "아칼리",
              totalDamageDealtToChampions: 20473,
              spell1Id: 12,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "순간이동",
              spell2Name: "점멸",
              spell1Description:
                "4초 동안 정신을 집중한 다음, 챔피언이 지정한 아군 구조물, 미니언, 혹은 와드로 순간이동하고 이동 속도가 증가합니다. 순간이동의 재사용 대기시간은 챔피언 레벨에 따라 420~240초입니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 9,
              deaths: 2,
              assists: 9,
              champLevel: 16,
              totalMinionsKilled: 151,
              item0: 3191,
              item1: 3146,
              item2: 0,
              item3: 1054,
              item4: 3165,
              item5: 3020,
              item6: 3364,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3191.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3146.png",
              item2Url: "",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1054.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3165.png",
              item5Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png",
              item0Name: "추적자의 팔목 보호대",
              item1Name: "마법공학 총검",
              item2Name: "",
              item3Name: "도란의 방패",
              item4Name: "모렐로노미콘",
              item5Name: "마법사의 신발",
              item6Name: "예언자의 렌즈",
              item0Description:
                "<stats>방어력 +30<br>주문력 +20</stats><br><br><unique>고유 지속 효과:</unique> 유닛을 하나 처치하면 방어력과 주문력이 추가로 0.5 오릅니다. 이 효과는 최대 30번까지 중첩됩니다.",
              item1Description:
                "<stats>공격력 +40<br>주문력 +80</stats><br><br><unique>고유 지속 효과:</unique> 적에게 가한 피해량의 15%만큼 회복합니다. 이 효과는 범위 피해에는 33%만 적용됩니다.<br><active>고유 사용 효과 - 번개:</active> <scaleLevel>175~253</scaleLevel> (+ 주문력의 30%)의 마법 피해를 입히고 대상 챔피언을 2초 동안 40% 둔화시킵니다. (재사용 대기시간은 40초이며, 다른 <font color='#9999FF'><a href='itembolt'>마법공학</a></font> 아이템과 재사용 대기시간을 공유합니다.)",
              item2Description: "",
              item3Description:
                "<stats>체력 +80</stats><br><br><passive>기본 지속 효과: </passive>5초마다 6의 체력을 회복합니다.<br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 5의 추가 물리 피해를 입힙니다.<br><unique>고유 지속 효과:</unique> 적 챔피언에게 피해를 입으면 8초 동안 잃은 체력 %에 비례해 최대 40의 체력을 추가로 회복합니다. (원거리 챔피언이나 광역 피해, 주기적 피해의 경우 회복 효과가 66%로 적용됩니다.)",
              item4Description:
                "<stats>주문력 +70<br>체력 +300</stats><br><br><unique>고유 지속 효과- 죽음의 감촉:</unique> <a href='FlatMagicPen'>마법 관통력</a> +15<br><unique>고유 지속 효과- 저주받은 일격:</unique> 챔피언에게 마법 피해를 가하면 3초 동안 <a href='GrievousWounds'>고통스러운 상처</a> 효과를 적용합니다.",
              item5Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats><a href='FlatMagicPen'>마법 관통력</a> +18</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용 대기시간 90~60초)",
              wardsPlaced: 8,
              teamId: 100,
              win: true
            }
          ],
          redTeamSummoners: [
            {
              idx: 22,
              summonerName: "예비실업자양성",
              championId: 875,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Sett.png",
              championName: "세트",
              totalDamageDealtToChampions: 11516,
              spell1Id: 12,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "순간이동",
              spell2Name: "점멸",
              spell1Description:
                "4초 동안 정신을 집중한 다음, 챔피언이 지정한 아군 구조물, 미니언, 혹은 와드로 순간이동하고 이동 속도가 증가합니다. 순간이동의 재사용 대기시간은 챔피언 레벨에 따라 420~240초입니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 1,
              deaths: 8,
              assists: 2,
              champLevel: 15,
              totalMinionsKilled: 138,
              item0: 1054,
              item1: 3075,
              item2: 3047,
              item3: 3068,
              item4: 0,
              item5: 0,
              item6: 3340,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1054.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3075.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3047.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3068.png",
              item4Url: "",
              item5Url: "",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png",
              item0Name: "도란의 방패",
              item1Name: "가시 갑옷",
              item2Name: "닌자의 신발",
              item3Name: "태양불꽃 망토",
              item4Name: "",
              item5Name: "",
              item6Name: "와드 토템 (장신구)",
              item0Description:
                "<stats>체력 +80</stats><br><br><passive>기본 지속 효과: </passive>5초마다 6의 체력을 회복합니다.<br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 5의 추가 물리 피해를 입힙니다.<br><unique>고유 지속 효과:</unique> 적 챔피언에게 피해를 입으면 8초 동안 잃은 체력 %에 비례해 최대 40의 체력을 추가로 회복합니다. (원거리 챔피언이나 광역 피해, 주기적 피해의 경우 회복 효과가 66%로 적용됩니다.)",
              item1Description:
                "<stats>체력 +250<br>방어력 +80</stats><br><br><unique>고유 지속 효과 - 가시:</unique> 기본 공격에 맞을 경우, 추가 방어력의 10% +25에 해당하는 마법 피해를 적에게 되돌려주고 3초 동안 <a href='GrievousWounds'>고통스러운 상처</a>효과를 남깁니다.<br><unique>고유 지속 효과 - 차가운 강철:</unique>  기본 공격에 맞으면, 공격한 챔피언의 공격 속도가 1초간 15% 감소합니다.",
              item2Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats>방어력 +20</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 피해량의 12%를 막아 줍니다.<br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
              item3Description:
                "<stats>체력 +425<br>방어력 +60  </stats><br><br><unique>고유 지속 효과 - 불사르기:</unique> 주변 적을 불태워 초당 <scaleLevel>[26~43]</scaleLevel>의 마법 피해를 입힙니다. 12초에 한 번, 적에게 이동 방해 효과 사용 시 <scaleLevel>[26~43]</scaleLevel><scaleHealth>(+추가 체력의 4%)</scaleHealth>만큼 추가 마법 피해를 입히고 불의 파도가 발생해 주변에 추가 피해를 입힙니다. 불사르기 피해량은 미니언과 몬스터 상대로 50% 증가합니다.",
              item4Description: "",
              item5Description: "",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 충전량을 1회 소모하여 <scaleLevel>90 ~ 120</scaleLevel>초 동안 주변을 드러내 주는 보이지 않는 <font color='#BBFFFF'>투명 와드</font>를 설치합니다. <br><br>매 <scaleLevel>240 ~ 120</scaleLevel>초마다 1회 충전되며 최대 2회까지 충전됩니다.<br><br>와드 지속시간과 충전 주기는 레벨이 오를수록 향상됩니다.<br><br><rules>(플레이어당 맵에 설치할 수 있는 <font color='#BBFFFF'>투명 와드</font>는 3개로 제한됩니다.)</rules>",
              wardsPlaced: 7,
              teamId: 200,
              win: false
            },
            {
              idx: 3,
              summonerName: "하르크",
              championId: 101,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Xerath.png",
              championName: "제라스",
              totalDamageDealtToChampions: 11210,
              spell1Id: 7,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerHeal.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "회복",
              spell2Name: "점멸",
              spell1Description:
                "자신과 대상 아군 챔피언의 체력을 90~345만큼 (챔피언 레벨에 따라 변동) 회복시키고 1초 동안 이동 속도가 30% 증가합니다. 최근 소환사 주문 회복의 영향을 받은 유닛의 경우 치유량이 절반만 적용됩니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 1,
              deaths: 6,
              assists: 4,
              champLevel: 11,
              totalMinionsKilled: 21,
              item0: 3853,
              item1: 3020,
              item2: 3285,
              item3: 2055,
              item4: 1052,
              item5: 1028,
              item6: 3364,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3853.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3285.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2055.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1052.png",
              item5Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1028.png",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png",
              item0Name: "얼음 정수의 파편",
              item1Name: "마법사의 신발",
              item2Name: "루덴의 메아리",
              item3Name: "제어 와드",
              item4Name: "증폭의 고서",
              item5Name: "루비 수정",
              item6Name: "예언자의 렌즈",
              item0Description:
                "<stats>주문력 +50<br>체력 +100<br>10초당 골드 +3<br><mana>기본 마나 재생 +100% </mana></stats><br><br><active>고유 사용 효과 - 와드 설치:</active> <font color='#FF9900'>투명 와드</font>를 설치합니다. 상점 방문 시 4회의 충전량이 다시 채워집니다.<br><br><rules>(<a href='Support_Minion_Penalty'>미니언을 너무 많이 처치</a>하면 획득하는 골드가 감소합니다.)</rules>",
              item1Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats><a href='FlatMagicPen'>마법 관통력</a> +18</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
              item2Description:
                "<stats>주문력 +90<br><mana>마나 +600</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><unique>고유 지속 효과 - 메아리:</unique> 이동하거나 주문을 시전할 때 전류가 충전됩니다. 충전량이 100이 되면 다음 스킬로 피해를 입혔을 때 충전된 전류를 전부 방출해, 최대 4명의 적에게 100 (+주문력의 10%)에 해당하는 마법 피해를 적중 시 추가로 입힙니다.",
              item3Description:
                "<groupLimit>제어 와드는 가방에 2개만 소지할 수 있습니다.</groupLimit><br><br><consumable>클릭하여 사용:</consumable> 주변 지역을 드러내 주는 와드를 설치합니다. 근처의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. 위장 중인 유닛의 모습도 드러냅니다. 하지만 제어 와드로 다른 제어 와드를 무력화시킬 수는 없습니다.<br><br>플레이어 당 맵에 설치할 수 있는 <font color='#BBFFFF'>제어 와드</font>의 개수는  1개로 제한됩니다.",
              item4Description: "<stats>주문력 +20</stats>",
              item5Description: "<stats>체력 +150</stats>",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용 대기시간 90~60초)",
              wardsPlaced: 20,
              teamId: 200,
              win: false
            },
            {
              idx: 42,
              summonerName: "Chaos만랩",
              championId: 45,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Veigar.png",
              championName: "베이가",
              totalDamageDealtToChampions: 11347,
              spell1Id: 4,
              spell2Id: 12,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png",
              spell1Name: "점멸",
              spell2Name: "순간이동",
              spell1Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              spell2Description:
                "4초 동안 정신을 집중한 다음, 챔피언이 지정한 아군 구조물, 미니언, 혹은 와드로 순간이동하고 이동 속도가 증가합니다. 순간이동의 재사용 대기시간은 챔피언 레벨에 따라 420~240초입니다.",
              kills: 4,
              deaths: 2,
              assists: 2,
              champLevel: 15,
              totalMinionsKilled: 211,
              item0: 2420,
              item1: 3001,
              item2: 3040,
              item3: 3111,
              item4: 3108,
              item5: 1056,
              item6: 3340,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2420.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3001.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3040.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3108.png",
              item5Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1056.png",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png",
              item0Name: "초시계",
              item1Name: "심연의 가면",
              item2Name: "대천사의 포옹",
              item3Name: "헤르메스의 발걸음",
              item4Name: "악마의 마법서",
              item5Name: "도란의 반지",
              item6Name: "와드 토템 (장신구)",
              item0Description:
                "<active>고유 사용 효과 - 경직:</active> 챔피언이 2.5초 동안 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다. (단 1회 사용 가능)",
              item1Description:
                "<stats>체력 +350<br><mana>마나 +300</mana><br>마법 저항력 +55<br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 영원:</unique> 챔피언으로부터 입은 피해의 15%를 마나로 돌려받습니다. 마나 소모 시 20%를 체력으로 돌려받습니다. (스킬 사용 1회당 최대 25까지)<br><aura>고유 오오라:</aura> 주변 적 챔피언이 입는 마법 피해가 15% 증가합니다.",
              item2Description:
                "<stats>주문력 +50<br><mana>마나 +1400</mana><br>재사용 대기시간 감소 +10%</stats><br><br><unique>고유 지속 효과 - 가속:</unique> 재사용 대기시간이 추가로 10% 감소합니다.<br><mana><unique>고유 지속 효과 - 경탄:</unique> 최대 마나의 3%만큼 주문력이 오릅니다. 마나를 소모하면 소모량의 25%를 돌려받습니다.</mana><br><active>고유 사용 효과 - 마나 보호막:</active> 현재 마나의 15%를 소모하여 2초 동안 150 + 마나 소모량에 해당하는 피해를 흡수하는 보호막을 씌웁니다. (재사용 대기시간 120초)<br><br><groupLimit>여신의 눈물 계열 아이템 소지 개수는 1개로 제한됩니다.</groupLimit>",
              item3Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats>마법 저항력 +25</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45<br><unique>고유 지속 효과 - 강인함:</unique> 기절, 둔화, 도발, 공포, 침묵, 실명, 변이 및 이동 불가 효과의 지속시간이 30% 감소합니다.",
              item4Description:
                "<stats>주문력 +35</stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +10%",
              item5Description:
                "<stats>체력 +60<br>주문력 +15<br><mana>5초당 마나 재생 +5</mana></stats><br><br><passive>기본 지속 효과: </passive>미니언에게 기본 공격 적중 시 5의 추가 물리 피해를 입힙니다.",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 충전량을 1회 소모하여 <scaleLevel>90 ~ 120</scaleLevel>초 동안 주변을 드러내 주는 보이지 않는 <font color='#BBFFFF'>투명 와드</font>를 설치합니다. <br><br>매 <scaleLevel>240 ~ 120</scaleLevel>초마다 1회 충전되며 최대 2회까지 충전됩니다.<br><br>와드 지속시간과 충전 주기는 레벨이 오를수록 향상됩니다.<br><br><rules>(플레이어당 맵에 설치할 수 있는 <font color='#BBFFFF'>투명 와드</font>는 3개로 제한됩니다.)</rules>",
              wardsPlaced: 11,
              teamId: 200,
              win: false
            },
            {
              idx: 26,
              summonerName: "재민좋아",
              championId: 254,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Vi.png",
              championName: "바이",
              totalDamageDealtToChampions: 3973,
              spell1Id: 4,
              spell2Id: 11,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerSmite.png",
              spell1Name: "점멸",
              spell2Name: "강타",
              spell1Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              spell2Description:
                "대상 에픽 및 대형/중형 몬스터, 혹은 적 미니언에게 390~1,000(챔피언 레벨에 따라 변동)의 고정 피해를 입힙니다. 몬스터에게 사용하면 자신의 최대 체력에 비례해 체력을 회복합니다.",
              kills: 2,
              deaths: 8,
              assists: 6,
              champLevel: 13,
              totalMinionsKilled: 29,
              item0: 1400,
              item1: 2031,
              item2: 3047,
              item3: 2055,
              item4: 3078,
              item5: 0,
              item6: 3364,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1400.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2031.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3047.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2055.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3078.png",
              item5Url: "",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png",
              item0Name: "마법 부여: 용사",
              item1Name: "충전형 물약",
              item2Name: "닌자의 신발",
              item3Name: "제어 와드",
              item4Name: "삼위일체",
              item5Name: "",
              item6Name: "예언자의 렌즈",
              item0Description:
                "<stats>공격력 +60<br>재사용 대기시간 감소 +10%</stats><br><br><groupLimit>골드 획득 아이템이나 정글 아이템은 1개로 소지가 제한됩니다.</groupLimit>",
              item1Description:
                "<groupLimit>한 번에 한 종류의 회복 물약만 소지할 수 있습니다.</groupLimit><br><br><active>고유 사용 효과:</active> 충전량을 1회 소모해 12초 동안 125의 체력을 회복합니다. 상점 방문 시 2회의 충전량이 다시 채워집니다.",
              item2Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats>방어력 +20</stats><br><br><unique>고유 지속 효과:</unique> 기본 공격 피해량의 12%를 막아 줍니다.<br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
              item3Description:
                "<groupLimit>제어 와드는 가방에 2개만 소지할 수 있습니다.</groupLimit><br><br><consumable>클릭하여 사용:</consumable> 주변 지역을 드러내 주는 와드를 설치합니다. 근처의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. 위장 중인 유닛의 모습도 드러냅니다. 하지만 제어 와드로 다른 제어 와드를 무력화시킬 수는 없습니다.<br><br>플레이어 당 맵에 설치할 수 있는 <font color='#BBFFFF'>제어 와드</font>의 개수는  1개로 제한됩니다.",
              item4Description:
                "<stats>체력 +250<br><mana>마나 +250</mana><br>공격력 +25<br>공격 속도 +40%<br>재사용 대기시간 감소 +20%<br>이동 속도 +5%</stats><br><br><unique>고유 지속 효과 - 격분:</unique> 기본 공격 시 2초간 이동 속도가 20 상승합니다. 적을 처치하면 이동 속도가 60 상승합니다. 원거리 챔피언의 경우 이동 속도 상승 효과는 절반만 적용됩니다.<br><unique>고유 지속 효과 - 주문 검:</unique> 스킬을 사용하고 나면 다음 기본 공격 적중 시 기본 공격력의 200%에 해당하는 추가 물리 피해를 입힙니다. (재사용 대기시간 1.5초)",
              item5Description: "",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용 대기시간 90~60초)",
              wardsPlaced: 6,
              teamId: 200,
              win: false
            },
            {
              idx: 43,
              summonerName: "Kky0303",
              championId: 236,
              championUrl:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Lucian.png",
              championName: "루시안",
              totalDamageDealtToChampions: 14067,
              spell1Id: 14,
              spell2Id: 4,
              spell1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerDot.png",
              spell2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png",
              spell1Name: "점화",
              spell2Name: "점멸",
              spell1Description:
                "적 챔피언을 불태워 5초 동안 70~410의 고정 피해(챔피언 레벨에 따라 변동)를 입히고 모습을 드러내며 치료 효과를 감소시킵니다.",
              spell2Description:
                "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.",
              kills: 2,
              deaths: 10,
              assists: 0,
              champLevel: 15,
              totalMinionsKilled: 217,
              item0: 1055,
              item1: 1053,
              item2: 3508,
              item3: 3094,
              item4: 3006,
              item5: 0,
              item6: 3340,
              item0Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1055.png",
              item1Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1053.png",
              item2Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3508.png",
              item3Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3094.png",
              item4Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3006.png",
              item5Url: "",
              item6Url:
                "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png",
              item0Name: "도란의 검",
              item1Name: "흡혈의 낫",
              item2Name: "정수 약탈자",
              item3Name: "고속 연사포",
              item4Name: "광전사의 군화",
              item5Name: "",
              item6Name: "와드 토템 (장신구)",
              item0Description:
                "<stats>공격력 +8<br>체력 +80<br>생명력 흡수 +3%</stats>",
              item1Description: "<stats>공격력 +15<br>생명력 흡수 +10%</stats>",
              item2Description:
                "<stats>공격력 +70<br>치명타 확률 +25%</stats><br><br><unique>고유 지속 효과:</unique> 재사용 대기시간 감소 +20%<br><unique>고유 지속 효과:</unique> 기본 공격 시 잃은 마나의 1.5%를 회복합니다.",
              item3Description:
                "<stats>공격 속도 +30%<br>치명타 확률 +25%<br>이동 속도 +7%</stats><br><br><unique>고유 지속 효과 - 충전 상태:</unique> 이동하거나 공격하면 <a href='Energized'>충전 상태</a>가 됩니다. <br><unique>고유 지속 효과 - 저격수:</unique> 충전 상태로 공격 시 <magicDamage>120의 추가 마법 피해</magicDamage>를 입히며 사거리가 35% 증가합니다. (최대 사거리 +150)",
              item4Description:
                "<groupLimit>1개만 구입 가능합니다.</groupLimit><br><br><stats> 공격 속도 +35%</stats><br><br><unique>고유 지속 효과 - 이동 속도 향상:</unique> 이동 속도 +45",
              item5Description: "",
              item6Description:
                "<groupLimit>장신구 소지 개수는 1개로 제한됩니다.</groupLimit><br><br><active>사용 시:</active> 충전량을 1회 소모하여 <scaleLevel>90 ~ 120</scaleLevel>초 동안 주변을 드러내 주는 보이지 않는 <font color='#BBFFFF'>투명 와드</font>를 설치합니다. <br><br>매 <scaleLevel>240 ~ 120</scaleLevel>초마다 1회 충전되며 최대 2회까지 충전됩니다.<br><br>와드 지속시간과 충전 주기는 레벨이 오를수록 향상됩니다.<br><br><rules>(플레이어당 맵에 설치할 수 있는 <font color='#BBFFFF'>투명 와드</font>는 3개로 제한됩니다.)</rules>",
              wardsPlaced: 6,
              teamId: 200,
              win: false
            }
          ],
          teams: [
            {
              bans: [
                {
                  pickTurn: 1,
                  championId: 18
                },
                {
                  pickTurn: 3,
                  championId: 68
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 4,
                  championId: 111
                },
                {
                  pickTurn: 6,
                  championId: 12
                },
                {
                  pickTurn: 2,
                  championId: 157
                },
                {
                  pickTurn: 3,
                  championId: 3
                },
                {
                  pickTurn: 2,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 69
                },
                {
                  pickTurn: 6,
                  championId: 81
                },
                {
                  pickTurn: 3,
                  championId: 45
                },
                {
                  pickTurn: 1,
                  championId: 68
                },
                {
                  pickTurn: 3,
                  championId: 157
                },
                {
                  pickTurn: 4,
                  championId: 235
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 22
                },
                {
                  pickTurn: 2,
                  championId: 68
                },
                {
                  pickTurn: 4,
                  championId: 50
                },
                {
                  pickTurn: 6,
                  championId: 112
                },
                {
                  pickTurn: 1,
                  championId: 61
                },
                {
                  pickTurn: 5,
                  championId: 45
                },
                {
                  pickTurn: 3,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 42
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 1,
                  championId: 157
                }
              ]
            },
            {
              bans: [
                {
                  pickTurn: 1,
                  championId: 18
                },
                {
                  pickTurn: 3,
                  championId: 68
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 4,
                  championId: 111
                },
                {
                  pickTurn: 6,
                  championId: 12
                },
                {
                  pickTurn: 2,
                  championId: 157
                },
                {
                  pickTurn: 3,
                  championId: 3
                },
                {
                  pickTurn: 2,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 69
                },
                {
                  pickTurn: 6,
                  championId: 81
                },
                {
                  pickTurn: 3,
                  championId: 45
                },
                {
                  pickTurn: 1,
                  championId: 68
                },
                {
                  pickTurn: 3,
                  championId: 157
                },
                {
                  pickTurn: 4,
                  championId: 235
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 22
                },
                {
                  pickTurn: 2,
                  championId: 68
                },
                {
                  pickTurn: 4,
                  championId: 50
                },
                {
                  pickTurn: 6,
                  championId: 112
                },
                {
                  pickTurn: 1,
                  championId: 61
                },
                {
                  pickTurn: 5,
                  championId: 45
                },
                {
                  pickTurn: 3,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 42
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 1,
                  championId: 157
                }
              ]
            },
            {
              bans: [
                {
                  pickTurn: 1,
                  championId: 18
                },
                {
                  pickTurn: 3,
                  championId: 68
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 4,
                  championId: 111
                },
                {
                  pickTurn: 6,
                  championId: 12
                },
                {
                  pickTurn: 2,
                  championId: 157
                },
                {
                  pickTurn: 3,
                  championId: 3
                },
                {
                  pickTurn: 2,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 69
                },
                {
                  pickTurn: 6,
                  championId: 81
                },
                {
                  pickTurn: 3,
                  championId: 45
                },
                {
                  pickTurn: 1,
                  championId: 68
                },
                {
                  pickTurn: 3,
                  championId: 157
                },
                {
                  pickTurn: 4,
                  championId: 235
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 22
                },
                {
                  pickTurn: 2,
                  championId: 68
                },
                {
                  pickTurn: 4,
                  championId: 50
                },
                {
                  pickTurn: 6,
                  championId: 112
                },
                {
                  pickTurn: 1,
                  championId: 61
                },
                {
                  pickTurn: 5,
                  championId: 45
                },
                {
                  pickTurn: 3,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 42
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 1,
                  championId: 157
                }
              ]
            },
            {
              bans: [
                {
                  pickTurn: 1,
                  championId: 18
                },
                {
                  pickTurn: 3,
                  championId: 68
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 4,
                  championId: 111
                },
                {
                  pickTurn: 6,
                  championId: 12
                },
                {
                  pickTurn: 2,
                  championId: 157
                },
                {
                  pickTurn: 3,
                  championId: 3
                },
                {
                  pickTurn: 2,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 69
                },
                {
                  pickTurn: 6,
                  championId: 81
                },
                {
                  pickTurn: 3,
                  championId: 45
                },
                {
                  pickTurn: 1,
                  championId: 68
                },
                {
                  pickTurn: 3,
                  championId: 157
                },
                {
                  pickTurn: 4,
                  championId: 235
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 22
                },
                {
                  pickTurn: 2,
                  championId: 68
                },
                {
                  pickTurn: 4,
                  championId: 50
                },
                {
                  pickTurn: 6,
                  championId: 112
                },
                {
                  pickTurn: 1,
                  championId: 61
                },
                {
                  pickTurn: 5,
                  championId: 45
                },
                {
                  pickTurn: 3,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 42
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 1,
                  championId: 157
                }
              ]
            },
            {
              bans: [
                {
                  pickTurn: 1,
                  championId: 18
                },
                {
                  pickTurn: 3,
                  championId: 68
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 4,
                  championId: 111
                },
                {
                  pickTurn: 6,
                  championId: 12
                },
                {
                  pickTurn: 2,
                  championId: 157
                },
                {
                  pickTurn: 3,
                  championId: 3
                },
                {
                  pickTurn: 2,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 69
                },
                {
                  pickTurn: 6,
                  championId: 81
                },
                {
                  pickTurn: 3,
                  championId: 45
                },
                {
                  pickTurn: 1,
                  championId: 68
                },
                {
                  pickTurn: 3,
                  championId: 157
                },
                {
                  pickTurn: 4,
                  championId: 235
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 22
                },
                {
                  pickTurn: 2,
                  championId: 68
                },
                {
                  pickTurn: 4,
                  championId: 50
                },
                {
                  pickTurn: 6,
                  championId: 112
                },
                {
                  pickTurn: 1,
                  championId: 61
                },
                {
                  pickTurn: 5,
                  championId: 45
                },
                {
                  pickTurn: 3,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 42
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 1,
                  championId: 157
                }
              ]
            },
            {
              bans: [
                {
                  pickTurn: 1,
                  championId: 18
                },
                {
                  pickTurn: 3,
                  championId: 68
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 4,
                  championId: 111
                },
                {
                  pickTurn: 6,
                  championId: 12
                },
                {
                  pickTurn: 2,
                  championId: 157
                },
                {
                  pickTurn: 3,
                  championId: 3
                },
                {
                  pickTurn: 2,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 69
                },
                {
                  pickTurn: 6,
                  championId: 81
                },
                {
                  pickTurn: 3,
                  championId: 45
                },
                {
                  pickTurn: 1,
                  championId: 68
                },
                {
                  pickTurn: 3,
                  championId: 157
                },
                {
                  pickTurn: 4,
                  championId: 235
                },
                {
                  pickTurn: 5,
                  championId: 51
                },
                {
                  pickTurn: 2,
                  championId: 22
                },
                {
                  pickTurn: 2,
                  championId: 68
                },
                {
                  pickTurn: 4,
                  championId: 50
                },
                {
                  pickTurn: 6,
                  championId: 112
                },
                {
                  pickTurn: 1,
                  championId: 61
                },
                {
                  pickTurn: 5,
                  championId: 45
                },
                {
                  pickTurn: 3,
                  championId: 18
                },
                {
                  pickTurn: 4,
                  championId: 42
                },
                {
                  pickTurn: 2,
                  championId: 81
                },
                {
                  pickTurn: 1,
                  championId: 157
                }
              ]
            }
          ]
        }
      ],
      itemData: {},
      summonerName: null
    };
  },
  created() {
    this.summonerName = this.$route.query.summonerName;
    // this.getCustomGames();
  },
  methods: {
    updatePage: function(page) {
      this.page = page;
      // this.getCustomGames();
      // scroll(0, 0);
    }
  }
};
</script>

<style scoped>
.spell {
  /* width: 3vh;
  height: 3vh; */
  width: 30px;
  height: 30px;
}

.spell1 {
  /* margin-left: 5vh; */
  margin-right: 1vh;
}

.champ {
  width: 3vh;
  height: 3vh;
  margin-right: 1vh;
}

.item {
  width: 3vh;
  height: 3vh;
  margin-right: 1vh;
}
</style>
