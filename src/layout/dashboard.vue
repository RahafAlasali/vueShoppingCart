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
            <v-btn class="mx-3" icon elevation="4"
              ><v-badge overlap content="2" value="2">
                <v-icon> mdi-bell</v-icon>
              </v-badge>
            </v-btn>
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on="on" v-bind="attrs">
                  <v-avatar size="40">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                </v-btn>
              </template>

              <v-list>
                <v-list-item link>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link>
                  <v-list-item-title>log out</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <v-divider class="px-2"></v-divider>
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
