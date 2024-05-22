<template>
  <div>
    <!-- <v-card
      flat
      color="transparent"
      :height="600"
      class="mx-auto my-2"
      max-width="374"
    > -->
    <div
      class="d-flex align-center"
      style="background-color: white; height: 250px; position: relative"
    >
      <div style="right: 3px; top: 1px; position: absolute">
        <div>
          <v-btn class="my-1" small elevation="2" icon outlined>
            <v-icon class="blue-grey--text" dark small> mdi-heart</v-icon>
          </v-btn>
        </div>
        <div>
          <v-btn small elevation="2" icon outlined>
            <v-icon class="blue-grey--text" dark small> mdi-cart</v-icon>
          </v-btn>
        </div>
      </div>
      <v-img height="150" contain :src="item.image">
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
        ${{ item.price }}
      </v-card-subtitle>
    </v-card-text>
    <v-card-actions class="mx-0 pa-0">
      <v-btn class="px-0" color="primary" text>
        <router-link style="" :to="`/product/${item.id}`">
          {{ $t("details") }}
        </router-link>
      </v-btn>
    </v-card-actions>
    <!-- </v-card> -->
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
