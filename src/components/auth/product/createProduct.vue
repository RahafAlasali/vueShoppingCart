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
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    dense
                    label="Title"
                    v-model="product.title"
                    hide-details
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-select
                    dense
                    :items="categories"
                    v-model="product.category"
                    label="Category"
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-textarea
                    outlined
                    label="Description"
                    v-model="product.description"
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
import axios from "axios";
export default {
  props: ["showDialog"],
  emits: ["colseDialogCreate"],
  data() {
    return {
      product: {
        title: null,
        description: null,
        price: 13.5,
        image: "https://i.pravatar.cc",
        category: "electronic",
      },
      valid: true,
      loading: false,
      categories: null,
    };
  },
  methods: {
    createProduct() {
      this.$emit("colseDialogCreate");
    },
    save() {
      // this.$refs.form.validate();
      this.loading = true;
      axios
        .post("https://fakestoreapi.com/products", this.product, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res))
        .finally(() => {
          this.$emit("colseDialogCreate");
          this.loading = false;
        });
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
