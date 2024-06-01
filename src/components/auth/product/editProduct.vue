<template>
  <div>
    <v-dialog persistent v-model="show" max-width="500px" hide-overlay>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Product</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  dense
                  label="Title"
                  v-model="PrdEdite.title"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-textarea
                  outlined
                  label="Descriptiona"
                  v-model="PrdEdite.description"
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>
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
import axios from "axios";
export default {
  props: ["showDialog", "productEdit"],
  emits: ["colseDialog"],
  data() {
    return {
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
  },
  methods: {
    closeDialog() {
      this.$emit("colseDialog");
    },
    save() {
      axios
        .put("https://fakestoreapi.com/products/8", this.PrdEdite, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res))
        .finally(() => this.$emit("colseDialog"));
    },
  },
};
</script>
