<template>
  <v-card class="mx-auto" color="#01579B" max-width="448">
    <v-layout>
      <v-app-bar color="#01579B">
        <template v-slot:image>
          <v-img
            gradient="(45deg, #efefef 25%, rgba(239, 239, 239, 0) 25%, rgba(239, 239, 239, 0) 75%, #efefef 75%, #efefef), linear-gradient(45deg, #efefef 25%, rgba(239, 239, 239, 0) 25%, rgba(239, 239, 239, 0) 75%, #efefef 75%, #efefef)"
          ></v-img>
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
  font-size: x-large;
}
.contact {
  font-size: x-large;
}
.aboutUs {
  font-size: x-large;
}
.todoLogo {
  width: 60px;
  margin-left: 100px;
}
</style>
