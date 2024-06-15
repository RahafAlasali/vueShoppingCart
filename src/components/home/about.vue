<template>
  <div class="py-4 d-flex align-center" style="height: 600px" id="about">
    <v-row style="height: 90%">
      <v-col cols="12" sm="6">
        <div
          class="d-sm-flex justify-sm-end d-block justify-center px-6 text-sm-right align-center"
        >
          <div>
            <div class="primary--text">ABOUT US</div>
            <div class="mt-4">
              <h2
                class="about-header about-desc"
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
          <div class="subtitle-1 about-prgrph">
            {{ $t("aboutDescription") }}
          </div>
        </div></v-col
      >
    </v-row>
  </div>
</template>

<script>
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    const ourText = new SplitType(".about-desc ", {
      types: "lines, words, chars",
    });

    const lines = ourText.lines;

    gsap.fromTo(
      lines,
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".about-desc",
          scrub: true,
          markers: false,
          start: "top 40%",
          end: "top 10%",
        },
        x: 0,
        opacity: 1,
        stagger: 0.6,
        duration: 2,
        ease: "elastic",
      }
    );

    gsap.fromTo(
      ".about-prgrph",
      {
        y: 10,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".about-prgrph",
          scrub: false,
          markers: false,
          start: "top 30%",
          end: "top 20%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1.in",
        stagger: 0.1,
      }
    );
  },
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .about-header {
    width: 175px;
  }
}
</style>
