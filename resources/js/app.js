require("./bootstrap")

import VueInternationalization from "vue-i18n";
import arLang from "./langs/ar.js";
import enLang from "./langs/en.js";
import Master from "./layouts/Master";

Vue.use(VueInternationalization);
const lang = document.documentElement.lang.substr(0, 2);

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
