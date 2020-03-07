<template>
  <div class="user">
    <Navbar/>
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center p-4">
        <h1>user session</h1>
      </div>
      
    </div> 
    <!-- <mini-cart></mini-cart> -->
    <login></login>
  </div>

</template>
<script>
import Navbar from "@/components/NavbarUser.vue";
import Login from "@/components/Login.vue";
export default {
  name: "user",
  components: { Navbar,Login },
  methods:{
    
  }
};
</script>
