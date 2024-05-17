<template>
  <div class="ma-3">
    <v-container>
      <v-row>
        <v-col cols="6"> <v-img src="12.jpg"> </v-img></v-col>
        <v-col cols="6">
          <v-container class="mx-2">
            <div>
              <div class="mb-4">
                <h1>create an account</h1>
                <h6 class="subtitle-1">Enter your details below</h6>
                <v-form @submit.prevent>
                  <v-text-field
                    v-model="name"
                    :rules="[(v) => !!v || 'Requird']"
                    label="Name"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    :rules="[(v) => !!v || 'Requird']"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                    :rules="[(v) => !!v || 'Requird']"
                  ></v-text-field>

                  <div class="mt-7">
                    <v-btn
                      block
                      dark
                      x-large
                      color="primary"
                      class="mb-2"
                      @submit="submit"
                    >
                      Create Account
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
    };
  },
  methods: {
    submit() {},
  },
};
</script>
