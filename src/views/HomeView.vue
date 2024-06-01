<template>
  <div>
    <gallary />
    <div style="background-color: #f1eeea">
      <v-container>
        <About />
      </v-container>
    </div>
    <Category />
    <div class="py-5" style="background-color: #f1eeea">
      <v-container>
        <Product :isFilter="false" />
      </v-container>
    </div>
    <Section />
  </div>
</template>

<script>
import axios from "axios";
import gallary from "@/components/home/gallary.vue";
import Category from "@/components/home/category.vue";
import Product from "@/components/home/productsList.vue";
import About from "@/components/home/about.vue";
import Section from "@/components/home/section.vue";

export default {
  name: "Home",
  components: { gallary, Category, Product, About, Section },
  data() {
    return {
      data: [],
      categories: [],
      AllPrd: false,
    };
  },
};
</script>
