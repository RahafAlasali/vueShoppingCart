<template>
  <div
    style="position: fixed; height: 100vh"
    class="text-uppercase py-4 px-7 primary"
  >
    <div class="text-h6 text-center white--text">Shopping Cart</div>

    <v-list dark nav flat class="align-center primary my-5">
      <v-list-item
        link
        :to="link.to"
        v-for="(link, index) in links"
        :key="index"
        class="d-flex justify-center"
      >
        <v-list-item-content class="text-center font-weight-bold">
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", to: "/" },
        { title: "Products", to: "/products" },
        { title: "Contact", to: "/" },
        { title: "About", to: "/" },
      ],
    };
  },
};
</script>
