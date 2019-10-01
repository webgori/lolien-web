import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/lib/util/colors'
import VueGAPI from "vue-gapi";

Vue.use(Vuetify);

Vue.directive('blur', {
  inserted: function (el) {
    el.onfocus = (ev) => ev.target.blur()
  }
});

const apiConfig = {
  apiKey: "TopcH4fkve-wx6X3ovD8Q2kz",
  clientId: "285480433358-lojuc8nr9bj32paj9nucvma8s2amd6vo.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/spreadsheets"
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
};

Vue.use(VueGAPI, apiConfig);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.yellow.darken2,
        secondary: colors.red.darken2,
        accent: colors.blue.darken2,
        error: colors.pink.darken2,
        info: colors.purple.darken2,
      },
    },
  }});
