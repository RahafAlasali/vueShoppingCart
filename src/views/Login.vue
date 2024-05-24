<template>
  <div class="my-9">
    <v-row class="justify-center">
      <v-col cols="10" md="4">
        <v-card class="pa-4" elevation="4">
          <v-container>
            <v-card-title class="text-center justify-center text-md-h4"
              >Create Account</v-card-title
            >
            <v-form
              @submit.prevent="submit"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                :rules="[(v) => !!v || 'This field is required']"
                :label="$t('name')"
              >
              </v-text-field>
              <v-text-field
                v-model="email"
                :label="$t('email')"
                :rules="[
                  (v) => !!v || 'This field is required',
                  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ]"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :label="$t('password')"
                type="password"
                :rules="[(v) => !!v || 'This field is required']"
              ></v-text-field>

              <v-card-actions class="d-flex justify-center">
                <v-btn dark large color="primary" width="200" type="submit">
                  Sign Up
                </v-btn>
              </v-card-actions>
            </v-form>

            <h6 class="subtitle-1 text-center mt-3">
              Allredy have account? <span> <a>log in </a></span>
            </h6>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: null,
      password: null,
      valid: true,
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate();
    },
  },
};
</script>
