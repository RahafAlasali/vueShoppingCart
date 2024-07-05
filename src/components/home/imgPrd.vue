<template>
  <div>
    <v-overlay :value="overlay" z-index="999999">
      <div class="" style="max-width: 300px; max-height: 500px; position: relative">
        <v-btn fab dark x-small color="white" @click="closed"
          style="top: 0; right: 0; position: absolute; z-index: 99999">
          <v-icon class="black--text"> mdi-close</v-icon>
        </v-btn>
        <v-img :src="img" contain width="350" height="350" style="background-color: white">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="red" size="70"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  props: ["overlay", "img"],
  emits: ["close"],
  data() {
    return {
      img: this.$props.img,
      overlay: this.$props.overlay,
    };
  },
  methods: {
    closed() {
      this.$emit("close");
    },
  },
};
</script>
