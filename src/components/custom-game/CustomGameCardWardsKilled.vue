<template>
  <v-col cols="auto" class="text-center">
    와드 파괴 <br />
    {{ summoner.wardsKilled }}
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