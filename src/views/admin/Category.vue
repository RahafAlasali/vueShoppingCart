<template>
    <div class="my-3">
        <div class="text-h4 mb-2 primary--text" style="font-weight: bold">
            Categories
        </div>

        <create-category :showDialog="dialogCreate" @colseDialogCreate="dialogCreate = false" />

        <edit-category :category="catItem" :showDialog="dialog" @colseDialog="dialog = false" />
        <Delete :showDialog="dialogDelete" @delete="() => confirmDelete()" @colseDialog="dialogDelete = false" />

        <data-table @edit="editItem" @delete="deleteItem" @create="createItem" />
    </div>
</template>

<script>
import EditCategory from "@/components/auth/category/editCategory.vue";
import Delete from "@/components/auth/delete.vue";
import CreateCategory from "@/components/auth/category/createCategory.vue";
import DataTable from "@/components/auth/category/table.vue";
import { mapActions } from "vuex";

export default {
    name: "categories",
    components: {
        EditCategory,
        Delete,
        CreateCategory,
        DataTable,
    },
    data() {
        return {
            id: null,
            catItem: null,
            dialog: false,
            dialogDelete: false,
            dialogCreate: false,
        };
    },
    methods: {
        ...mapActions("core", ["deleteCategory"]),
        confirmDelete() {
            this.deleteCategory(this.id);
            this.$toast.success("Deleted successfully");
            this.dialogDelete = false;
        },
        editItem(item) {
            this.catItem = item;
            this.dialog = true;
        },
        deleteItem(id) {
            this.dialogDelete = true;
            this.id = id;
        },
        createItem() {
            this.dialogCreate = true;
        },
    },
};
</script>