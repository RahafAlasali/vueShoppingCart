<template>
  <div class="my-3">
    <Delete :showDialog="dialogDelete" @delete="deleteItem" />
    <edit-user
      :userEdit="userItem"
      :showDialog="dialog"
      @colseDialog="dialog = false"
    />
    <div class="text-h4 mb-2">Users</div>
    <v-data-table
      :headers="headers"
      :items="users"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :loading="loading"
      class="elevation-1"
      @page-count="pageCount = $event"
    >
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
import Delete from "@/components/auth/delete.vue";
import EditUser from "@/components/auth/user/editUser.vue";

export default {
  components: {
    Delete,
    EditUser,
  },
  data() {
    return {
      users: [],
      userItem: null,
      loading: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialog: false,
      dialogCreate: false,
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
      this.dialogDelete = false;
    },
    editItem(item) {
      // console.log(item);
      this.userItem = item;
      this.dialog = true;
    },
    async getProducts() {
      this.loading = true;
      await axios
        .get("https://fakestoreapi.com/users")
        .then((res) => {
          console.log(res.data);
          return (this.users = res.data);
        })
        .catch((e) => {});
      this.loading = false;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
