<template>
  <div class="ma-3">
    <v-container>
      <v-row>
        <v-col cols="6"> <v-img src="@/assets/placeholder.png"> </v-img></v-col>
        <v-col cols="6">
          <v-container class="mx-2">
            <div>
              <h1>create an acount</h1>
              <h6 class="subtitle-1">Enter your ditails below</h6>
              <v-text-field placeholder="Name"></v-text-field>
              <v-text-field placeholder="Email or Phone Number"></v-text-field>
              <v-text-field placeholder="password"></v-text-field>
              <div class="mt-5">
                <v-btn block dark x-large color="primary" class="mb-2">
                  Create Account
                </v-btn>

                <v-btn class="my-3" block outlined text x-large
                  >Sing up with google</v-btn
                >
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
