<template>
  <div>
    <div
      class="text-h3 text-center my-3 primary--text font-weight-bold"
      style="font-family: cursive"
    >
      Product
    </div>

    <v-row class="mt-4">
      <v-col cols="3" v-for="(item, index) in products" :key="index">
        <product-item :item="item" />
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn depressed dark color="primary" :disabled="AllPrd">
        view all products
      </v-btn>
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
  props: ["items"],
  data() {
    return {
      products: "",
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((res) => {
        return (this.products = res.data);
      })
      .catch((e) => {});
  },
};
</script>
