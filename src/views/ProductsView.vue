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
          text: this.$i18n.t("home"),
          disabled: false,
          href: "/",
        },
        {
          text: this.$i18n.t("product"),
          disabled: false,
          href: "",
        },
      ],
    };
  },
};
</script>
