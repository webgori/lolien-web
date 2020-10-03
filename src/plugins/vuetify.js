import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import ko from "vuetify/es5/locale/ko";
//import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ko },
    current: "ko"
  },
  icons: {
    iconfont: "fa"
  }
});

// ,
//   theme: {
//     dark: true,
//     themes: {
//       dark: {
//         primary: colors.yellow.darken2,
//         secondary: colors.red.darken2,
//         accent: colors.blue.darken2,
//         error: colors.pink.darken2,
//         info: colors.purple.darken2
//       }
//     }
//   }
