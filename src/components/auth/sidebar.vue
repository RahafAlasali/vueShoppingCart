<template>
  <div style="position: fixed; height: 100vh" class="py-4 primary px-2">
    <v-list dark nav flat class="align-center primary my-5">
      <v-list-item
        link
        :to="link.to"
        v-for="(link, index) in links"
        :key="index"
        class="d-flex justify-center"
      >
        <v-list-item-icon class="mr-3 hidden-sm-and-down">
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="font-weight-bold">
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
        { title: "Dashboard", icon: "mdi-home", to: "/dashboard" },
        { title: "Products", icon: "mdi-home", to: "/dashboard/products" },
        { title: "categories", icon: "mdi-tag" },
        { title: "Users", icon: "mdi-account", to: "/dashboard/users" },
        { title: "Settings", icon: "mdi-cog-outline" },
      ],
    };
  },
};
</script>
