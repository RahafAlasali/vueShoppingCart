<template>
  <div class="ma-3">
    <v-container>
      <v-row>
        <v-col cols="6"> <v-img src="12.jpg"> </v-img></v-col>
        <v-col cols="6">
          <v-container class="mx-2">
            <div>
              <div class="mb-4">
                <h1>create an account</h1>
                <h6 class="subtitle-1">Enter your ditails below</h6>
                <v-text-field placeholder="Name"></v-text-field>
                <v-text-field placeholder="Email"></v-text-field>
                <v-text-field placeholder="password"></v-text-field>
              </div>
              <div class="mt-7">
                <v-btn block dark x-large color="primary" class="mb-2">
                  Create Account
                </v-btn>
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
