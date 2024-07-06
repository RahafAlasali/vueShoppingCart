<template>
  <div>
    <v-row class=" align-center" style="height: 100vh">
      <v-col cols="10" md="4" class="offset-md-2">
        <div class="pa-4">
          <v-container>
            <h4 class=" mb-6  text-center text-md-h4" style="color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, #8fb9aac4, #05453e, #8fb9aac4, #05453e);font-weight: bold">{{
      $t("createAccount")
              }}</h4>
            <v-form @submit.prevent="submit" ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="name" :rules="[(v) => !!v || $t('fieldRequired')]" :label="$t('name')" filled
                rounded>
              </v-text-field>
              <v-text-field v-model="email" :label="$t('email')" :rules="[
                (v) => !!v || $t('fieldRequired'),
                (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
              ]" filled rounded></v-text-field>
              <v-text-field v-model="password" :label="$t('password')" type="password"
                :rules="[(v) => !!v || $t('fieldRequired')]" filled rounded></v-text-field>

              <v-card-actions class="d-flex justify-center">
                <v-btn x-large color="primary" type="submit" rounded style="width: 100%;">
                  {{ $t("signUp") }}
                </v-btn>
              </v-card-actions>
            </v-form>

            <h6 class="subtitle-1 text-center mt-3">
              {{ $t("alreadyHaveAccount") }}
              <span>
                <router-link :to="{ name: 'login' }">{{ $t("login") }}
                </router-link>
              </span>
            </h6>
          </v-container>
        </div>
      </v-col>

      <v-col cols="7" md="6" style="height: 100%;">
        <div class="shape-left">

        </div>
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
<style scoped>
.shape-left {

  height: 100%;
  background-color: #05453e;
  -webkit-clip-path: circle(38.9% at 85% 51%);
  clip-path: circle(75% at 80% 51%);
  background-image: url(../assets/head.jpg);
  background-size: cover;
}
</style>
