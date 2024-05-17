<template>
  <div>
    <v-container>
      <div class="about text-h3 primary--text py-6 mx-auto" style="width: 60%">
        <div class="text-center" style="font-family: cursive">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          repellendus architecto quos nesciunt culpa
        </div>
      </div>
    </v-container>
    <v-parallax src="1.jpg"
      ><v-overlay :absolute="true"
        ><div class="text-h4 text-center">
          <div class="py-4" style="font-family: cursive">
            Explore Our Exquisite Bag Collection Now!
          </div>

          <div class="mt-8">
            <v-btn elevation="1" large outlined text>view collection</v-btn>
          </div>
        </div></v-overlay
      >
    </v-parallax>

    <gallary />
    <div class="py-5" style="background-color: #fafafa">
      <v-container>
        <div
          class="text-h3 text-center my-3 primary--text font-weight-bold"
          style="font-family: cursive"
        >
          gallary
        </div>

        <v-row class="mt-4">
          <v-col cols="3" v-for="(item, index) in data" :key="index">
            <product-item :item="item" />
          </v-col>
        </v-row>

        <!-- <v-btn
          depressed
          dark
          color="primary"
          @click="showAll"
          :disabled="AllPrd"
        >
          view all products
        </v-btn> -->
      </v-container>
    </div>
    <Category />
  </div>
</template>

<script>
import axios from "axios";
import productItem from "@/components/product.vue";
import gallary from "@/components/gallary.vue";
import Category from "@/components/category.vue";

export default {
  name: "Home",
  components: { productItem, gallary, Category },
  data() {
    return {
      data: [],
      categories: [],
      AllPrd: false,
    };
  },

  methods: {
    showAll() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          this.AllPrd = true;
          return (this.data = res.data);
        })
        .catch((e) => {});
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
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
