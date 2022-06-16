<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {
    Navbar,
  }
}
</script>


<template>
  <v-app>
    <v-main>
      <Navbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="css">

* {
  text-decoration: none;
}

.home, .register, .login {
  background-image: linear-gradient(to right bottom, #fd3a73, #ff5e61, #ff7f54, #ff9f4f, #ffbc55);
  height: 100vh;
  color: #ffff;
}

.error {
  margin-top: 10px;
  color: rgb(94, 1, 1);
}

.v-margin-top {
  margin-top: 2rem;
  padding-top: 2rem;
}

.text-center {
  text-align: center;
}

.v-center {
  margin-top: 5rem;
}

</style>