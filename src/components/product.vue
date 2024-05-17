<template>
  <div>
    <v-card
      flat
      color="transparent"
      :height="600"
      class="mx-auto my-2"
      max-width="374"
    >
      <div
        class="d-flex align-center"
        style="background-color: white; height: 300px; position: relative"
      >
        <div style="right: 2px; top: 2px; position: absolute">
          <div>
            <v-btn icon>
              <v-icon class="blue-grey--text"> mdi-heart</v-icon>
            </v-btn>
          </div>
          <div class="mt-3">
            <v-btn icon>
              <v-icon class="blue-grey--text"> mdi-cart</v-icon>
            </v-btn>
          </div>
        </div>
        <v-img height="200" contain :src="item.image" style="ma-auto"> </v-img>
      </div>

      <v-card-title class="pb-3 px-0" style="min-height: 150px">{{
        item.title
      }}</v-card-title>

      <v-card-text class="m-auto">
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
        <v-card-subtitle class="px-0 my-2"> ${{ item.price }} </v-card-subtitle>
      </v-card-text>
      <!-- <v-card-actions class="d-flex justify-end">
          <v-btn color="deep-purple lighten-2" text>
            <router-link
              style="text-decoration: none"
              :to="`/product/${item.id}`"
            >
              details
            </router-link>
          </v-btn>
        </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
