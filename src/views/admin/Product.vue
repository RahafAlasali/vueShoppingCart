<template>
  <div class="my-3">
    <v-data-table
      :headers="headers"
      :items="products"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:item.actions>
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon small> mdi-delete </v-icon>
      </template></v-data-table
    >
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        total-visible
        :length="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      headers: [
        { text: "id", value: "id", align: "center", class: "{color:'red'}" },
        { text: "title", value: "title", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    async getProducts() {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          return (this.products = res.data);
        })
        .catch((e) => {});
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
