import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vue from 'vue';
import EventBus from 'vue-bus-ts';

Vue.use(EventBus);
const bus = new EventBus.Bus();
import "./utils/imports";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  bus,
  render: h => h(App)
}).$mount("#app");
