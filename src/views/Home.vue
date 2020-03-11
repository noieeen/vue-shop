<template>
  <div class="home">
    <Intro />
    <Navbar></Navbar>

    <div class="container h-100 pt-56 pb-64">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          
        </div>
        <div class="col-md-6">
          <!-- <h3>Learn More About us</h3> -->
          <p style="font-size:25px">
            บริษัทเราขายเครื่องพิมพ์ขนาดใหญ่ โดยมีทั้ง Multifunction Printer,
            Digital Printer, Indrustrial Printer จัดจำหน่ายให้ทั้งผู้ค้ารายย่อย
            องค์กรต่างๆ และโรงงานอุตสาหกรรม
          </p>
          <router-link to="/about" tag="button" class="btn custom-btn btn-primary mr-4">About Us</router-link>
        </div>
      </div>
    </div>
    <Homeslide />
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
