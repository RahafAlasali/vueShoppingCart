<template>
  <v-app>
    <nav-bar />

    <Slide v-if="$route.name != 'login'" />
    <!-- <v-container> -->
    <v-main>
      <router-view />
    </v-main>
    <!-- </v-container> -->
    <v-btn
      class="md-5 mr-3 elevation-21"
      dark
      fab
      button
      bottom
      right
      color="primary"
      fixed
      v-show="showGoToTop"
      v-scroll="onScroll"
      @click="top"
      ><v-icon> mdi-chevron-up</v-icon></v-btn
    >
    <Footer />
  </v-app>
</template>

<script>
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/footer.vue";
import Slide from "@/components/slide.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast);

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Slide,
  },
  data: () => ({
    offsetTop: 0,
  }),
  computed: {
    isRtl() {
      return this.$i18n.locale == "ar";
    },
    showGoToTop() {
      return this.offsetTop > 600;
    },
  },
  watch: {
    isRtl(value) {
      if (value) this.$vuetify.rtl = true;
      else this.$vuetify.rtl = false;
    },
  },
  methods: {
    onScroll(event) {
      this.offsetTop = event.target.scrollingElement.scrollTop;
    },
    top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
$body-font-family: "Poppins", sans-serif;

::-webkit-scrollbar {
  width: 9px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #616161;
  border-radius: 2px;
}
.Vue-Toastification__toast--default {
  color: #05453e !important;
  background-color: white !important;
  z-index: 9999999;
}
</style>
