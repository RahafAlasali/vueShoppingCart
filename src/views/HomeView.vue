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
import gallary from "@/components/gallary.vue";
import Category from "@/components/category.vue";
import Product from "@/components/productsList.vue";
import About from "@/components/about.vue";
import Section from "@/components/section.vue";

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
