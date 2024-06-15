<template>
  <div class="d-flex align-center" style="height: 100vh">
    <v-container>
      <div class="d-flex justify-center">
        <div>
          <div class="py-4 text-h1 text-center" style="font-weight: bold">
            404
          </div>
          <div class="text-h3">Sorry, we couldn't find this page.</div>
          <div class="my-4 text-center pt-7">
            <v-btn color="primary" dark large link :to="{ name: 'home' }"
              >Go home</v-btn
            >
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
