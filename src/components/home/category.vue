<template>
  <div>
    <v-row>
      <v-col
        v-for="(item, index) in categories"
        :key="index"
        class="px-0"
        cols="3"
      >
        <v-img height="400" :src="require(`@/assets/${imagesCategory[index]}`)"
          ><router-link :to="{ name: 'products', query: { cat: item } }"
            ><v-overlay absolute>
              <div
                class="text-sm-h3 text-center grey--text text--lighten-1 text-capitalize"
                style="
                  font-family: 'Cormorant Garamond', serif !important ;
                  font-style: italic;
                "
              >
                {{ item }}
              </div></v-overlay
            ></router-link
          >
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      imagesCategory: ["2.jpg", "7.jpg", "1.jpg", "9.jpg"],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          return (this.categories = res.data);
        })
        .catch((e) => {});
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
