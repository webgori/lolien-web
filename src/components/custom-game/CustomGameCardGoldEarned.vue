<template>
  <v-col cols="auto" class="text-center">
    골드 획득 <br />
    {{ getGoldEarned(summoner.goldEarned) }}
  </v-col>
</template>

<script>
export default {
  components: {},
  props: {
    summoner: { type: Object }
  },
  data: () => {
    return {};
  },
  created() {},
  methods: {
    getGoldEarned(goldEarned) {
      return this.numberToFormattedString(goldEarned);
    },
    numberToFormattedString(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>