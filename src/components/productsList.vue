<template>
  <div class="pb-7">
    <v-overlay :value="overlay" z-index="999999">
      <div
        class="pa-4"
        style="max-width: 300px; max-height: 300px; position: relative"
      >
        <v-btn
          fab
          dark
          x-small
          color="white"
          @click="closed"
          style="top: 0; right: 0; position: absolute; z-index: 99999"
        >
          <v-icon class="black--text"> mdi-close</v-icon>
        </v-btn>
        <v-img :src="img" contain>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="red"
                size="70"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </v-overlay>
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
        <v-btn color="primary" outlined dark @click="filterBy('all')">
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
          <v-list-item link v-for="(item, index) in categories" :key="index">
            <v-list-item-title @click="() => filterBy(item)">{{
              item
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div v-if="!products" class="text-center my-auto" style="min-height: 400px">
      <Loader />
    </div>

    <div class="mb-7">
      <v-slide-group show-arrows class="slider" center-active>
        <v-slide-item
          v-for="(item, index) in productsFilter"
          :key="index"
          v-slot="{ toggle }"
        >
          <v-card
            flat
            color="transparent"
            :max-height="400"
            class="mx-3 my-2"
            max-width="212"
            @click="toggle"
          >
            <product-item :item="item" @viewPrd="showPrd" />
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
      overlay: false,
      img: null,
      offset: true,
      filter: null,
      products: [],
      categories: [],
    };
  },

  computed: {
    productsFilter() {
      return this.filter
        ? this.products.filter((prd) => prd.category == this.filter)
        : this.products;
    },
  },
  methods: {
    filterBy(item) {
      item == "all" ? (this.filter = null) : (this.filter = item);
    },
    showPrd(imgP) {
      this.img = imgP;
      this.overlay = !this.overlay;
    },
    closed() {
      this.overlay = false;
    },
  },
  mounted() {
    if (this.$route.query.cat) {
      this.filterBy(this.$route.query.cat);
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
