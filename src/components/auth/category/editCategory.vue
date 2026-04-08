<template>
    <div>
        <v-dialog persistent v-model="showDialog" max-width="500px" hide-overlay>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Edit Category</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form @submit.prevent="save" ref="form" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col class="py-0" cols="12">
                                    <v-text-field dense label="Name" v-model="cat.name"
                                        :rules="[(v) => !!v || 'Field is required']" outlined></v-text-field>
                                </v-col>

                                <v-col class="py-0" cols="12">
                                    <v-textarea dense label="Description" v-model="cat.description" rows="3"
                                        outlined></v-textarea>
                                </v-col>
                                <v-col class="py-0" cols="12">
                                    <v-text-field dense label="Image URL" v-model="cat.image" outlined></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="closeDialog">Cancel</v-btn>
                    <v-btn color="primary" type="submit" @click="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    props: {
        showDialog: {
            type: Boolean,
            required: true,
        },
        category: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            valid: false,
            cat: {
                name: "",
                description: "",
                image: "",
            },
        };
    },
    watch: {
        category: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.cat = { ...newVal };
                }
            },
        },
    },
    methods: {
        ...mapActions("core", ["updateCategory"]),
        closeDialog() {
            this.$emit("colseDialog");
        },
        save() {
            if (this.$refs.form.validate()) {
                this.updateCategory({ ...this.cat });
                this.$toast.success("Category updated successfully");
                this.closeDialog();
            }
        },
    },
};
</script>