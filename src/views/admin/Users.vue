<template>
  <div class="my-3">
    <Delete
      :showDialog="dialogDelete"
      @delete="() => confirmDelete()"
      @colseDialog="dialogDelete = false"
    />
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
      :search="search"
    >
      <template v-slot:top>
        <div class="d-flex justify-start pa-4">
          <div>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </div>
        </div>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
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
import Delete from "@/components/auth/delete.vue";
import EditUser from "@/components/auth/user/editUser.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Delete,
    EditUser,
  },
  data() {
    return {
      userItem: null,
      loading: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialog: false,
      dialogCreate: false,
      dialogDelete: false,
      search: null,
      headers: [
        { text: "Id", value: "id", align: "center" },
        { text: "First name", value: "name.firstname", align: "center" },
        { text: "Last name", value: "name.lastname", align: "center" },
        { text: "Email", value: "email", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapState("core", ["users"]),
  },
  methods: {
    ...mapActions("core", ["getUsers", "deleteUser"]),
    deleteItem(id) {
      this.dialogDelete = true;
      this.id = id;
    },
    editItem(item) {
      this.userItem = item;
      this.dialog = true;
    },
    confirmDelete() {
      this.deleteUser(this.id);
      this.$toast.info("User delete successfully");
      this.dialogDelete = false;
    },
    async getProducts() {
      this.loading = true;
      await this.getUsers();
      this.loading = false;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
