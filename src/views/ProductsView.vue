<template>
  <div style="background-color: #f1eeea">
    <v-container>
      <Product :isFilter="true" />
    </v-container>
  </div>
</template>

<script>
import Product from "@/components/home/productsList.vue";

export default {
  components: {
    Product,
  },
};
</script>
