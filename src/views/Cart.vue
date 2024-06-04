<template>
  <div class="py-7 my-5">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-simple-table style="border: 1px solid #e0e0e0">
            <template v-slot:default>
              <thead class="grey lighten-3">
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                  <th class="text-left">Product</th>
                  <th class="text-left">Price</th>
                  <th class="text-left">Quantity</th>
                  <th class="text-left">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr class="py-3" v-for="item in shoppingCarts" :key="item.name">
                  <td>
                    <div>
                      <v-icon @click="() => removePrd(item.id)">
                        mdi-close-circle-outline
                      </v-icon>
                    </div>
                  </td>
                  <td>
                    <div>
                      <v-img
                        class="my-2"
                        max-height="80px"
                        max-width="80px"
                        contain
                        :src="item.image"
                      >
                      </v-img>
                    </div>
                  </td>
                  <td>{{ item.title }}</td>
                  <td>
                    {{
                      item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    }}
                  </td>
                  <td>{{ item.quantity }}</td>
                  <td>
                    {{
                      (item.price * item.quantity).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="4"
          ><v-card elevation="0" class="pb-4" style="border: 1px solid #e0e0e0">
            <v-card-title class="grey lighten-3"> Cart Totals </v-card-title>
            <v-card-text class="py-4">
              <div class="py-2 body-1">
                Subtotal :{{
                  totalPrd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                }}
              </div>
              <v-divider></v-divider>
              <div class="py-2 body-1">
                Total :{{
                  totalPrd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                }}
              </div>
            </v-card-text>
            <v-card-actions class="mx-3 mt-4">
              <v-btn color="primary" block> checkout</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
  methods: {
    ...mapActions("cart", ["removeItem"]),
    removePrd(id) {
      this.removeItem(id);
    },
  },
};
</script>
