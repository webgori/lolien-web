<template>
  <v-col cols="auto">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-img
          v-bind="attrs"
          :width="imageWidth"
          :src="getSpellUrl()"
          v-on="on"
        />
      </template>
      <span class="yellow--text">{{ getSpellName() }}</span
      ><br /><span v-html="getSpellDescription()"></span>
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
    getSpellUrl() {
      if (this.number === 1) {
        return this.summoner.spell1Url;
      } else if (this.number === 2) {
        return this.summoner.spell2Url;
      } else if (this.number === 3) {
        return this.summoner.spell3Url;
      } else if (this.number === 4) {
        return this.summoner.spell4Url;
      } else if (this.number === 5) {
        return this.summoner.spell5Url;
      }
    },
    getSpellName() {
      if (this.number === 1) {
        return this.summoner.spell1Name;
      } else if (this.number === 2) {
        return this.summoner.spell2Name;
      } else if (this.number === 3) {
        return this.summoner.spell3Name;
      } else if (this.number === 4) {
        return this.summoner.spell4Name;
      } else if (this.number === 5) {
        return this.summoner.spell5Name;
      }
    },
    getSpellDescription() {
      if (this.number === 1) {
        return this.summoner.spell1Description;
      } else if (this.number === 2) {
        return this.summoner.spell2Description;
      } else if (this.number === 3) {
        return this.summoner.spell3Description;
      } else if (this.number === 4) {
        return this.summoner.spell4Description;
      } else if (this.number === 5) {
        return this.summoner.spell5Description;
      }
    }
  }
};
</script>