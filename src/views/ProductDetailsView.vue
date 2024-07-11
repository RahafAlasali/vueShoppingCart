<template>
  <div>
    <img-prd :img="img" :overlay="overlay" @close="closed" />
    <v-container class="mx-2 my-4">
      <div class="d-flex justify-end">
        <v-breadcrumbs :items="itemsBrdCrm" large></v-breadcrumbs>
      </div>
      <v-row v-if="product">
        <v-col cols="12" sm="6" class="d-flex align-center justify-center">
          <div style="width: 400px">
            <zoom-on-hover :img-normal="product.image"></zoom-on-hover>
          </div>
          <!-- <div class="mx-7 px-3" style="max-width: 80%">
            <v-img height="300px" contain :src="product.image"> </v-img></div
        > -->
        </v-col>
        <v-col cols="12" sm="6">
          <div>
            <div>
              <h2 class="mb-4">{{ product.title }}</h2>
              <h4 class="mb-3 mt-2">
                {{ currency(product.price) }}
              </h4>
              <h3 class="mb-4 subtitle-1 prd-desc">
                {{ product.description }}
              </h3>
              <h3 class="mb-4 subtitle-1" style="font-weight: bold">
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
                  <v-icon
                    slot="append"
                    @click="
                      quantity == 20 ? quantity : (quantity = +quantity + 1)
                    "
                  >
                    mdi-plus
                  </v-icon>
                  <v-icon
                    slot="prepend-inner"
                    @click="
                      quantity == 1 ? quantity : (quantity = +quantity - 1)
                    "
                  >
                    mdi-minus
                  </v-icon>
                </v-text-field>
              </div>
              <div class="container">
                <button
                  class="checkout-btn"
                  style="background: primary"
                  @click="() => add(product)"
                >
                  <v-icon dark class="checkout-btn__icon">mdi-cart</v-icon>
                  <span class="checkout-btn__text"> {{ $t("addCart") }} </span>
                  <span class="checkout-btn__success">
                    <v-icon dark class="px-2">mdi-check</v-icon>
                    {{ $t("thankForOrder") }}
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
    <div class="my-5 py-5">
      <v-container>
        <v-tabs vertical :transition="false" :reverse-transition="false">
          <v-tab> {{ $t("description") }}</v-tab>
          <v-tab> {{ $t("review") }} </v-tab>
          <v-tab-item class="px-8" :transition="false">
            <v-card flat>
              <v-card-text>
                <div class="text-h6">
                  {{ product.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item class="px-8" :transition="false">
            <v-card flat>
              <v-form>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="form.name"
                      label="Name"
                      hide-details
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      hide-details
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-rating
                      color="primary"
                      background-color="primary"
                      hover
                      length="5"
                      size="30"
                      v-model="form.rate"
                    ></v-rating>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-container>
    </div>

    <div class="py-5" style="background-color: #fafafa">
      <v-container>
        <div
          class="text-sm-h3 my-3 primary--text font-weight-bold"
          style="font-family: cursive"
        >
          {{ $t("relatedProduct") }}
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
import { mapActions, mapMutations, mapState } from "vuex";
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
      prdId: null,
      quantity: 1,
      img: null,
      overlay: false,
      form: {
        rate: null,
        name: null,
        email: null,
      },
      array: [
        {
          icon: "mdi-van-utility",
          title: "Fast shipping",
          subtitle: "Get your product fast",
        },
        {
          icon: "mdi-cart",
          title: "Return Delivery",
          subtitle: "Free 30 days Delivery Returns",
        },
      ],
      itemsBrdCrm: [
        {
          text: this.$i18n.t("home"),
          disabled: false,
          href: "/",
        },
        {
          text: this.$i18n.t("product"),
          disabled: false,
          href: "",
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
          duration: 0.5,
          ease: "power4.in",
        })
        .to(".checkout-btn__icon", {
          x: 130,
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
      }, 4000);

      this.$toast.success("Added to cart");
    },
  },
  mounted() {
    this.prdId = this.$route.params.id;
    this.getProductById(this.prdId);
    this.getProductsRelated(this.prdId);

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
