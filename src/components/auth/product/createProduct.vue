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
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  dense
                  label="Title"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-textarea
                  outlined
                  label="Descriptiona"
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="createProduct">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="createProduct">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["showDialog"],
  emits: ["colseDialogCreate"],
  data() {
    return {
      title: null,
      description: null,
    };
  },
  methods: {
    createProduct() {
      this.$emit("colseDialogCreate");
    },
  },
};
</script>
