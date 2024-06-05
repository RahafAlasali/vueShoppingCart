<template>
  <dir>
    <v-dialog
      v-model="$props.showDialog"
      max-width="500px"
      hide-overlay
      persistent
    >
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="DeleteItem">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </dir>
</template>

<script>
export default {
  props: ["showDialog"],
  emits: ["delete", "colseDialog"],
  data() {
    return {};
  },
  methods: {
    cancel() {
      this.$emit("colseDialog");
    },
    DeleteItem() {
      this.$emit("delete");
    },
  },
};
</script>
