<template>
  <v-row>
    <v-col cols="2">
      <SideBar />
    </v-col>
    <v-col cols="10">
      <div class="mx-2">
        <div class="text-h4">Products</div>

        <router-view></router-view>
      </div>
    </v-col>
  </v-row>
</template>
