<template>
  <div style="position: fixed; height: 100vh" class="py-4 primary px-4">
    <v-list dark nav flat class="align-center primary my-5">
      <v-list-item exact :to="link.to" v-for="(link, index) in links" :key="index" class="d-flex justify-center rounded-pill
px-6" active-class="active-item">
        <v-list-item-icon class="mr-4 hidden-sm-and-down ">
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="text-capitalize">
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
        { title: "Dashboard", icon: "mdi-home-outline", to: "/dashboard" },
        { title: "Products", icon: "mdi-view-quilt", to: "/dashboard/products" },
        { title: "categories", icon: "mdi-tag-outline" },
        { title: "Users", icon: "mdi-account-outline", to: "/dashboard/users" },
        { title: "Settings", icon: "mdi-cog-outline" },
      ],
    };
  },
};
</script>
<style>
.active-item {
  background: #1f625bc7 !important
}
</style>