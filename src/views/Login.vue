<template>
  <div>

    <v-row class=" align-center" style="height: 100vh">

      <v-col cols="2" md="4" class="offset-md-2">

        <v-container>
          <div>
            <div class=" mb-6 text-center  text-md-h4" style="color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, #8fb9aac4, #05453e, #8fb9aac4, #05453e);font-weight: bold">{{
      $t("login")
              }}</div>
            <v-form @submit.prevent="submit" ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="user.username" :rules="[(v) => !!v || $t('fieldRequired')]" :label="$t('name')"
                filled rounded>
              </v-text-field>

              <v-text-field v-model="user.password" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :label="$t('password')" :type="show2 ? 'text' : 'password'" :rules="[(v) => !!v || $t('fieldRequired')]"
                @click:append="show2 = !show2" filled rounded></v-text-field>

              <div class="d-flex justify-center">
                <v-btn x-large type="submit" color="primary" rounded style="width: 100%;">
                  {{ $t("login") }}
                </v-btn>
              </div>
            </v-form>
            <h6 class="subtitle-1 text-center mt-3">
              {{ $t("noAccount") }}
              <span>
                <router-link :to="{ name: 'register' }">
                  {{ $t("register") }}</router-link>
              </span>
            </h6>
          </div>
        </v-container>

      </v-col>
      <v-col cols="7" md="6" style="height: 100%;">
        <div class="shape-left">

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      valid: true,
      show2: false,
      user: { username: "mor_2314", password: "83r5^_" },
    };
  },
  methods: {
    ...mapActions("auth", ["addUser"]),
    submit() {
      this.$refs.form.validate();
      this.addUser(this.user);

      this.$toast.success("Registered Successfully!");
      this.$router.push({ name: "home" });
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
