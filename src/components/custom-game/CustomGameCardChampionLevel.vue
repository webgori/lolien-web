<template>
  <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="auto" class="mr-4">
    {{ getChampionLevel(summoner.champLevel) }}
    LV
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
    getChampionLevel(level) {
      return level.toString().padStart(2, "0");
    }
  }
};
</script>