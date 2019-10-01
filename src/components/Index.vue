<template>
  <v-container
    class="back"
    fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex col-2>
        <v-row align="center">
          <v-text-field
            color="yellow darken-2"
            x-large
            solo
            hide-details
            append-icon="search"
            label="소환사명"
            @click:append="test()"
          />
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  //import Navbar from "../components/Navbar"

  export default {
    name: "Index",
    components: {
      //Navbar
      },
    props: {
      source: {
        type: String,
        default: ""
      }
    },
    data: () => ({
        menu: [
          { icon: "mdi-home", title: "Link A" },
          { icon: "mdi-info", title: "Link B" },
          { icon: "mdi-warning", title: "Link C" }
        ]
    }),
    created () {
      /*this.$vuetify.theme.dark = true*/
    },
    methods: {
    test: function (event) {
        alert(event);
     }
   }
};
</script>
