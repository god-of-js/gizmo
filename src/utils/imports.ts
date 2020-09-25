import PulseLoader from "vue-spinner/src/GridLoader.vue";
import Vue from "vue";
import "izitoast/dist/css/iziToast.css";
import { notify } from "./alert";
Vue.prototype.$notify = notify;
Vue.component("pulse-loader", PulseLoader);
