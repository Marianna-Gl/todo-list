<template>
  <footer>
    <v-layout class="overflow-visible" style="height: 56px">
      <v-bottom-navigation v-model="value" :bg-color="color">
        <v-btn>
          <span
            ><a href="https://www.linkedin.com/in/marianna-g-0906b1156/" target="_blank">
              <img src="/src/assets/images/linkedin.png" alt="here is a logo" /></a
          ></span>
        </v-btn>

        <v-btn>
          <span
            ><a href="https://github.com/Marianna-Gl" target="_blank">
              <img src="/src/assets/images/git.png" alt="here is a logo" /></a
          ></span>
        </v-btn>

        <v-btn>
          <v-icon>mdi-book</v-icon>

          <span>Book</span>
        </v-btn>

        <v-btn>
          <v-icon>mdi-image</v-icon>

          <span>Image</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </footer>
</template>

<script src="./footer.js"></script>
<style scoped></style>
