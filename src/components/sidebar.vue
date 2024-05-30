<template>
  <div style="position: fixed; width: 250px" class="text-uppercase py-4 px-2">
    <div class="text-h6 text-center">Shopping Cart</div>
    <v-divider class="mx-auto" style="width: 80%"></v-divider>
    <v-list nav flat class="align-center">
      <v-list-item
        link
        :to="link.to"
        v-for="(link, index) in links"
        :key="index"
        class="d-flex justify-center primary--text"
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
