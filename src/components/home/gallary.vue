<template>
  <div class="text-center mt-7 pt-4" style="position: relative">
    <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="50">
      <div class="text-h3 primary--text font-weight-bold header-text">
        {{ $t("gallary") }}
      </div>
      <div class="my-sm-3 gallary-header mx-auto gallery pt-4">
        {{ $t("gallaryDesc") }}
      </div>
    </div>
    <v-container
      class="gallarypos"
      style="top: 20%; z-index: 80; right: 5%; left: 5%"
    >
      <v-row class="ma-4" justify="center">
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-card tile class="px-2" height="100%">
            <v-card-title class="justify-center"> Watches </v-card-title>
            <v-card-text class="text-center text-h6">
              Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col tile md="4" sm="10" class="px-0 py-0">
          <v-hover v-slot="{ hover }"
            ><v-card tile>
              <v-img height="250" src="@/assets/2.jpg"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-ease-in-ease-out primary v-card--reveal white--text px-2"
                  style="height: 100%"
                >
                  <div class="text-h3 my-2 py-4">Watches</div>

                  <div class="subtitle-1 py-2">
                    Turns out semicolon-less style is easier and safer in TS
                    because most gotcha edge cases are type invalid as well.
                  </div>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover></v-col
        >
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-card tile class="px-2" height="100%">
            <v-card-title class="justify-center"> Electronics </v-card-title>
            <v-card-text class="text-h6">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card></v-col
        >
        <v-col tile md="4" sm="10" class="px-0 py-0">
          <v-hover v-slot="{ hover }">
            <v-card tile>
              <v-img height="250" src="@/assets/5.jpg"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-ease-in-ease-out primary v-card--reveal white--text px-2"
                  style="height: 100%"
                >
                  <div class="text-h3 my-2 py-4">Bags</div>
                  <div class="subtitle-1 py-2">
                    Turns out semicolon-less style is easier and safer in TS
                    because most gotcha edge cases are type invalid as well.
                  </div>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <v-col md="4" sm="10" class="px-0 py-0"
          ><v-card tile class="px-2" height="100%">
            <v-card-title class="justify-center"> Jewelery </v-card-title>
            <v-card-text class="text-h6">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card></v-col
        >
        <v-col md="4" sm="10" class="px-0 py-0">
          <v-hover v-slot="{ hover }">
            <v-card>
              <v-img height="250" src="@/assets/6.jpg"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-ease-in-ease-out primary v-card--reveal white--text px-2"
                  style="height: 100%"
                >
                  <div class="text-h3 my-2 py-4">Jewelery</div>
                  <div class="subtitle-1 py-2">
                    Turns out semicolon-less style is easier and safer in TS
                    because most gotcha edge cases are type invalid as well.
                  </div>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-img
      class="hidden-sm-and-down"
      height="500"
      opacity="0.7"
      src="@/assets/4.jpg"
    >
      <v-overlay absolute></v-overlay
    ></v-img>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .gallarypos {
    position: absolute;
  }

  .gallary-header {
    height: 300px;
  }
}

@media only screen and (min-width: 768px) {
  .gallary-header {
    width: 600px;
  }
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
