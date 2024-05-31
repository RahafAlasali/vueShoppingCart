<template>
  <div class="my-3">
    <v-dialog v-model="dialogDelete" max-width="500px" hide-overlay>
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogDelete = false"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialogDelete = false"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCreate" max-width="500px" hide-overlay>
      <v-card>
        <v-card-title>
          <span class="text-h5">Create Products</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field dense label="title" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field dense label="description" outlined></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogCreate = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialogCreate = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <edit-product
      :productEdit="prodItem"
      :showDialog="dialog"
      @colseDialog="dialog = false"
    />
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
        <v-icon small @click="deleteItem()"> mdi-delete </v-icon>
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
import EditProduct from "@/components/auth/editProduct.vue";

export default {
  name: "products",
  components: {
    EditProduct,
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
      this.dialogDelete = true;
    },
    editItem(item) {
      console.log(item);
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
