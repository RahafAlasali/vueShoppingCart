<template>
  <div style="background-color: #f1eeea">
    <v-container>
      <div class="d-flex justify-end">
        <v-breadcrumbs :items="itemsBrdCrm" large></v-breadcrumbs>
      </div>
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
  data() {
    return {
      itemsBrdCrm: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Products",
          disabled: false,
          href: "",
        },
      ],
    };
  },
};
</script>
