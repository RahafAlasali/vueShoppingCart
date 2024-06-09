import Vue from "vue";

Vue.mixin({
  methods: {
    currency(numb) {
      return numb.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
});
