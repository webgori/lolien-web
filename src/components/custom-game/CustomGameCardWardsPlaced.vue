<template>
  <v-col cols="auto" class="text-center">
    와드 설치 <br />
    {{ summoner.wardsPlaced }}
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