<template>
  <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="auto">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-img
          :width="imageWidth"
          v-bind="attrs"
          :src="getRuneUrl()"
          v-on="on"
        />
      </template>
      <span class="yellow--text">{{ getRuneName() }}</span
      ><br /><span v-html="getRuneDescription()"></span>
    </v-tooltip>
  </v-col>
</template>

<script>
export default {
  components: {},
  props: {
    summoner: { type: Object },
    number: { type: Number }
  },
  data: () => {
    return {
      imageWidth: 30
    };
  },
  created() {},
  methods: {
    getRuneUrl() {
      if (this.number === 1) {
        return this.summoner.primaryRuneUrl;
      } else if (this.number === 2) {
        return this.summoner.subRuneUrl;
      }
    },
    getRuneName() {
      if (this.number === 1) {
        return this.summoner.primaryRuneName;
      } else if (this.number === 2) {
        return this.summoner.subRuneName;
      }
    },
    getRuneDescription() {
      if (this.number === 1) {
        return this.summoner.primaryRuneDescription;
      } else if (this.number === 2) {
        return this.summoner.subRuneDescription;
      }
    }
  }
};
</script>