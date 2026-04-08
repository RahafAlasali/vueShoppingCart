<template>
    <div>
        <v-data-table :headers="headers" :items="categories" :page.sync="page" :items-per-page="itemsPerPage"
            hide-default-footer :loading="loading" class="elevation-3" @page-count="pageCount = $event"
            :search="search">
            <template v-slot:top>
                <div class="d-flex justify-space-between align-center pa-4">
                    <div>
                        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search" single-line
                            hide-details></v-text-field>
                    </div>
                    <div>
                        <v-btn color="primary" dark class="mb-2 pa-2" @click="Create">
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
        </v-data-table>
        <div class="text-center pt-2">
            <v-pagination v-model="page" total-visible :length="pageCount"></v-pagination>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    emits: ["delete", "edit", "create"],
    data() {
        return {
            headers: [
                { text: "id", value: "id", align: "center" },

                { text: "Name", value: "name", align: "center" },
                { text: "Description", value: "description", align: "center" },
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
        ...mapActions("core", ["getCategories", "deleteCategory"]),
        Delete(id) {
            this.$emit("delete", id);
        },
        edit(item) {
            this.$emit("edit", item);
        },
        Create() {
            this.$emit("create");
        },
        async getCategoriesArray() {
            this.loading = true;
            await this.getCategories();
            this.loading = false;
        },
    },
    computed: {
        ...mapState("core", ["categories"]),
    },
    mounted() {
        this.getCategoriesArray();
    },
};
</script>