<template>
  <div>
    <v-row>
      <v-col cols="3">
        <SideBar />
      </v-col>
      <v-col cols="9">
        <v-main>
          <router-view> </router-view>
        </v-main>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>
