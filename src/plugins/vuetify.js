import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import VueI18n from "vue-i18n";
import en from "@/locales/en";
import ar from "@/locales/ar";

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  en,
  ar,
};

export const i18n = new VueI18n({
  locale: "en", // set locale
  messages, // set locale messages
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#05453e",
        secondary: '#f4631b'
      },
    },
  },
  // rtl: true,
});
