<template>
  <div>
    <v-img height="100vh" src="@/assets/head.jpg"
      ><v-overlay absolute>
        <v-container>
          <div class="text-center mx-auto" style="width: 80%">
            <div
              class="my-5 text-sm-h3 text-h5 Gsap"
              style="
                font-family: 'Cormorant Garamond', serif !important ;
                font-style: italic;
              "
            >
              {{ $t("intro.title") }}
            </div>
            <div class="my-5">
              {{ $t("intro.description") }}
            </div>
            <div class="mt-9">
              <v-btn elevation="1" large outlined text>view collection</v-btn>
            </div>
          </div>
        </v-container>
      </v-overlay>
    </v-img>
  </div>
</template>
<script>
import { gsap } from "gsap";
import SplitType from "split-type";

export default {
  data() {
    return {};
  },
  mounted() {
    const ourText = new SplitType(".Gsap", { types: "chars" });
    const chars = ourText.chars;
    gsap.fromTo(
      chars,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.1,
        ease: "elastic",
        delay: 2,
      }
    );
  },
};
</script>
