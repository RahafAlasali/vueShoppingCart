<template>
  <div>
    <div
      class="text-h3 text-center my-3 primary--text font-weight-bold"
      style="
        font-family: 'Cormorant Garamond', serif !important ;
        font-style: italic;
      "
    >
      {{ $t("product") }}
    </div>

    <div v-if="isFilter" class="my-3 py-2 d-flex justify-start ml-4">
      <div class="mx-3">
        <v-btn color="primary" outlined dark v-bind="attrs" @click="allPrd()">
          {{ $t("all") }}
        </v-btn>
      </div>
      <v-menu left offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" outlined dark v-bind="attrs" v-on="on">
            {{ $t("filterBy") }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in categories" :key="index">
            <v-list-item-title @click="() => filter(item)">{{
              item
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <!--
    <v-row class="mt-4">
      <v-col
        cols="12"
        md="4"
        sm="6"
        v-for="(item, index) in products"
        :key="index"
      >
        <product-item :item="item" />
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn depressed dark color="primary"> view all products </v-btn>
    </div>
    -->
    <div v-if="!products" class="text-center my-auto" style="min-height: 400px">
      <Loader />
    </div>
    <div>
      <v-slide-group show-arrows class="slider" center-active>
        <v-slide-item
          v-for="(item, index) in products"
          :key="index"
          v-slot="{ toggle }"
        >
          <v-card
            flat
            color="transparent"
            :height="500"
            class="mx-3 my-2"
            max-width="212"
            @click="toggle"
          >
            <product-item :item="item" />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import productItem from "@/components/product.vue";
import Loader from "@/components/loader.vue";
export default {
  components: {
    productItem,
    Loader,
  },
  props: ["items", "isFilter"],
  data() {
    return {
      offset: true,
      products: "",
      productsFilter: [],
      categories: [],
    };
  },

  methods: {
    filter(item) {
      axios
        .get(`https://fakestoreapi.com/products/category/${item}`)
        .then((res) => {
          return (this.products = res.data);
        })
        .catch((e) => {});
    },
    allPrd() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          return (this.products = res.data);
        })
        .catch((e) => {});
    },
  },
  mounted() {
    if (this.$route.query.cat) {
      this.filter(this.$route.query.cat);
    }
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        return (this.products = res.data);
      })
      .catch((e) => {});
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return (this.categories = res.data);
      })
      .catch((e) => {});
  },
};
</script>

<style>
.v-slide-group__prev .v-icon.v-icon,
.v-slide-group__next .v-icon.v-icon {
  font-size: 50px !important;
}
.v-slide-group__prev,
.v-slide-group__next {
  min-width: 40px !important;
}
</style>
