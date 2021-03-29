import Vue from "vue";
import App from "./App.vue";

import router from "./router";

// PLUGINS
import vuetify from "./plugins/vuetify";
import "./plugins/vue-head";
import "./plugins/vue-gtag";
import AOS from "aos";
import "aos/dist/aos.css";

// FILTERS
import "./filters/capitalize";
import "./filters/lowercase";
import "./filters/uppercase";

// STYLES
// Main Theme SCSS
import "./assets/scss/theme.scss";

Vue.config.productionTip = false;

export default new Vue({
  created() {
    AOS.init();
  },
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
