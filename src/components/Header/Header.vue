<template>
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <div><img src="/src/assets/images/todo-logo.jpg" alt="" class="todoLogo" /></div>
        </template>

        <v-app-bar-title
          ><span><RouterLink class="home" to="/">Home</RouterLink></span>

          <span><RouterLink class="aboutUs" to="/about">About us</RouterLink></span>

          <span><RouterLink class="contact" to="/contact-us">Contact us</RouterLink></span>
        </v-app-bar-title>

        <template v-slot:append> </template>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<style scoped>
.home {
  font-size: x-large;
}
.contact {
  font-size: x-large;
  margin-left: 30px;
}
.aboutUs {
  font-size: x-large;
  margin-left: 30px;
}
.todoLogo {
  width: 60px;
  margin-left: 100px;
}
</style>
