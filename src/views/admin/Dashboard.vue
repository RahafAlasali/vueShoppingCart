<template>
  <v-row>
    <v-col cols="2">
      <SideBar />
    </v-col>
    <v-col cols="10">
      <div class="mx-2">
        <div class="text-h4">Products</div>

        <router-view></router-view>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import SideBar from "@/components/sidebar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
  computed: {
    ...mapState("auth", ["isLogin"]),
  },
};
</script>
