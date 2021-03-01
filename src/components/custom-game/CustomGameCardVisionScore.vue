<template>
  <v-col cols="auto" class="text-center">
    시야 점수 <br />
    {{ summoner.visionScore }}
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
  methods: {}
};
</script>