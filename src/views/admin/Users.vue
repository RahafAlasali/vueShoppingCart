<template>
  <div class="my-3">
    <v-dialog v-model="dialogDelete" max-width="500px">
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
    <div class="text-h4 mb-2">Users</div>
    <v-data-table
      :headers="headers"
      :items="users"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:item.actions>
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
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
      users: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialogDelete: false,
      headers: [
        { text: "Id", value: "id", align: "center" },
        { text: "First name", value: "name.firstname", align: "center" },
        { text: "Last name", value: "name.lastname", align: "center" },
        { text: "Email", value: "email", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    deleteItem() {
      this.dialogDelete = true;
    },

    async getProducts() {
      await axios
        .get("https://fakestoreapi.com/users")
        .then((res) => {
          console.log(res.data);
          return (this.users = res.data);
        })
        .catch((e) => {});
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
