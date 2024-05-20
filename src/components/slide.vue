<template>
  <div calss="">
    <v-img height="600" src="head.jpg"
      ><v-overlay absolute>
        <v-container>
          <div style="width: 80%">
            <div class="my-5 text-h2">{{ $t("intro.title") }}</div>
            <div class="my-5" style="width: 60%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              velit distinctio blanditiis quam sit amet consectetur adipisicing
              elit
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
