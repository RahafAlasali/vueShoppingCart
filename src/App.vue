<template>
  <v-app>
    <nav-bar />
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
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
