<template>
  <div class="my-9">
    <v-row class="justify-center">
      <v-col cols="10" md="4">
        <v-card class="pa-4" elevation="4">
          <v-container>
            <v-card-title class="text-center justify-center text-md-h4"
              >Login</v-card-title
            >
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
              >
              </v-text-field>

              <v-text-field
                v-model="user.password"
                :label="$t('password')"
                type="password"
                :rules="[(v) => !!v || $t('fieldRequired')]"
              ></v-text-field>

              <v-card-actions class="d-flex justify-center">
                <v-btn dark large color="primary" width="200" type="submit">
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      valid: true,
      user: { username: null, password: null },
    };
  },
  methods: {
    ...mapMutations("auth", ["setLogin"]),
    submit() {
      this.$refs.form.validate();
      axios
        .post("https://fakestoreapi.com/auth/login", this.user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.setLogin(true);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          this.$toast("Login", {
            timeout: 1500,
            pauseOnHover: false,
          });
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>
