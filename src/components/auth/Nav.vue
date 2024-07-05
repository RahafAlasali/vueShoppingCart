<template>
  <div>
    <div class="d-flex mb-2">
      <div class="text-h5 grey--text">Welcome</div>
      <v-spacer></v-spacer>
      <v-text-field
        solo
        label="Search"
        class="mx-4"
        prepend-inner-icon="mdi-magnify"
        style="max-width: 200px"
        hide-details
        dense
      ></v-text-field>
      <v-btn class="mx-3" icon elevation="4"
        ><v-badge overlap content="2" value="2">
          <v-icon> mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs">
            <v-avatar size="40">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title>{{ $t("profile") }}</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link>
            <v-list-item-title @click="logout">{{
              $t("logOut")
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("auth", ["setLogin"]),
    logout() {
      console.log("log");
      this.setLogin(false);
      this.$toast.success("Logout");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>
