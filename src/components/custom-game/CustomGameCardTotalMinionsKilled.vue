<template>
  <v-col cols="auto" class="text-center">
    CS <br />
    {{ getTotalMinionsKilled(summoner) }}
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
    getTotalMinionsKilled(summoner) {
      let totalMinionsKilled =
        summoner.totalMinionsKilled + summoner.neutralMinionsKilled;
      return totalMinionsKilled.toString().padStart(3, "0");
    }
  }
};
</script>