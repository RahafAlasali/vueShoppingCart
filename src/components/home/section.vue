<template>
  <div>
    <v-parallax src="@/assets/1.jpg"
      ><v-overlay :absolute="true"
        ><div class="text-h4 text-center">
          <div class="py-4" style="font-family: cursive">
            {{ $t("exploreProduct") }}
          </div>

          <div class="mt-8">
            <v-btn elevation="1" large outlined text>view collection</v-btn>
          </div>
        </div></v-overlay
      >
    </v-parallax>
  </div>
</template>
