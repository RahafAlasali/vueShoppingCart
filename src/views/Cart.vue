<template>
  <div class="py-7 my-5">
    <v-container>
      <div class="d-flex justify-end">
        <v-breadcrumbs :items="itemsBrdCrm" large></v-breadcrumbs>
      </div>
      <v-row>
        <v-col cols="12" lg="8">
          <v-simple-table style="border: 1px solid #e0e0e0">
            <template v-slot:default>
              <thead class="grey lighten-3 text-h4">
                <tr>
                  <th class="text-center" style="font-size: large"></th>
                  <th class="text-center" style="font-size: large"></th>
                  <th class="text-center" style="font-size: large">
                    {{ $t("product") }}
                  </th>
                  <th class="text-center" style="font-size: large">
                    {{ $t("price") }}
                  </th>
                  <th class="text-center" style="font-size: large">
                    {{ $t("quantity") }}
                  </th>
                  <th class="text-center" style="font-size: large">
                    {{ $t("subtotal") }}
                  </th>
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
                      <v-img class="my-2" max-height="80px" max-width="80px" contain :src="item.image">
                      </v-img>
                    </div>
                  </td>
                  <td class="text-center">{{ item.title }}</td>
                  <td>
                    {{ currency(item.price) }}
                  </td>
                  <td>
                    <div class="d-flex mx-2">
                      {{ item.quantity }}
                    </div>
                  </td>
                  <td>
                    {{ currency(item.price * item.quantity) }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="12" lg="4" sm="6"><v-card elevation="0" class="pb-4" style="border: 1px solid #e0e0e0">
            <v-card-title class="grey lighten-3">
              {{ $t("total") }}
            </v-card-title>
            <v-card-text class="py-4 px-7">
              <v-row class="py-2 body-1">
                <v-col cols="4"> {{ $t("subtotal") }} </v-col>
                <v-col cols="6">
                  {{ currency(totalPrd) }}
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="py-2 body-1">
                <v-col cols="4"> {{ $t("total") }} </v-col>
                <v-col cols="6">
                  {{ currency(totalPrd) }}
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="mx-3 mt-4">
              <v-btn color="primary" block> {{ $t("checkout") }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      itemsBrdCrm: [
        {
          text: this.$i18n.t("home"),
          disabled: false,
          href: "/",
        },
        {
          text: this.$i18n.t("cart"),
          disabled: false,
          href: "",
        },
      ],
    };
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
<style lang="scss">
.input-add .v-text-field__slot input {
  text-align: center !important;
}
</style>
