import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import VueI18n from "vue-i18n";

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  en: {
    intro: {
      title: "Title Intro Shopping",
    },
  },
  ar: {
    intro: {
      title: "التسوق",
    },
  },
};

export const i18n = new VueI18n({
  locale: "en", // set locale
  messages, // set locale messages
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#025048",
      },
    },
  },
  // rtl: true,
});
