<template>
  <div>
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
        <v-icon small class="mr-2" @click="() => edit(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="() => Delete(item.id)"> mdi-delete </v-icon>
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
import { mapActions, mapState } from "vuex";

export default {
  emits: ["delete", "edit"],
  data() {
    return {
      headers: [
        { text: "id", value: "id", align: "center" },
        { text: "Title", value: "title", align: "center", width: "500px" },
        { text: "Price", value: "price", align: "center" },
        { text: "Category", value: "category", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      search: null,
      loading: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
    };
  },
  methods: {
    ...mapActions("core", ["getProducts", "deleteProduct"]),
    Delete(id) {
      this.$emit("delete", id);
    },
    edit(item) {
      this.$emit("edit", item);
    },
    async getProductsArray() {
      this.loading = true;
      await this.getProducts();
      this.loading = false;
    },
  },
  computed: {
    ...mapState("core", ["products"]),
  },
  mounted() {
    this.getProductsArray();
  },
};
</script>
