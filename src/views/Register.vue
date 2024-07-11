<template>
  <div>
    <v-row class="align-center" style="height: 100vh">
      <v-col cols="10" md="4" class="offset-md-2">
        <div class="pa-4">
          <v-container>
            <Register />
          </v-container>
        </div>
      </v-col>

      <v-col cols="7" md="6" style="height: 100%">
        <div class="shape" :class="isRtl ? 'shape-right' : 'shape-left'"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Register from "@/components/home/register.vue";
export default {
  components: {
    Register,
  },
  computed: {
    isRtl() {
      return this.$i18n.locale == "ar";
    },
  },
};
</script>
