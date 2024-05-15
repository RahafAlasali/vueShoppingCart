<template>
  <!-- <v-footer color="black">
    <v-row justify="center">
      <v-col cols="2" style="color: white">
        <h3 class="my-1">Home</h3>
        <div class="my-1">About</div>
        <div class="my-1">Home</div>
        <div>
          <v-text-field
            outlined
            dense=""
            solo
            label="Home"
            append-icon="mdi-magnify"
            style="max-width: 80%"
            background-color="grey darken-2"
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="2" style="color: white">
        <h3 class="my-1">Support</h3>
        <div class="my-1">About</div>
        <div class="my-1">Home</div>
      </v-col>
      <v-col cols="2" style="color: white">
        <h3 class="my-1">Account</h3>
        <div class="my-1">About</div>
        <div class="my-1">Home</div>
      </v-col>
      <v-col cols="2" style="color: white">
        <h3 class="my-1">Account</h3>
        <div class="my-1">About</div>
        <div class="my-1">Home</div>
      </v-col>
      <v-col cols="2" style="color: white" class="d-flex">
        <div class="mx-1"><v-icon color="white">mdi-instagram</v-icon></div>
        <div class="mx-1"><v-icon color="white">mdi-facebook</v-icon></div>
        <div class="mx-1"><v-icon color="white">mdi-facebook</v-icon></div>
      </v-col>
    </v-row>

    <v-divider></v-divider>
   </v-footer> -->
  <v-footer dark padless>
    <v-card class="grey darken-4 white--text text-center" width="100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
