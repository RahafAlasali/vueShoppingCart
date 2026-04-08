<template>
    <div>
        <v-dialog v-model="$props.showDialog" max-width="500px" hide-overlay persistent>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Create Category</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-form @submit.prevent="save" ref="form" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col class="py-0" cols="12">
                                    <v-text-field dense label="Name" v-model="category.name"
                                        :rules="[(v) => !!v || 'Field is required']" outlined></v-text-field>
                                </v-col>
                                <v-col class="py-0" cols="12">
                                    <v-textarea dense label="Description" v-model="category.description" rows="3"
                                        outlined></v-textarea>
                                </v-col>
                                <v-col class="py-0" cols="12">
                                    <v-text-field dense label="Image URL" v-model="category.image"
                                        outlined></v-text-field>
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
    },
    data() {
        return {
            valid: false,
            category: {
                name: "",
                description: "",
                image: "",
            },
        };
    },
    methods: {
        ...mapActions("core", ["addCategory"]),
        closeDialog() {
            this.$emit("colseDialogCreate");
            this.resetForm();
        },
        resetForm() {
            this.category = {
                name: "",
                description: "",
                image: "",
            };
            this.valid = false;
            if (this.$refs.form) {
                this.$refs.form.reset();
            }
        },
        save() {
            if (this.$refs.form.validate()) {
                this.addCategory({ ...this.category });
                this.$toast.success("Category created successfully");
                this.closeDialog();
            }
        },
    },
};
</script>