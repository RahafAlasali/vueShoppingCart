<template>
  <div>
    <v-container>
      <Product :isFilter="true" />
    </v-container>
  </div>
</template>

<script>
import Product from "@/components/productsList.vue";

export default {
  components: {
    Product,
  },
};
</script>
