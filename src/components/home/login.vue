<template>
  <div>
    <div>
      <div
        class="mb-6 text-center text-md-h4 primary--text"
        style="font-weight: bold"
      >
        {{ $t("login") }}
      </div>
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
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :label="$t('password')"
          :type="show2 ? 'text' : 'password'"
          :rules="[(v) => !!v || $t('fieldRequired')]"
          @click:append="show2 = !show2"
        ></v-text-field>

        <div class="d-flex justify-center mt-6">
          <v-btn large type="submit" color="primary" rounded style="width: 50%">
            {{ $t("login") }}
          </v-btn>
        </div>
      </v-form>
      <h6 class="subtitle-1 text-center mt-3">
        {{ $t("noAccount") }}
        <span>
          <router-link :to="{ name: 'register' }">
            {{ $t("register") }}</router-link
          >
        </span>
      </h6>
    </div>
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
      this.$toast.success("Login successful!");
      this.$router.push({ name: "home" });
    },
  },
};
</script>



