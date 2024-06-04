<template>
  <div>
    <v-toolbar class="px-4 primary--text text-uppercase">
      <!-- <v-app-bar-nav-icon
        class="d-block d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon> -->
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
        <router-link class="mx-1" v-if="!isLogin" :to="{ name: 'login' }">
          <v-btn icon small>
            <v-icon> mdi-account</v-icon>
          </v-btn></router-link
        >
        <v-menu v-else open-on-hover bottom offset-y>
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
              <v-list-item-title @click="logout">log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- <v-btn class="mx-1" v-else icon small>
          <v-icon @click="logout"> mdi-logout</v-icon>
        </v-btn> -->
        <v-btn class="mx-1" icon small @click="drawerCart = !drawerCart"
          ><v-badge :content="quantity" :value="quantity" color="primary">
            <v-icon> mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </div>
    </v-toolbar>
    <v-navigation-drawer
      class="text-uppercase"
      style="max-width: 180px"
      v-model="drawer"
      absolute
      bottom
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
      <Cart :items="shoppingCarts" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Cart from "@/components/home/cart.vue";
export default {
  components: {
    Cart,
  },
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
  methods: {
    ...mapMutations("auth", ["setLogin"]),

    logout() {
      this.setLogin(false);
      this.$toast("Logout", {
        timeout: 1500,
        pauseOnHover: false,
      });
      localStorage.removeItem("token");
    },
  },
  computed: {
    ...mapState("cart", ["quantity", "shoppingCarts"]),
    ...mapState("auth", ["isLogin"]),
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