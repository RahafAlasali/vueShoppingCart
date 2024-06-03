<template>
  <div>
    <v-dialog persistent v-model="show" max-width="500px" hide-overlay>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Product</span>
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
                    v-model="PrdEdite.title"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col class="py-0" cols="12" sm="6" md="6">
                  <v-select
                    dense
                    :items="categories"
                    v-model="PrdEdite.category"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    label="Category"
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="6">
                  <v-text-field
                    dense
                    type="number"
                    label="Price"
                    v-model="PrdEdite.price"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="12">
                  <v-textarea
                    outlined
                    label="Descriptiona"
                    v-model="PrdEdite.description"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog()">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text :loading="loading" @click="save()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["showDialog", "productEdit"],
  emits: ["colseDialog"],
  data() {
    return {
      loading: false,
      categories: null,
      valid: true,
      // product: this.productEdit,
      // show: this.showDialog,
      // title: null,
      // description: null,
    };
  },
  computed: {
    show() {
      return this.showDialog;
    },
    PrdEdite() {
      return this.productEdit;
    },
    id() {
      return this.productEdit.id;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("colseDialog");
    },
    save() {
      const validForm = this.$refs.form.validate();
      if (validForm) {
        this.loading = true;
        axios
          .put(`https://fakestoreapi.com/products/${this.id}`, this.PrdEdite, {
            Headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => console.log(res))
          .finally(() => {
            this.$emit("colseDialog");
            this.loading = false;
            this.$toast("Edit product successfully", {
              timeout: 1500,
              pauseOnHover: false,
            });
          });
      }
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return (this.categories = res.data);
      })
      .catch((e) => {});
  },
};
</script>
