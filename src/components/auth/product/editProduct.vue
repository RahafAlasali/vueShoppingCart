<template>
  <div>
    <v-dialog persistent v-model="showDialog" max-width="500px" hide-overlay>
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
                    v-model="prod.title"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col class="py-0" cols="12" sm="6" md="6">
                  <v-select
                    dense
                    :items="categories"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    label="Category"
                    v-model="prod.category"
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="6">
                  <v-text-field
                    dense
                    type="number"
                    label="Price"
                    v-model="prod.price"
                    :rules="[(v) => !!v || $t('fieldRequired')]"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="12">
                  <v-textarea
                    outlined
                    label="Descriptiona"
                    v-model="prod.description"
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
          <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "product-edit",
  props: {
    product: {
      type: Object,
    },
    showDialog: { type: Boolean, required: true },
  },
  emits: ["colseDialog"],
  data() {
    return {
      loading: false,
      valid: true,
      prod: {},
    };
  },

  computed: {
    ...mapState("core", ["categories"]),
  },
  watch: {
    product: {
      handler: function (newValue) {
        Object.assign(this.prod, newValue);
      },
    },
  },
  methods: {
    ...mapActions("core", ["getCategories", "editProduct"]),
    closeDialog() {
      this.$emit("colseDialog");
    },
    save() {
      const validForm = this.$refs.form.validate();
      if (validForm) {
        this.loading = true;
        const proEdit = {
          ...this.product,
          ...this.prod,
          // description: this.description,
          // category: this.category,
          // title: this.title,
          // price: this.price,
        };
        this.editProduct({ id: this.product.id, product: proEdit });
        this.$emit("colseDialog");
        this.loading = false;
        this.$toast.success("successfully");
      }
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
