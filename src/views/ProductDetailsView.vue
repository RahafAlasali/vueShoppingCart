<template>
  <div>
    <img-prd :img="img" :overlay="overlay" @close="closed" />
    <v-container class="mx-2 my-4">
      <v-row v-if="product">
        <v-col cols="12" sm="6" class="d-flex align-center justify-center">
          <div class="mx-7 px-3">
            <v-img height="300px" contain :src="product.image"> </v-img></div
        ></v-col>
        <v-col cols="12" sm="6">
          <div>
            <div>
              <h2 class="mb-4">{{ product.title }}</h2>
              <h4 class="mb-3 mt-2">${{ product.price }}</h4>
              <h3 class="mb-4 subtitle-1">{{ product.description }}</h3>
              <h3 class="mb-4 subtitle-1">
                {{ $t("category") }} :
                <span class="primary--text">{{ product.category }}</span>
              </h3>

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
      <div v-else class="text-center my-auto" style="min-height: 400px">
        <Loader />
      </div>
    </v-container>
    <div class="py-5" style="background-color: #fafafa">
      <v-container>
        <div
          class="text-sm-h3 my-3 primary--text font-weight-bold"
          style="font-family: cursive"
        >
          Related Product
        </div>

        <!-- <v-row class="mt-4">
          <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="(item, index) in items"
            :key="index"
          >
            <product-item :item="item" />
          </v-col>
        </v-row> -->
        <div>
          <v-slide-group show-arrows>
            <v-slide-item v-for="(item, index) in items" :key="index">
              <v-card
                flat
                color="transparent"
                :height="500"
                class="mx-3 my-2"
                max-width="212"
              >
                <product-item :item="item" @viewPrd="showPrd" />
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import productItem from "@/components/product.vue";
import ImgPrd from "@/components/imgPrd.vue";
import axios from "axios";
import Loader from "@/components/loader.vue";

export default {
  components: {
    productItem,
    Loader,
    ImgPrd,
  },
  data() {
    return {
      product: null,
      items: [],
      img: null,
      overlay: false,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return (this.product = res.data);
      })
      .then((res) => {
        axios
          .get(`https://fakestoreapi.com/products/category/${res.category}`)
          .then((res) => {
            return (this.items = res.data);
          })
          .catch((e) => {});
      });
  },
  methods: {
    showPrd(imgP) {
      this.img = imgP;
      this.overlay = !this.overlay;
    },
    closed() {
      this.overlay = false;
    },
  },
};
</script>
