<template>
  <v-app>
    <nav-bar />
    <Slide />
    <v-container>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/footer.vue";
import Slide from "@/components/slide.vue";

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
