<template>
  <div>
    <v-dialog persistent v-model="show" max-width="500px" hide-overlay>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit User</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  dense
                  label="First Name"
                  v-model="firstname"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  dense
                  label="Last Name"
                  v-model="lastname"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  dense
                  label="Email"
                  v-model="email"
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
          <!-- <v-btn color="blue darken-1" text @click="save()"> Save </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["userEdit", "showDialog"],
  emits: ["colseDialog"],
  data() {
    return {};
  },
  computed: {
    show() {
      return this.showDialog;
    },
    firstname() {
      return this.userEdit.name.firstname;
    },

    lastname() {
      return this.userEdit.name.lastname;
    },
    email() {
      return this.userEdit.email;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("colseDialog");
    },
    // save() {
    //   this.loading = true;
    //   axios
    //     .put(`https://fakestoreapi.com/products/${id}`, this.PrdEdite, {
    //       Headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     .then((res) => console.log(res))
    //     .finally(() => {
    //       this.$emit("colseDialog");
    //       this.loading = false;
    //     });
    // },
  },
};
</script>
