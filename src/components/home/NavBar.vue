<template>
  <div>
    <div style="position: absolute; top: 0; width: 100%">
      <v-toolbar
        dark
        class="px-sm-4 primary--text text-uppercase"
        style="background: transparent"
      >
        <v-app-bar-nav-icon
          class="d-block d-md-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-h5">
          <router-link to="/" class="white--text" style="text-decoration: none">
            shopping
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-list class="d-md-flex d-none">
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
          :menu-props="{ bottom: true, offsetY: true }"
        >
        </v-select>
        <div class="mx-1">
          <router-link class="mx-1" v-if="!isLogin" :to="{ name: 'login' }">
            <v-btn icon small>
              <v-icon> mdi-account</v-icon>
            </v-btn></router-link
          >
          <v-menu
            v-else
            open-on-hover
            bottom
            offset-y
            origin="top center"
            transition="scale-transition"
          >
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

          <v-btn class="mx-1" icon small @click="drawerCart = !drawerCart"
            ><v-badge :content="quantity" :value="quantity" color="primary">
              <v-icon> mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </div>
      </v-toolbar>
    </div>
    <v-navigation-drawer
      width="400"
      class="text-uppercase pa-2"
      :class="{ 'd-none': !drawerCart }"
      v-model="drawerCart"
      absolute
      :right="!isRtl"
      temporary
      app
    >
      <Cart
        :items="shoppingCarts"
        :show="drawerCart"
        @close="drawerCart = false"
      />
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
      drawer: true,
      drawerCart: false,
      lang: ["ar", "en"],
      links: [
        { title: "home", to: "/" },
        { title: "shop", to: "/products" },
        { title: "contact" },
        { title: "about" },
      ],
    };
  },
  methods: {
    ...mapMutations("auth", ["setLogin"]),

    logout() {
      this.setLogin(false);
      this.$toast.success("Logout");
      localStorage.removeItem("token");
    },
  },
  computed: {
    ...mapState("cart", ["quantity", "shoppingCarts"]),
    ...mapState("auth", ["isLogin"]),
    isRtl() {
      return this.$i18n.locale == "ar";
    },
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

<style scoped>
.v-list .theme--light.v-sheet {
  background-color: transparent;
}
.theme--dark.v-list {
  background-color: transparent;
}
</style>
