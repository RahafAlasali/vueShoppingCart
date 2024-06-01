<template>
  <div class="my-3">
    <create-product
      :showDialog="dialogCreate"
      @colseDialogCreate="dialogCreate = false"
    />
    <edit-product
      :productEdit="prodItem"
      :showDialog="dialog"
      @colseDialog="dialog = false"
    />
    <delete-product :showDialog="dialogDelete" @delete="deleteItem" />
    <div class="text-h4 mb-2">Products</div>

    <v-data-table
      :headers="headers"
      :items="products"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-3"
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <v-div class="d-flex justify-end pa-4">
          <v-btn
            color="primary"
            dark
            class="mb-2 pa-2"
            @click="dialogCreate = true"
          >
            New Item
          </v-btn>
        </v-div>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="dialogDelete = true"> mdi-delete </v-icon>
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
import EditProduct from "@/components/auth/product/editProduct.vue";
import DeleteProduct from "@/components/auth/delete.vue";
import CreateProduct from "@/components/auth/product/createProduct.vue";

export default {
  name: "products",
  components: {
    EditProduct,
    DeleteProduct,
    CreateProduct,
  },
  data() {
    return {
      products: [],
      prodItem: null,
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialog: false,
      dialogDelete: false,
      dialogCreate: false,
      title: null,
      description: null,
      headers: [
        { text: "id", value: "id", align: "center" },
        { text: "Title", value: "title", align: "center" },
        { text: "Price", value: "price", align: "center" },
        { text: "Category", value: "category", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  methods: {
    deleteItem() {
      this.dialogDelete = false;
    },
    editItem(item) {
      this.prodItem = item;
      this.dialog = true;
    },

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
