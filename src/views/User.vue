<template>
  <div class="user">
    <Navbar/>
    <div class="container h-100">
      <h1>user</h1>
    </div> 
    <!-- <mini-cart></mini-cart> -->
  </div>

</template>
<script>
import Navbar from "@/components/NavbarUser.vue";
export default {
  name: "user",
  components: { Navbar }
};
</script>
