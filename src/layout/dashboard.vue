<template>
  <div>
    <v-row>
      <v-col cols="2">
        <SideBar />
      </v-col>
      <v-col cols="10">
        <v-container>
          <div class="d-flex mb-2">
            <div class="text-h5">Welcome</div>
            <v-spacer></v-spacer>
            <v-btn class="mx-1" icon small fab elevation="4"
              ><v-badge overlap content="2" value="2">
                <v-icon> mdi-bell</v-icon>
              </v-badge>
            </v-btn>
            <v-avatar size="43" class="mx-1">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>

          <v-divider class="py-2"></v-divider>
          <v-main>
            <router-view> </router-view>
          </v-main>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideBar from "@/components/auth/sidebar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>
