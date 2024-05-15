<template>
  <div calss="">
    <v-carousel
      height="400"
      show-arrows="hover"
      cycle
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in sliceImages"
        :key="i"
        v-bind:src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliceImages: [
        {
          src: "1.jpg",
        },
        {
          src: "2.jpg",
        },
        {
          src: "3.jpg",
        },
      ],
    };
  },
};
</script>
