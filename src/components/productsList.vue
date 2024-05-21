<template>
  <div>
    <div
      class="text-h3 text-center my-3 primary--text font-weight-bold"
      style="font-family: cursive"
    >
      {{ $t("product") }}
    </div>

    <div v-if="isFilter" class="my-3 d-flex justify-end">
      <div class="mx-3">
        <v-btn color="primary" outlined dark v-bind="attrs" @click="allPrd()">
          All
        </v-btn>
      </div>
      <v-menu left offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" outlined dark v-bind="attrs" v-on="on">
            Filter By
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
  </div>
</template>

<script>
import axios from "axios";
import productItem from "@/components/product.vue";
export default {
  components: {
    productItem,
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
        .get("https://fakestoreapi.com/products?limit=12")
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
      .get("https://fakestoreapi.com/products?limit=8")
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
