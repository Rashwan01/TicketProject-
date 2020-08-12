require("./bootstrap")

import VueInternationalization from "vue-i18n";
import arLang from "./langs/ar.js";
import enLang from "./langs/en.js";
import Master from "./layouts/Master";
import Notifications from "vue-notification";
import AppStorage from "./helpers/AppStorage";
import User from "./helpers/user";
window.User = User;
window.Vue = require("vue");
window.axios = require("axios");
window.EventBus = new Vue();
const JWTtoken = `Bearer ${AppStorage.get("token")}`;
axios.interceptors.request.use(
  (config) => {
    config.headers.lang = AppStorage.get("lang");
    config.headers.Authorization = JWTtoken;

    return config;
  },
  (error) => Promise.reject(error)
);
Vue.use(Notifications);
Vue.use(VueInternationalization);
const lang = AppStorage.get("lang");

const i18n = new VueInternationalization({
    locale: lang,
    messages: {
        en: enLang,
        ar: arLang,

    }
});


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from "./router/index.js"
const app = new Vue({
    el: "#app",
    i18n,
    router,
    components: {
        Master
    }
});
