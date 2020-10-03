<template>
  <v-app>
    <v-container class="contents" bg fill-height grid-list-lg text-lg-left>
      <v-layout row wrap align-content-start>
        <v-flex xs12 lg12>
          <h2>1. LoLien</h2>

          <p>
            ...
          </p>
        </v-flex>

        <v-flex xs12 lg12>
          <h2>2. 현재 클랜장</h2>

          <p>
            ...
          </p>
        </v-flex>

        <v-flex xs12 lg12>
          <h2>3. 개발자</h2>

          <p>
            ...
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),
  created() {
    /*this.$vuetify.theme.dark = true*/
  },
  methods: {
    test: function(event) {
      alert(event);
    }
  }
};
</script>
