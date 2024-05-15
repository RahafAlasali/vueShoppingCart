<template>
  <div>
    <div class="mb-5 mt-8">
      <div class="">
        <div>
          <h2 class="my-4">category</h2>
        </div>
      </div>
      <div class="d-flex justify-space-around">
        <div
          class="pa-5 px-9 text-center"
          v-for="item in categories"
          :key="item.id"
        >
          <div><v-icon> mdi-cellphone</v-icon></div>
          <div class="my-1">{{ item }}</div>
        </div>
      </div>
    </div>

    <v-divider></v-divider>

    <div class="">
      <div>
        <h2 class="my-4">Products</h2>
      </div>
    </div>

    <div>
      <v-row>
        <v-col cols="3" v-for="(item, index) in data" :key="index">
          <product-item :item="item" />
        </v-col>
      </v-row>
    </div>
    <div class="text-center">
      <v-btn depressed dark color="primary"> view all products </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import productItem from "@/components/product.vue";

export default {
  name: "Home",
  components: { productItem },
  data() {
    return {
      data: [],
      categories: [],
    };
  },

  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        return (this.data = res.data);
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
