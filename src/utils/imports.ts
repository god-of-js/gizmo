import PulseLoader from "vue-spinner/src/GridLoader.vue";
import Vue from "vue";
import { EventBus } from "./eventbus";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
Vue.use(VueIziToast);
Vue.prototype.$EventBus = EventBus;
Vue.component("pulse-loader", PulseLoader);
