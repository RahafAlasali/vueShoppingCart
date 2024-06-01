<template>
  <div>
    <v-dialog
      persistent
      v-model="$props.showDialog"
      max-width="500px"
      hide-overlay
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit User</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  dense
                  label="First Name"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog()">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="closeDialog()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["productEdit", "showDialog"],
  emits: ["colseDialog"],
  data() {
    return {
      user: this.$props.userEdit,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("colseDialog");
    },
  },
};
</script>
