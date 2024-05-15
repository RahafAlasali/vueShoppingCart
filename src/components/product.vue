<template>
  <div>
    <v-card :height="400" class="mx-auto my-4" max-width="374">
      <v-img height="200" contain :src="item.image">
        <v-btn icon tile>
          <v-icon class="blue-grey--text"> mdi-heart</v-icon>
        </v-btn>
        <v-btn icon tile>
          <v-icon class="blue-grey--text"> mdi-cart</v-icon>
        </v-btn>
      </v-img>

      <v-card-title class="subtitle-2 pb-3" style="min-height: 100px">{{
        item.title
      }}</v-card-title>
      <div>
        <v-card-text class="m-auto">
          <v-row align="center" class="mx-0">
            <v-rating
              :value="item.rating.rate"
              color="amber"
              background-color="grey lighten-2"
              dense
              half-increments
              readonly
              size="23"
            ></v-rating>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="deep-purple lighten-2" text>
            <router-link
              style="text-decoration: none"
              :to="`/product/${item.id}`"
            >
              details
            </router-link>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
