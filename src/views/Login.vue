<template>
  <div>
    <v-row class="justify-center align-center" style="height: 100vh">
      <v-col cols="10" md="4">
        <v-card elevation="4" shaped class="pa-4">
          <v-container>
            <v-card-title class="text-center justify-center text-md-h4">{{
              $t("login")
            }}</v-card-title>
            <v-form
              @submit.prevent="submit"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="user.username"
                :rules="[(v) => !!v || $t('fieldRequired')]"
                :label="$t('name')"
                filled
                rounded
              >
              </v-text-field>

              <v-text-field
                v-model="user.password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :label="$t('password')"
                :type="show2 ? 'text' : 'password'"
                :rules="[(v) => !!v || $t('fieldRequired')]"
                @click:append="show2 = !show2"
                filled
                rounded
              ></v-text-field>

              <v-card-actions class="d-flex justify-center">
                <v-btn large width="200" type="submit" color="primary">
                  {{ $t("login") }}
                </v-btn>
              </v-card-actions>
            </v-form>
            <h6 class="subtitle-1 text-center mt-3">
              {{ $t("noAccount") }}
              <span>
                <router-link :to="{ name: 'register' }">
                  {{ $t("register") }}</router-link
                >
              </span>
            </h6>
          </v-container>
        </v-card>
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
<style></style>
