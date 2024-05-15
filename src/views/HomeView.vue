<template>
  <div>
    <!-- <div calss="">
      <v-row>
        <v-col cols="3">
          <v-list dense v-for="item in categories" :key="item">
            <v-list-item class="my-0 py-0">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="8" class="mx-1">
          <v-carousel
            height="400"
            show-arrows="hover"
            cycle
            hide-delimiter-background
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                  <div class="text-h2">{{ slide }} Slide</div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel></v-col
        >
      </v-row>
    </div> -->
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
          style="
            border: 1.5px solid #cdcdcd;
            border-radius: 5px;
            min-width: 90px;
          "
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
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
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
