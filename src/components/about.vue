<template>
  <div class="py-4 d-flex align-center" style="height: 600px">
    <v-row style="height: 90%">
      <v-col cols="12" sm="6">
        <div
          class="d-sm-flex justify-sm-end justify-center px-6 text-sm-right align-center"
        >
          <div>
            <div class="primary--text">ABOUT US</div>
            <div class="mt-4">
              <h2
                class="about-header"
                style="font-family: cursive; font-size: xx-large"
              >
                A Few Words About Our Store
              </h2>
            </div>
          </div>
        </div></v-col
      >
      <v-divider vertical class="d-none d-sm-block"></v-divider>
      <v-col cols="12" sm="6" class="d-flex align-end" xs="12">
        <div class="mx-6">
          <div
            class="text-md-h4 mb-8"
            style="font-family: cursive; font-weight: bold"
          >
            {{ $t("aboutTitle") }}
          </div>
          <div class="subtitle-1">
            {{ $t("aboutDescription") }}
          </div>
        </div></v-col
      >
    </v-row>
  </div>
</template>

<style scoped>
@media only screen and (min-width: 768px) {
  .about-header {
    width: 175px;
  }
}
</style>
