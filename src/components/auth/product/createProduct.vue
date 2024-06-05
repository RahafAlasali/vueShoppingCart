<template>
  <div>
    <v-dialog
      v-model="$props.showDialog"
      max-width="500px"
      hide-overlay
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Create Products</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-form
              @submit.prevent="save"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row>
                <v-col class="py-0" cols="12" sm="6" md="12">
                  <v-text-field
                    dense
                    label="Title"
                    v-model="product.title"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="6">
                  <v-select
                    dense
                    :items="categories"
                    v-model="product.category"
                    label="Category"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="6">
                  <v-text-field
                    dense
                    type="number"
                    label="Price"
                    v-model="product.price"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col class="py-0" cols="12" sm="6" md="12">
                  <v-textarea
                    outlined
                    label="Description"
                    v-model="product.description"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    hide-details
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="createProduct">
            Cancel
          </v-btn>
          <v-btn
            type="submit"
            color="blue darken-1"
            :loading="loading"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["showDialog"],
  emits: ["colseDialogCreate"],
  data() {
    return {
      product: {
        title: null,
        description: null,
        price: null,
        image: "https://i.pravatar.cc",
        category: null,
      },
      valid: true,
      loading: false,
    };
  },
  computed: {
    ...mapState("core", ["categories"]),
  },
  methods: {
    ...mapActions("core", ["addProduct", "getCategories"]),
    createProduct() {
      this.$emit("colseDialogCreate");
    },
    save() {
      const validForm = this.$refs.form.validate();
      if (validForm) {
        this.loading = true;
        this.addProduct(this.product);

        this.$emit("colseDialogCreate");
        this.loading = false;
        this.$refs.form.reset();
        this.$toast("Create product successfully", {
          timeout: 1500,
          pauseOnHover: false,
        });
      }
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
