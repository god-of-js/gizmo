import PulseLoader from "vue-spinner/src/GridLoader.vue";
import Vue from "vue";
import "izitoast/dist/css/iziToast.css";
import input from "@/components/universal/input.vue";
import button from "@/components/universal/cbutton.vue";
import { format} from "@/utils/helpers";
import avatar from "@/components/universal/avatar.vue";
Vue.component("pulse-loader", PulseLoader);
Vue.component("cinput", input);
Vue.component("cbutton", button);
Vue.component("cavatar", avatar);
Vue.prototype.$format = format;
