<template>
  <div calss="">
    <v-img height="600" src="@/assets/head.jpg"
      ><v-overlay absolute>
        <v-container>
          <div class="text-center mx-auto" style="width: 80%">
            <div
              class="my-5 text-sm-h3 text-h5"
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
export default {
  data() {
    return {};
  },
};
</script>
