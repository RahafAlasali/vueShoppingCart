<template>
  <div class="pb-7">
    <img-prd :img="img" :overlay="overlay" @close="closed" />
    <div class="text-h3 text-center my-3 pb-6 primary--text font-weight-bold" style="
        font-family: 'Cormorant Garamond', serif !important ;
        font-style: italic;
        text-decoration: underline #ff9633; text-underline-offset: 10px;
      " data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400">
      {{ $t("product") }}
    </div>

    <div v-if="isFilter" class="my-3 py-2 d-flex justify-start ml-4">
      <div class="mx-3">
        <v-btn color="primary" dark @click="filterBycat('all')">
          {{ $t("all") }}
        </v-btn>
      </div>
      <v-menu bottom offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon class="px-1 white--text"> mdi-filter-variant </v-icon>
            {{ $t("filterBy") }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item link v-for="(item, index) in categories " :key="index" class="item-filter">
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
      <v-slide-group show-arrows class="slider slide-style" center-active>
        <v-slide-item v-for="(item, index) in productsFilter" :key="index" v-slot="{ toggle }">
          <v-card flat color="transparent" :max-height="400" class="mx-3 my-2" max-width="212" :ripple="false"
            @click="toggle">
            <product-item :item="item" @viewPrd="showPrd" />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
import productItem from "@/components/home/product.vue";
import Loader from "@/components/home/loader.vue";
import ImgPrd from "@/components/home/imgPrd.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    productItem,
    Loader,
    ImgPrd,
  },
  props: ["items", "isFilter"],
  // type , required

  data() {
    return {
      overlay: false,
      img: null,
      offset: true,
      filter: null,
    };
  },

  computed: {
    ...mapState("core", ["products", "categories"]),
    productsFilter() {
      return this.filter
        ? this.products.filter((prd) => prd.category == this.filter)
        : this.products;
    },
  },
  methods: {
    ...mapActions("core", ["getProducts", "getCategories"]),
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
      this.filterBycat(this.$route.query.cat);
    }
    this.getProducts();
    this.getCategories();
  },
};
</script>

<style>
.v-slide-group__prev .v-icon.v-icon,
.v-slide-group__next .v-icon.v-icon {
  font-size: 40px !important;
}

.v-slide-group__prev,
.v-slide-group__next {
  min-width: 40px !important;
}

.slide-style .mdi-chevron-left,
.slide-style .mdi-chevron-right {
  border-radius: 50%;
  color: white !important;
  background-color: #05453e;
}

.theme--light.v-icon.v-icon.v-icon--disabled {
  color: white !important;
}

.item-filter:hover {
  background-color: #05453e;
  color: #FFF !important
}
</style>
<style scoped>
.v-list-item:hover {
  background-color: #05453e;
  color: #FFF !important
}
</style>
