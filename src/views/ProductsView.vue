<template>
  <div style="background-color: #f1eeea">
    <v-container>
      <div class="d-flex justify-end">
        <v-breadcrumbs :items="itemsBrdCrm" large>
          <!-- <template v-slot:item="{ item }">
            <v-icon class="black--text" dark> {{ item.icon }}</v-icon>
          </template> -->
        </v-breadcrumbs>
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
          // icon: "mdi-home"
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
