<template>
  <div>
    <v-container>
      <About />
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
        <Product :items="data" />
      </v-container>
    </div>
    <Category />
  </div>
</template>

<script>
import axios from "axios";
import gallary from "@/components/gallary.vue";
import Category from "@/components/category.vue";
import Product from "@/components/productsList.vue";
import About from "@/components/about.vue";

export default {
  name: "Home",
  components: { gallary, Category, Product, About },
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
