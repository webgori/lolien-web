<template>
  <v-col cols="auto">
    <v-avatar v-if="getItemName() === ''" tile :size="imageWidth" color="grey">
    </v-avatar>
    <v-tooltip v-else top>
      <template v-slot:activator="{ on, attrs }">
        <v-img
          :width="imageWidth"
          v-bind="attrs"
          :src="getItemUrl()"
          v-on="on"
        />
      </template>
      <span class="yellow--text">{{ getItemName() }}</span
      ><br /><span v-html="getItemDescription()"></span>
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
    getItemUrl() {
      if (this.number === 1) {
        return this.summoner.item0Url;
      } else if (this.number === 2) {
        return this.summoner.item1Url;
      } else if (this.number === 3) {
        return this.summoner.item2Url;
      } else if (this.number === 4) {
        return this.summoner.item3Url;
      } else if (this.number === 5) {
        return this.summoner.item4Url;
      } else if (this.number === 6) {
        return this.summoner.item5Url;
      } else if (this.number === 7) {
        return this.summoner.item6Url;
      }
    },
    getItemName() {
      if (this.number === 1) {
        return this.summoner.item0Name;
      } else if (this.number === 2) {
        return this.summoner.item1Name;
      } else if (this.number === 3) {
        return this.summoner.item2Name;
      } else if (this.number === 4) {
        return this.summoner.item3Name;
      } else if (this.number === 5) {
        return this.summoner.item4Name;
      } else if (this.number === 6) {
        return this.summoner.item5Name;
      } else if (this.number === 7) {
        return this.summoner.item6Name;
      }
    },
    getItemDescription() {
      if (this.number === 1) {
        return this.summoner.item0Description;
      } else if (this.number === 2) {
        return this.summoner.item1Description;
      } else if (this.number === 3) {
        return this.summoner.item2Description;
      } else if (this.number === 4) {
        return this.summoner.item3Description;
      } else if (this.number === 5) {
        return this.summoner.item4Description;
      } else if (this.number === 6) {
        return this.summoner.item5Description;
      } else if (this.number === 7) {
        return this.summoner.item6Description;
      }
    }
  }
};
</script>