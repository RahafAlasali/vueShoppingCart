<template>
  <div>
    <v-toolbar class="px-2 primary--text text-uppercase">
      <v-app-bar-nav-icon
        class="d-block d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h5">
        <router-link to="/" style="text-decoration: none">
          shopping
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-list color="" flat class="d-md-flex d-none">
        <v-list-item
          v-for="link in links"
          :ripple="false"
          link
          :to="link.to"
          :key="link.title"
        >
          <v-list-item-content
            ><v-list-item-title>
              {{ $t(link.title) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>

      <v-select
        hide-details="auto"
        dense
        outlined
        v-model="$i18n.locale"
        :items="lang"
        placeholder="language"
        style="max-width: 80px"
        class="d-md-flex d-none"
      >
      </v-select>

      <router-link to="/login">
        <v-btn icon> <v-icon> mdi-account</v-icon> </v-btn></router-link
      >
      <v-btn icon>
        <v-icon> mdi-cart</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      class="text-uppercase"
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list nav flat>
        <v-list-item
          link
          :to="link.to"
          v-for="(link, index) in links"
          :key="index"
          class="d-flex justify-center primary--text"
        >
          <v-list-item-content class="text-center font-weight-bold">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      lang: ["ar", "en"],
      links: [
        { title: "home", to: "/" },
        { title: "shop", to: "/products" },
        { title: "contact", to: "/" },
        { title: "about", to: "/" },
      ],
    };
  },
};
</script>

<style></style>
