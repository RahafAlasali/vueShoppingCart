<template>
  <div class="ma-3">
    <v-container>
      <v-row>
        <v-col cols="6" class="hidden-sm-and-down">
          <v-img src="12.jpg"> </v-img
        ></v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <v-container class="mx-2">
            <div>
              <div class="mb-4">
                <h1>Create Account</h1>
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

                  <div class="mt-7">
                    <v-btn
                      block
                      dark
                      x-large
                      color="primary"
                      class="mb-2"
                      type="submit"
                    >
                      Sign Up
                    </v-btn>
                  </div>
                </v-form>
              </div>

              <h6 class="subtitle-1 text-center mt-3">
                Allredy have account? <span> <a>log in </a></span>
              </h6>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
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
