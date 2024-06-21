<template>
  <div class="my-3">
    <div class="text-h4 mb-2">Products</div>
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

    <data-table @edit="editItem" @delete="deleteItem" />
  </div>
</template>

<script>
import EditProduct from "@/components/auth/product/editProduct.vue";
import Delete from "@/components/auth/delete.vue";
import CreateProduct from "@/components/auth/product/createProduct.vue";
import DataTable from "@/components/auth/product/table.vue";
import { mapActions } from "vuex";

export default {
  name: "products",
  components: {
    EditProduct,
    Delete,
    CreateProduct,
    DataTable,
  },
  data() {
    return {
      id: null,
      prodItem: null,
      dialog: false,
      dialogDelete: false,
      dialogCreate: false,
    };
  },
  methods: {
    ...mapActions("core", ["deleteProduct"]),
    confirmDelete() {
      this.deleteProduct(this.id);
      this.$toast.success(" product delete successfully");
      this.dialogDelete = false;
    },
    editItem(item) {
      this.prodItem = item;
      this.dialog = true;
    },
    deleteItem(id) {
      this.dialogDelete = true;
      this.id = id;
    },
  },
};
</script>
