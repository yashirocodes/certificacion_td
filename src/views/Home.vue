<template>
  <div class="home">
    <v-container>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col cols="12">
          <v-container>
            <h2 class="text-center">Planes flexibles</h2>
            <v-container d-flex>
              <v-card
                v-for="(planes, i) in home.planes"
                :key="i"
                class="mx-auto"
                max-width="344"
              >
                <v-img :src="planes.imagen" height="200px"></v-img>
                <v-card-title> {{ planes.titulo }} </v-card-title>
                <v-card-subtitle> {{ planes.texto }} </v-card-subtitle>
              </v-card>
            </v-container>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <h2 class="text-center">Opiniones</h2>
            <v-container d-flex>
              <v-card
                v-for="(opiniones, i) in home.opiniones"
                :key="i"
                class="mx-auto d-flex flex-column align-center"
                min-width="344"
              >
                <v-avatar class="mt-4" color="deep-purple darken-3" size="60">
                  <v-icon color="white">mdi-account-circle-outline</v-icon>
                </v-avatar>
                <v-card-title> {{ opiniones.nombre }} </v-card-title>
                <v-card-subtitle> {{ opiniones.texto }} </v-card-subtitle>
              </v-card>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  data: () => ({
    colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
  }),
  created() {
    this.$store.dispatch("getHomeData");
  },
  computed: {
    ...mapState(["home"]),
  },
};
</script>
