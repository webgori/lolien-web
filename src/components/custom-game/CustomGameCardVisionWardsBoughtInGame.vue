<template>
  <v-col cols="auto" class="text-center">
    제어 와드 구매 <br />
    {{ summoner.visionWardsBoughtInGame }}
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