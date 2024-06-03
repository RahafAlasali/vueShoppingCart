<template>
  <div>
    <v-list nav flat>
      <v-subheader class="text-h6 mt-3 font-weight-bold">My cart </v-subheader>
      <v-divider class="mx-auto" style="width: 90%"></v-divider>
      <v-list-item
        class="py-2"
        v-for="(item, index) in $props.items"
        :key="index"
      >
        <div style="width: 100px; height: 100px">
          <v-img width="100%" height="100%" contain :src="item.image"></v-img>
        </div>
        <v-list-item-content class="font-weight-bold mx-1">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle
            >${{ item.price }} X{{ item.quantity }}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon @click="() => removePrd(item.id)"> mdi-close </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <v-divider class="mx-auto" style="width: 80%"></v-divider>
    <v-container>
      <div class="d-flex justify-space-between my-4 mx-1 align-center">
        <div class="text-h6 text-capitalize">Subtotal</div>
        <div>${{ totalPrd }}</div>
      </div>
    </v-container>
    <div>
      <div class="py-2 mx-auto" style="width: 90%">
        <v-btn
          dark
          color="primary"
          block
          class="my-2"
          @click="$router.push({ name: 'cart' })"
        >
          View Cart
        </v-btn>
      </div>
      <div class="py-2 mx-auto" style="width: 90%">
        <v-btn dark color="primary" block class="my-2"> checkout </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["items"],
  data() {
    return {};
  },
  methods: {
    ...mapActions("cart", ["removeItem"]),
    removePrd(id) {
      this.removeItem(id);
    },
  },
  computed: {
    ...mapState("cart", ["quantity", "shoppingCarts"]),
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
