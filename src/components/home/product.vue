<template>
  <div class="">
    <div
      class="d-flex align-center justify-center"
      style="background-color: white; height: 190px; position: relative"
    >
      <div style="right: 3px; top: 1px; position: absolute">
        <div>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="my-1"
                small
                elevation="2"
                icon
                outlined
                v-bind="attrs"
                v-on="on"
                @click="() => view(item.image)"
              >
                <v-icon class="black--text" dark small> mdi-eye</v-icon>
              </v-btn></template
            >
            <span>view</span>
          </v-tooltip>
        </div>
        <div>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mt-1"
                small
                elevation="2"
                icon
                outlined
                v-bind="attrs"
                v-on="on"
                @click="add(item)"
              >
                <v-icon class="black--text" dark small> mdi-cart</v-icon>
              </v-btn>
            </template>
            <span>Add to cart</span>
          </v-tooltip>
        </div>
      </div>
      <v-img height="150" max-width="120" contain :src="item.image">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
    </div>

    <v-card-title class="pb-3 px-0" style="height: 100px">
      <div class="body" style="line-height: 1">
        {{ item.title }}
      </div></v-card-title
    >

    <v-card-text class="m-auto pa-0 mt-2">
      <v-row align="center" class="mx-0">
        <v-rating
          :value="item.rating.rate"
          color="primary"
          background-color="primary"
          dense
          half-increments
          readonly
          size="23"
        ></v-rating>
      </v-row>
      <v-card-subtitle
        class="px-0"
        style="font-family: cursive; font-weight: bolder"
      >
        {{
          item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </v-card-subtitle>
    </v-card-text>
    <v-card-actions class="ma-0 pa-0">
      <v-btn
        class="px-0 text-capitalize"
        color="primary"
        text
        @click="
          $router.push(`/product/${item.id}`);
          $router.go();
        "
      >
        {{ $t("details") }}
      </v-btn>
    </v-card-actions>
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
      this.$toast.info("Added to cart successfully");
    },
    view(img) {
      this.$emit("viewPrd", img);
    },
  },
};
</script>
