<template>
  <div>
    <div class="mx-2">
      <div class="text-h4 mt-2 mb-6 primary--text" style="font-weight: bold">
        Dashboard
      </div>

      <div class="my-7 pt-7">
        <v-row class="justify-center">
          <v-col
            v-for="(item, index) in cards"
            :key="index"
            cols="9"
            md="3"
            sm="6"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="px-2"
                :style="`border-bottom:2px solid ; border-color:${item.color}`"
                :class="{ 'on-hover': hover }"
              >
                <v-card-title class="grey--text">{{ item.title }}</v-card-title>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <v-card-subtitle class="text-h5 grey--text"
                      >{{ item.number }}
                    </v-card-subtitle>
                  </div>

                  <div class="px-3">
                    <v-btn :style="`background:${item.bgColor}`">
                      <v-icon :style="`color:${item.color}`"> mdi-home </v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-hover>
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
          number: 800,
          color: "#FFA726",
          bgColor: "#ffdfa6",
        },
        {
          title: "All Orders",
          number: 1000,
          color: "#00695C",
          bgColor: "#B2DFDB",
        },
        {
          title: "All Categories",
          number: 400,
          color: "#F4511E",
          bgColor: "#FFCCBC",
        },
        {
          title: "All Users",
          number: 30,
          color: "#37474F",
          bgColor: "#B0BEC5",
        },
      ],
    };
  },
};
</script>

<style>
.on-hover {
  animation: move 1s forwards 1 ease-in-out;
  position: relative;
}

@keyframes move {
  0% {
    bottom: 0px;
  }

  100% {
    bottom: 12px;
  }
}
</style>
