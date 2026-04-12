import Vue from "vue";

Vue.mixin({
  methods: {
    currency(numb) {
      if (!numb) return "$0.00";
      return Number(numb).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
});
