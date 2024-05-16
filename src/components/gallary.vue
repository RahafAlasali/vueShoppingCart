<template>
  <div class="text-center my-7 py-4" style="position: relative">
    <h1 class="primary--text">gallary</h1>
    <div class="my-3 mx-auto" style="width: 600px; height: 300px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi accusamus
      dolorum amet, consectetur adipisicing elit. Modi accusamus dolorum
    </div>

    <v-container
      style="position: absolute; top: 20%; z-index: 99999; right: 5%; left: 5%"
    >
      <v-row class="mx-4">
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-card height="100%">
            <v-card-title class="text-center"> Title </v-card-title>
            <v-card-text class="text-center text-h5 font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4" sm="10" class="px-0 py-0"
          ><v-card> <v-img height="250" src="2.jpg"></v-img> </v-card
        ></v-col>
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-card height="100%">
            <v-card-title> Title </v-card-title>
            <v-card-text class="text-h5 font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card></v-col
        >
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-card>
            <v-img height="250" src="1.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col md="4" sm="10" class="px-0 py-0"
          ><v-card height="100%">
            <v-card-title> Title </v-card-title>
            <v-card-text class="text-h5 font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card></v-col
        >
        <v-col md="4" sm="10" class="px-0 py-0"
          ><v-card> <v-img height="250" src="3.jpg"></v-img> </v-card
        ></v-col>
      </v-row>
    </v-container>

    <v-img height="500" opacity="0.7" src="1.jpg">
      <v-overlay :absolute="true"></v-overlay
    ></v-img>
  </div>
</template>
