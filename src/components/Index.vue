<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex col-2>
          <v-row align="center">
          
            <v-text-field
              x-large
              solo
              hide-details
              append-icon="search"
              @click:append="test()"
              label="소환사명"
            ></v-text-field>
          </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from "../components/Navbar"

  export default {
    name: "Index",
    components: {Navbar},
    props: {
      source: String,
    },
    data: () => ({
        menu: [
          { icon: 'mdi-home', title: 'Link A' },
          { icon: 'mdi-info', title: 'Link B' },
          { icon: 'mdi-warning', title: 'Link C' }
        ]
      
    }),
    created () {
      /*this.$vuetify.theme.dark = true*/
    },
    methods: {
      test: function (event) {
        alert(0);
      }
    },
  }
</script>