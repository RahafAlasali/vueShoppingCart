<template>
  <div>
    <div class="mx-2">
      <div class="text-h4 my-2">Dashboard</div>
      <div class="my-7">
        <v-row>
          <v-col v-for="(item, index) in cards" :key="index" cols="3">
            <v-card
              class="px-2"
              :style="`border-bottom:2px solid ; border-color:${item.bgColor}`"
            >
              <v-card-title class="grey--text">{{ item.title }}</v-card-title>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <v-card-subtitle class="text-h5 black--text"
                    >{{ item.number }}
                  </v-card-subtitle>
                </div>

                <div class="px-3">
                  <v-btn :style="`background:${item.bgColor}`">
                    <v-icon :class="`${item.color}--text`"> mdi-home </v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "All Products",
          number: 1000,
          color: "amber",
          bgColor: "#ffae1a4d",
        },
        {
          title: "All Orders",
          number: 1000,
          color: "teal",
          bgColor: "#4DB6AC",
        },
        {
          title: "All Categories",
          number: 400,
          color: "amber",
          bgColor: "#ffae1a4d",
        },
        {
          title: "All Users",
          number: 30,
          color: "blue-grey",
          bgColor: "#B0BEC5",
        },
      ],
    };
  },
};
</script>
