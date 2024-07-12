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
        <Product />
      </v-container>
    </div>

    <Section />
    <Connect />
  </div>
</template>

<script>
import gallary from "@/components/home/gallary.vue";
import Category from "@/components/home/category.vue";
import Product from "@/components/home/productsList.vue";
import About from "@/components/home/about.vue";
import Section from "@/components/home/section.vue";
import Connect from "@/components/home/connect.vue";
export default {
  name: "Home",
  components: { gallary, Category, Product, About, Section, Connect },
  data() {
    return {
      data: [],
      categories: [],
      AllPrd: false,
    };
  },
};
</script>
