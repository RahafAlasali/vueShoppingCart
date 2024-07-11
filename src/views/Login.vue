<template>
  <div>
    <v-row class="align-center" style="height: 100vh">
      <v-col cols="2" md="4" class="offset-md-2 px-9">
        <v-container>
          <Login />
        </v-container>
      </v-col>
      <v-col cols="7" md="6" style="height: 100%">
        <div class="shape" :class="isRtl ? 'shape-right' : 'shape-left'"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "@/components/home/login.vue";

export default {
  components: {
    Login,
  },
  computed: {
    isRtl() {
      return this.$i18n.locale == "ar";
    },
  },
};
</script>
<style >
/* color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, #8fb9aac4, #05453e, #8fb9aac4, #05453e);
 */
</style>
