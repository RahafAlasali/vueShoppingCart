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
              </div>
            </v-overlay></router-link
          >
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      imagesCategory: ["canon1.jpg", "6.jpg", "11.jpg", "5.jpg"],
    };
  },
  computed: {
    ...mapState("core", ["categories"]),
  },
  methods: {
    ...mapActions("core", ["getCategories"]),
  },
  mounted() {
    this.getCategories();
  },
};
</script>
