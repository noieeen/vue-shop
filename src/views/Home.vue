<template>
  <div class="home">
    <Intro />
    <Navbar></Navbar>
    <Homeslide />
    <div class="container h-100 pt-56 pb-64">
      <div
        class="row p-5 h-100 justify-content-center align-items-center"
      ></div>
    </div>
    
    <login></login>
    <!-- <mini-cart></mini-cart> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Homeslide from "@/components/Homeslide.vue";
//import Productslist from "@/sections/ProductList.vue";
import Login from "@/components/Login.vue";

import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
    Hero,
    Products,
    Login,
    Homeslide,
    Intro
  }
};
</script>
<style></style>
