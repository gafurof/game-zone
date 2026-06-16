<template>
  <v-app>
    <v-container>
      <v-bottom-navigation :elevation="6" grow>
        <v-btn value="home">
          <v-icon>mdi-home</v-icon>

          <span>Home</span>
        </v-btn>

        <v-btn value="map">
          <v-icon>mdi-map</v-icon>

          <span>Map</span>
        </v-btn>

        <v-btn value="bron">
          <v-icon>mdi-lock</v-icon>

          <span>Bron</span>
        </v-btn>

        <v-btn value="account">
          <v-icon>mdi-account</v-icon>

          <span>Account</span>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </v-app>
</template>
