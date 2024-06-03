<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="8"> {{ shoppingCarts }}</v-col>
        <v-col cols="4"
          ><v-card>
            <v-card-title> Cart Totals </v-card-title>
            <v-card-text>
              <div class="py-2 body-1">Subtotal :{{ totalPrd }}</div>
              <v-divider></v-divider>
              <div class="py-2 body-1">Total :{{ totalPrd }}</div>
            </v-card-text>
            <v-card-actions class="mx-3">
              <v-btn color="primary" block> checkout</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", ["shoppingCarts"]),
    totalPrd() {
      return this.shoppingCarts
        .map((item) => {
          return item.price * item.quantity;
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);
    },
  },
};
</script>
