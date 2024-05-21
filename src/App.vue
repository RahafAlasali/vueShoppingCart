<template>
  <v-app>
    <nav-bar />
    <Slide v-if="$route.name != 'login'" />
    <!-- <v-container> -->
    <v-main>
      <router-view />
    </v-main>
    <!-- </v-container> -->
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/footer.vue";
import Slide from "@/components/slide.vue";
import router from "./router";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Slide,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2family=Poppins:wght@400;700&display=swap");
$body-font-family: "Poppins", sans-serif;

::-webkit-scrollbar {
  width: 10px;
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
</style>
