<template>
  <div class="userProducts">
    

    <products-list></products-list>

 
    <mini-cart></mini-cart>
  </div>
</template>

<script>

import Products from "@/sections/Products.vue";



export default {
  name: "products",
  components: {
    Products,
    
  }
};
</script>
<style>

</style>
