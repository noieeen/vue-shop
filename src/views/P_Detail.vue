<template>
  <div class="container h-100 p-5 mx-auto bg-light">
    <div class="float-left">
      <i class="fa fa-arrow-circle-left mr-2 py-3" aria-hidden="true"></i>
      <router-link to="/products">Back to Products</router-link>
    </div>
    <div class="row h-100 justify-content-center align-items-center">
      <i class="fa fa-shopping-bag fa-2x mr-2"></i>
      <h1 class="">Product Detail</h1>

      <!-- <div class="btn btn-outline-info">
        {{ detail }} {{ $route.params.name }}
      </div> -->
      <br />
      <br />
      <div>
        <h3 class>{{ detail }}</h3>
        <h3>{{ product.name }}</h3>
        <!-- <carousel :perPage="1">              
              <slide v-for="(image, index) in product.img">
                <img :src="image" class="card-img-top" alt="..." width="250px" @click="we(product)" />
              </slide>
            </carousel> -->
        <!-- <div >
              {{product.img}}
            </div> -->
        <div v-html="product.description"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
export default {
  props: ["detail"],
  data() {
    return {
      product: {
        name: this.$route.params.name,
        //img:this$route.params.img,
        description: this.$route.params.description
      }
    };
  },
  methods: {
    firestore() {
      return {
        products: db.collection("products")
      }
    }
  },computed:{
    productDetail(){
      
    }
  }
};
</script>
<style>
.fa-shopping-bag {
  color: coral;
}
.fa-arrow-circle-left {
  color: #1e88e5;
}
</style>
