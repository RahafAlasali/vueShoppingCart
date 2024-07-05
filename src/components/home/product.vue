<template>
  <div class="">
    <div class="d-flex align-center justify-center imgHover"
      style="background-color: white; height: 190px; position: relative">

      <div style="right: 3px; top: 1px; position: absolute">
        <div>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="my-1" small elevation="2" icon outlined v-bind="attrs" v-on="on"
                @click="() => view(item.image)">
                <v-icon class="black--text" dark small> mdi-eye</v-icon>
              </v-btn></template>
            <span>view</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mt-1" small elevation="2" icon outlined v-bind="attrs" v-on="on" @click="add(item)">
                <v-icon class="black--text" dark small> mdi-cart</v-icon>
              </v-btn>
            </template>
            <span>{{ $t("addCart") }}</span>
          </v-tooltip>
        </div>
      </div>
      <v-img height="150" max-width="120" contain :src="item.image">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-row> </template>
        <!-- <v-row class="fill-height">
        <v-card-title>
          <v-btn
            dark
            icon
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-card-title>
      </v-row> -->
      </v-img>
    </div>

    <v-card-title class="py-0 px-0 " style="height: 60px">
      <div style="line-height: 1">
        {{ item.title.substring(0, 35) }}
      </div>
    </v-card-title>

    <v-card-text class="m-auto pa-0 my-1">
      <v-row class="mx-0  ">
        <div>
          <v-rating :value="item.rating.rate" color="primary" background-color="primary" dense half-increments readonly
            size="20"></v-rating>
        </div>
      </v-row>
      <div class="px-0 mt-3 d-flex align-center justify-space-between"
        style="font-family: cursive; font-weight: bolder">
        <div> {{ currency(item.price) }}
        </div>
        <v-btn class="px-0 text-capitalize" color="primary" text @click="
          $router.push({ name: 'productDetails', params: { id: item.id } })
          ">
          {{ $t("details") }}
        </v-btn>
      </div>
    </v-card-text>
    <!-- <v-card-actions class="ma-0 pa-0">
      <v-btn class="px-0 text-capitalize" color="primary" text @click="
        $router.push({ name: 'productDetails', params: { id: item.id } })
        ">
        {{ $t("details") }}
      </v-btn>
    </v-card-actions> -->
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["item"],
  emits: ["viewPrd"],
  methods: {
    ...mapMutations("cart", ["increaseCount"]),
    ...mapActions("cart", ["addItemToCart"]),
    add(item) {
      this.addItemToCart({ item, quantity: 1 });
      this.$toast.success("Added to cart successfully");
    },
    view(img) {
      this.$emit("viewPrd", img);
    },
  },
};
</script>

<style>
.imgHover .v-image__image {
  transition: transform 1s, filter 2s ease-in-out;

  transform: scale(1);
}

/* The Transformation */
.imgHover:hover .v-image__image {
  transform: scale(1.2);
}
</style>
