<template>
  <div class="text-center mt-7 pt-4" style="position: relative">
    <div
      class="text-h3 primary--text font-weight-bold"
      style="
        font-family: 'Cormorant Garamond', serif !important ;
        font-style: italic;
      "
    >
      {{ $t("gallary") }}
    </div>
    <div class="my-sm-3 gallary-header mx-auto gallery">
      {{ $t("gallaryDesc") }}
    </div>

    <v-container
      class="gallarypos"
      style="top: 20%; z-index: 80; right: 5%; left: 5%"
    >
      <v-row class="ma-4" justify="center">
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
          ><v-card tile>
            <v-img height="250" src="@/assets/2.jpg"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img> </v-card
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
            <v-img height="250" src="@/assets/5.jpg"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
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
          ><v-card>
            <v-img height="250" src="@/assets/6.jpg"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img> </v-card
        ></v-col>
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
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    const ourText = new SplitType(".gallery", {
      types: "lines, words, chars",
    });

    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        x: 10,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".gallery",
          scrub: true,
          markers: false,
          start: "top 80%",
          end: "top 40%",
        },
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.1,
        ease: "elastic",
      }
    );
  },
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
</style>
