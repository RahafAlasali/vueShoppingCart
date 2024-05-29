<template>
  <div class="pb-7">
    <img-prd :img="img" :overlay="overlay" @close="closed" />
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
            <v-list-item-title @click="() => filterBycat(item)">{{
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

import ImgPrd from "@/components/imgPrd.vue";

export default {
  components: {
    productItem,
    Loader,
    ImgPrd,
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
    filterBycat(item) {
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
