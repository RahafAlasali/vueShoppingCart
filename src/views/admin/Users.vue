<template>
  <div class="my-3">
    <div class="text-h4 mb-2" style="color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, #8fb9aac4, #05453e, #8fb9aac4, #05453e);font-weight: bold">Users</div>
    <Delete :showDialog="dialogDelete" @delete="() => confirmDelete()" @colseDialog="dialogDelete = false" />
    <edit-user :userEdit="userItem" :showDialog="dialog" @colseDialog="dialog = false" />

    <data-table @edit="editItem" @delete="deleteItem" />
  </div>
</template>

<script>
import Delete from "@/components/auth/delete.vue";
import EditUser from "@/components/auth/user/editUser.vue";
import dataTable from "@/components/auth/user/table.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Delete,
    EditUser,
    dataTable,
  },
  data() {
    return {
      userItem: null,
      dialog: false,
      dialogCreate: false,
      dialogDelete: false,
    };
  },

  methods: {
    ...mapActions("core", ["deleteUser"]),
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
      this.$toast.success("Deleted successfully");
      this.dialogDelete = false;
    },
  },
};
</script>
