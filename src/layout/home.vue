<template>
  <div>
    <nav-bar />

    <Slide />

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
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/footer.vue";
import Slide from "@/components/slide.vue";
export default {
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
