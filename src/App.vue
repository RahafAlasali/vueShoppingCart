<template>
  <div>
    <loader
      v-if="loadPage"
      object="#ff9633"
      color1="#ffffff"
      color2="#17fd3d"
      size="9"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="90"
      name="dots"
      disableScrolling="false"
    ></loader>

    <v-app>
      <router-view :key="$route.path" />
    </v-app>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["loadPage"]),
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
  background: #f9f9f9;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #05453e;
  border-radius: 2px;
}

.Vue-Toastification__toast--default {
  color: #05453e !important;
  background-color: white !important;
  z-index: 9999999;
}

.custom {
  color: #05453e !important;
  background-color: #fff !important;
}

.header-text {
  font-family: "Cormorant Garamond", serif !important ;
  font-style: italic;
  text-decoration: underline #f4631b;
  text-underline-offset: 12px;
}
.shape {
  height: 100%;
  background-color: #05453e;
  background-image: url(@/assets/head.jpg);
  background-size: cover;
}
.shape-left {
  clip-path: circle(75% at 80% 51%);
}
.shape-right {
  clip-path: circle(75% at 20% 51%);
}
</style>
