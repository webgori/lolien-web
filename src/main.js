import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "./assets/stylus/main.styl";
import "./assets/js/script.js";
import VueMoment from "vue-moment";
import moment from "moment";
import VueChartJs from "vue-chartjs";

Vue.config.productionTip = false;

moment.locale("ko");

Vue.use(VueMoment, { moment });

// export const eventBus = new Vue({
//   methods: {
//     updatePage(page) {
//       this.$emit("updatePage", page);
//     }
//   }
// });

Vue.prototype.$eventBus = new Vue();

Vue.component("line-chart", {
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
});

Vue.filter("formatSize", function(size) {
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + " TB";
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + " GB";
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + " MB";
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + " KB";
  }
  return size.toString() + " B";
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
