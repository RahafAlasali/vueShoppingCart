<template>
  <div>
    <v-toolbar class="px-4 primary--text text-uppercase">
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
      <div class="mx-1">
        <router-link to="/login">
          <v-btn icon small>
            <v-icon> mdi-account</v-icon>
          </v-btn></router-link
        >

        <v-btn icon small @click="drawerCart = !drawerCart"
          ><v-badge :content="quantity" :value="quantity" color="primary">
            <v-icon> mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </div>
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
    <v-navigation-drawer
      width="350"
      class="text-uppercase pa-2"
      v-model="drawerCart"
      absolute
      bottom
      right
      temporary
    >
      <v-list nav flat>
        <v-subheader class="text-h6 my-3 font-weight-bold"
          >My cart
        </v-subheader>
        <v-list-item
          class="py-2"
          v-for="(item, index) in shoppingCarts"
          :key="index"
        >
          <div style="width: 100px; height: 100px">
            <v-img width="100%" height="100%" contain :src="item.image"></v-img>
          </div>
          <v-list-item-content class="font-weight-bold mx-1">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle
              >${{ item.price }} X{{ item.quantity }}</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon> mdi-close </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <v-divider class="mx-auto" style="width: 80%"></v-divider>
      <v-container>
        <div class="d-flex justify-space-between my-4 mx-1 align-center">
          <div class="text-h6">Subtotal</div>
          <div>${{ totalPrd }}</div>
        </div>
      </v-container>
      <div class="py-7 mx-auto" style="width: 90%">
        <v-btn dark color="primary" block class="my-2"> checkout </v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      drawerCart: false,
      lang: ["ar", "en"],
      links: [
        { title: "home", to: "/" },
        { title: "shop", to: "/products" },
        { title: "contact", to: "/" },
        { title: "about", to: "/" },
      ],
    };
  },
  computed: {
    ...mapState("cart", ["quantity", "shoppingCarts", "products", "total"]),

    totalPrd() {
      return this.shoppingCarts
        .map((item) => {
          return item.price * item.quantity;
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);
    },
  },
};
</script>

<style></style>
