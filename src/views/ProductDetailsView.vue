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
              <!-- <v-btn
                class="mx-1 add-cart"
                depressed
                dark
                color="primary"
                @click="() => add(product)"
              >
                Add to cart
              </v-btn> -->
              <div class="container">
                <button class="checkout-btn" @click="() => add(product)">
                  <v-icon class="checkout-btn__icon" dark>mdi-cart</v-icon>
                  <span class="checkout-btn__text"> Add to cart </span>
                  <span class="checkout-btn__success">
                    <v-icon dark>mdi-check</v-icon>
                    Thank you for your order!
                  </span>
                </button>
              </div>
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
import { gsap } from "gsap";

export default {
  components: {
    productItem,
    Loader,
    ImgPrd,
  },
  data() {
    return {
      checkoutTL: null,
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

      this.checkoutTL
        .to(".checkout-btn__text", {
          opacity: 0,
          duration: 0.75,
          ease: "power4.in",
        })
        .to(".checkout-btn__icon", {
          x: 150,
          delay: 0.25,
          duration: 0.75,
          opacity: 0,
          ease: "back.in(1.7)",
        })
        .to(".checkout-btn", {
          background: "#27ae60",
          ease: "power4.out",
          width: 300,
        })
        .to(".checkout-btn__success", {
          opacity: 1,
          ease: "power4.out",
          delay: 0.25,
        });

      this.checkoutTL.play();

      setTimeout(() => {
        this.checkoutTL.restart();
        this.checkoutTL.pause();
      }, 6000);

      this.$toast.info("Added to cart successfully");
    },
  },
  mounted() {
    this.getProductById(this.prdId);
    this.getProductsRelated(this.prdId);
    // const checkoutBtns = document.querySelectorAll(".checkout-btn");

    this.checkoutTL = new gsap.timeline({
      paused: true,
    });
  },
};
</script>

<style lang="scss">
.input-add .v-text-field__slot input {
  text-align: center !important;
}
.checkout-btn {
  cursor: pointer;
  position: relative;
  background: #05453e;
  width: 140px;
  color: white;
  border: none;
  border-radius: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem 1rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  &:hover {
    background: darken(#05453e, 10%);
  }
  &__success,
  &__failure {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    span {
      margin-right: 0.5rem;
    }
  }
}
</style>
