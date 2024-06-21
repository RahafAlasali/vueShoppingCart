<template>
  <div class="my-3">
    <create-product
      :showDialog="dialogCreate"
      @colseDialogCreate="dialogCreate = false"
    />

    <edit-product
      :product="prodItem"
      :showDialog="dialog"
      @colseDialog="dialog = false"
    />
    <Delete
      :showDialog="dialogDelete"
      @delete="() => confirmDelete()"
      @colseDialog="dialogDelete = false"
    />
    <div class="text-h4 mb-2">Products</div>

    <v-data-table
      :headers="headers"
      :items="products"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :loading="loading"
      class="elevation-3"
      @page-count="pageCount = $event"
      :search="search"
    >
      <template v-slot:top>
        <div class="d-flex justify-space-between align-center pa-4">
          <div>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </div>
          <div>
            <v-btn
              color="primary"
              dark
              class="mb-2 pa-2"
              @click="dialogCreate = true"
            >
              Add
            </v-btn>
          </div>
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="() => deleteItem(item.id)"> mdi-delete </v-icon>
      </template>
      <template v-slot:item.category="{ item }">
        <v-chip class="primary--text" style="background: #69a49e8a" dark>
          {{ item.category }}
        </v-chip>
      </template>
    </v-data-table>
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
import EditProduct from "@/components/auth/product/editProduct.vue";
import Delete from "@/components/auth/delete.vue";
import CreateProduct from "@/components/auth/product/createProduct.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "products",
  components: {
    EditProduct,
    Delete,
    CreateProduct,
  },
  data() {
    return {
      id: null,
      prodItem: null,
      loading: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialog: false,
      dialogDelete: false,
      dialogCreate: false,
      title: null,
      description: null,
      search: null,
      headers: [
        { text: "id", value: "id", align: "center" },
        { text: "Title", value: "title", align: "center", width: "500px" },
        { text: "Price", value: "price", align: "center" },
        { text: "Category", value: "category", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapState("core", ["products"]),
  },
  methods: {
    ...mapActions("core", ["getProducts", "deleteProduct"]),
    deleteItem(id) {
      this.dialogDelete = true;
      this.id = id;
    },
    editItem(item) {
      this.prodItem = item;
      console.log(this.prodItem, "item item");
      this.dialog = true;
    },
    confirmDelete() {
      this.deleteProduct(this.id);
      this.$toast.info(" product delete successfully");

      this.dialogDelete = false;
    },
    async getProductsArray() {
      this.loading = true;
      await this.getProducts();
      this.loading = false;
    },
  },
  mounted() {
    this.getProductsArray();
  },
};
</script>
