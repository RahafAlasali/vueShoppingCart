<template>
  <div>
    <!-- {{ shoppingCarts }} -->
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
              <v-btn
                class="mx-1"
                icon
                tile
                outlined
                @click="() => incrementItem(product.id)"
              >
                <v-icon> mdi-plus </v-icon>
              </v-btn>
              <v-btn
                class="mx-1"
                icon
                tile
                outlined
                @click="() => decreaseItem(product.id)"
              >
                <v-icon> mdi-minus </v-icon>
              </v-btn>
              <v-btn
                class="mx-1"
                depressed
                dark
                color="primary"
                @click="() => add(product.id)"
              >
                Buy Now
              </v-btn>
              <v-btn class="mx-1" icon tile outlined>
                <v-icon> mdi-cart </v-icon>
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
import productItem from "@/components/product.vue";
import ImgPrd from "@/components/imgPrd.vue";
import axios from "axios";
import Loader from "@/components/loader.vue";
import { mapActions, mapState } from "vuex";

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
    ...mapActions("cart", ["addItemToCart", "increment", "decrease"]),
    showPrd(imgP) {
      this.img = imgP;
      this.overlay = !this.overlay;
    },
    closed() {
      this.overlay = false;
    },
    add(id) {
      this.addItemToCart(id);
      this.$toast("Added to cart successfully", {
        timeout: 1500,
        pauseOnHover: false,
      });
    },
    incrementItem(id) {
      this.increment(id);
      this.$toast("Added to cart successfully", {
        timeout: 1500,
        pauseOnHover: false,
      });
    },
    decreaseItem(id) {
      this.decrease(id);
      this.$toast("Added to cart successfully", {
        timeout: 1500,
        pauseOnHover: false,
      });
    },
  },
};
</script>
