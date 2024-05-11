<template>
  <v-card class="mx-auto" color="#0097A7" max-width="448">
    <v-layout>
      <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
          <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
          <div><img src="/src/assets/images/todo-logo.jpg" alt="" class="todoLogo" /></div>
        </template>

        <v-app-bar-title class="home"><RouterLink to="/">Home</RouterLink></v-app-bar-title>

        <v-app-bar-title class="aboutUs">
          <RouterLink to="/about">About us</RouterLink></v-app-bar-title
        >
        <v-app-bar-title class="contact"
          ><RouterLink to="/contact-us">Contact us</RouterLink></v-app-bar-title
        >

        <v-spacer></v-spacer>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script src="./header.js"></script>
<style scoped>
.home {
  font-size: xx-large;
}
.contact {
  font-size: xx-large;
}
.aboutUs {
  font-size: xx-large;
}
.todoLogo {
  width: 60px;
  margin-left: 100px;
}
</style>
