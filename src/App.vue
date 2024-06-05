<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
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
