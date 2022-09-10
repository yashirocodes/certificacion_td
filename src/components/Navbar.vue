<template>
  <div>
    <v-app-bar
      absolute
      color="blue-grey darken-4"
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Big Mobile</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" color="deep-purple darken-3" class="mx-5"> Home </v-btn>
      <v-btn to="/equipos" color="deep-purple darken-3" class="mx-5"> Equipos </v-btn>
      <v-btn color="deep-purple darken-3" class="mx-5"> Planes </v-btn>
      <v-btn color="deep-purple darken-3" class="mx-5"> Postpago </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn color="deep-purple darken-3">
        Oficina Virtual
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
    .v-app-bar{
        position: sticky !important;
    }
</style>