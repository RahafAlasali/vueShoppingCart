<template>
  <div>
    <v-subheader class="text-h6 mt-3 font-weight-bold justify-space-between">
      <div>{{ $t("viewCart") }}</div>
      <div>
        <v-icon @click="closeDrawer"> mdi-close </v-icon>
      </div>
    </v-subheader>

    <v-divider class="mx-auto" style="width: 90%"></v-divider>

    <!-- <div >No products in the cart.</div> -->
    <div>
      <v-list nav flat>
        <v-list-item
          class="py-2 align-center"
          v-for="(item, index) in $props.items"
          :key="index"
        >
          <div style="width: 100px; height: 100px">
            <v-img width="100%" height="100%" contain :src="item.image"></v-img>
          </div>
          <v-list-item-content class="font-weight-bold mx-1">
            <v-list-item-title style="white-space: unset">{{
              item.title
            }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ currency(item.price) }} X{{
                item.quantity
              }}</v-list-item-subtitle
            >
          </v-list-item-content>
          <div class="mx-1">
            <v-icon @click="() => removePrd(item.id)">
              mdi-close-circle-outline
            </v-icon>
          </div>
        </v-list-item>
      </v-list>
      <v-divider class="mx-auto" style="width: 80%"></v-divider>
      <v-container>
        <div class="d-flex justify-space-between my-4 mx-1 align-center">
          <div class="text-h6 text-capitalize">{{ $t("subtotal") }}</div>
          <div>
            {{ currency(totalPrd) }}
          </div>
        </div>
      </v-container>
      <div>
        <div class="py-2 mx-auto" style="width: 90%">
          <v-btn
            dark
            color="primary"
            block
            class="my-1"
            @click="$router.push({ name: 'cart' })"
          >
            {{ $t("viewCart") }}
          </v-btn>
        </div>
        <div class="my-1 mx-auto" style="width: 90%">
          <v-btn dark color="primary" block class="my-2">
            {{ $t("checkout") }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["items", "show"],
  data() {
    return {};
  },
  emits: ["close"],
  methods: {
    ...mapActions("cart", ["removeItem"]),
    removePrd(id) {
      this.removeItem(id);
    },
    closeDrawer() {
      this.$emit("close");
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
