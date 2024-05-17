<template>
  <div class="text-center mt-7 pt-4" style="position: relative">
    <div
      class="text-h3 primary--text font-weight-bold"
      style="font-family: cursive"
    >
      gallary
    </div>
    <div class="my-3 mx-auto" style="width: 600px; height: 300px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi accusamus
      dolorum amet, consectetur adipisicing elit. Modi accusamus dolorum
    </div>

    <v-container
      style="position: absolute; top: 20%; z-index: 99999; right: 5%; left: 5%"
    >
      <v-row class="mx-4">
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-card tile class="px-2" height="100%">
            <v-card-title class="justify-center"> Title </v-card-title>
            <v-card-text class="text-center text-h6">
              Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col tile md="4" sm="10" class="px-0 py-0"
          ><v-card tile> <v-img height="250" src="2.jpg"></v-img> </v-card
        ></v-col>
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-card tile class="px-2" height="100%">
            <v-card-title class="justify-center"> Title </v-card-title>
            <v-card-text class="text-h6">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card></v-col
        >
        <v-col tile md="4" sm="10" class="px-0 py-0">
          <v-card tile>
            <v-img height="250" src="5.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col md="4" sm="10" class="px-0 py-0"
          ><v-card tile class="px-2" height="100%">
            <v-card-title class="justify-center"> Title </v-card-title>
            <v-card-text class="text-h6">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card></v-col
        >
        <v-col md="4" sm="10" class="px-0 py-0"
          ><v-card> <v-img height="250" src="6.jpg"></v-img> </v-card
        ></v-col>
      </v-row>
    </v-container>

    <v-img height="500" opacity="0.7" src="4.jpg">
      <v-overlay absolute></v-overlay
    ></v-img>
  </div>
</template>
