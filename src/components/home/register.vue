<template>
  <div>
    <h4
      class="mb-6 text-center text-md-h4 primary--text"
      style="font-weight: bold"
    >
      {{ $t("createAccount") }}
    </h4>
    <v-form @submit.prevent="submit" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="[(v) => !!v || $t('fieldRequired')]"
        :label="$t('name')"
      >
      </v-text-field>
      <v-text-field
        v-model="email"
        :label="$t('email')"
        :rules="[
          (v) => !!v || $t('fieldRequired'),
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :label="$t('password')"
        type="password"
        :rules="[(v) => !!v || $t('fieldRequired')]"
      ></v-text-field>

      <v-card-actions class="d-flex justify-center">
        <v-btn large color="primary" type="submit" rounded style="width: 50%">
          {{ $t("signUp") }}
        </v-btn>
      </v-card-actions>
    </v-form>
    <h6 class="subtitle-1 text-center mt-3">
      {{ $t("alreadyHaveAccount") }}
      <span>
        <router-link :to="{ name: 'login' }">{{ $t("login") }} </router-link>
      </span>
    </h6>
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