<template>
  <div class="ma-4">
    <v-container class="mx-2">
      <v-row>
        <v-col cols="6">
          <v-img height="300px" contain :src="product.image"> </v-img
        ></v-col>
        <v-col cols="6">
          <div>
            <div>
              <h2 class="mb-4">{{ product.title }}</h2>
              <h4 class="mb-3 mt-2">${{ product.price }}</h4>
              <h3 class="mb-4 subtitle-1">{{ product.description }}</h3>
              <v-divider class="mb-3"></v-divider>
            </div>
            <div class="d-flex my-4">
              <v-btn class="mx-1" depressed dark color="primary">
                Buy Now
              </v-btn>
              <v-btn class="mx-1" icon tile outlined>
                <v-icon> mdi-cart </v-icon>
              </v-btn>
            </div>
            <v-card class="rounded-lg">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon> mdi-cart </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Free Delivery</v-list-item-title>
                    <v-list-item-subtitle>Enter your code</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon> mdi-cart </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Return Delivery</v-list-item-title>
                    <v-list-item-subtitle
                      >Free 30 days Delivery Returns
                      <span>Ditails</span></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import productItem from "@/components/product.vue";

import axios from "axios";

export default {
  components: {
    productItem,
  },
  data() {
    return {
      product: null,
      itemPrd: [
        {
          title: "John Hardy",
          price: 200,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
      ],
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return (this.product = res.data);
      })
      .catch((e) => {});
  },
};
</script>
