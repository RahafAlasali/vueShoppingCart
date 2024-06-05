<template>
  <div>
    <img-prd :img="img" :overlay="overlay" @close="closed" />
    <v-container class="mx-2 my-4">
      <v-row v-if="product">
        <v-col cols="12" sm="6" class="d-flex align-center justify-center">
          <div class="mx-7 px-3" style="max-width: 80%">
            <v-img height="300px" contain :src="product.image"> </v-img></div
        ></v-col>
        <v-col cols="12" sm="6">
          <div>
            <div>
              <h2 class="mb-4">{{ product.title }}</h2>
              <h4 class="mb-3 mt-2">
                {{
                  product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                }}
              </h4>
              <h3 class="mb-4 subtitle-1">{{ product.description }}</h3>
              <h3 class="mb-4 subtitle-1">
                {{ $t("category") }} :
                <span class="primary--text">{{ product.category }}</span>
              </h3>

              <v-divider class="mb-3"></v-divider>
            </div>

            <div class="d-flex justify-start align-center my-4">
              <div class="d-flex mx-2 input-add">
                <v-text-field
                  dense
                  v-model="quantity"
                  hide-details
                  outlined
                  style="width: 110px"
                >
                  <v-icon slot="append" @click="quantity = +quantity + 1">
                    mdi-plus
                  </v-icon>
                  <v-icon
                    slot="prepend-inner"
                    @click="quantity = +quantity - 1"
                    :disabled="quantity == 1"
                  >
                    mdi-minus
                  </v-icon>
                </v-text-field>
              </div>
              <v-btn
                class="mx-1"
                depressed
                dark
                color="primary"
                @click="() => add(product)"
              >
                Add to cart
              </v-btn>
            </div>
            <v-card class="rounded-lg">
              <v-list>
                <v-list-item v-for="(item, index) in array" :key="index">
                  <v-list-item-avatar>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      item.subtitle
                    }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <!-- <v-divider></v-divider> -->
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
import productItem from "@/components/home/product.vue";
import ImgPrd from "@/components/home/imgPrd.vue";

import Loader from "@/components/home/loader.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    productItem,
    Loader,
    ImgPrd,
  },
  data() {
    return {
      prdId: this.$route.params.id,
      quantity: 1,
      img: null,
      overlay: false,
      array: [
        {
          icon: "mdi-cart",
          title: "Return Delivery",
          subtitle: "Free 30 days Delivery Returns",
        },
        {
          icon: "mdi-cart",
          title: "Return Delivery",
          subtitle: "Free 30 days Delivery Returns",
        },
      ],
    };
  },
  computed: {
    ...mapState("cart", ["shoppingCarts"]),
    ...mapState("core", ["product", "prdRelated"]),
    items() {
      return this.prdRelated.filter((item) => item.id != this.prdId);
    },
  },

  methods: {
    ...mapActions("cart", ["addItemToCart"]),
    ...mapActions("core", ["getProductById", "getProductsRelated"]),
    showPrd(imgP) {
      this.img = imgP;
      this.overlay = !this.overlay;
    },
    closed() {
      this.overlay = false;
    },
    add(item) {
      this.addItemToCart({ item, quantity: +this.quantity });

      this.$toast.info("Added to cart successfully");
    },
  },
  mounted() {
    this.getProductById(this.prdId);
    this.getProductsRelated(this.prdId);
  },
};
</script>

<style>
.input-add .v-text-field__slot input {
  text-align: center !important;
}
</style>
