<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="navbar-brand" href="#">COOLpRINTER</div>
      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
           <li class="nav-item">
            <router-link to="/user/profile" class="nav-link" href="#">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/products" class="nav-link" href="#">Products</router-link>
          </li>   
         
          <li class="nav-item">
            <router-link to="/user/editorders" class="nav-link" href="#">Edit Orders</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/checkout" class="nav-link" href="#">Checkout</router-link>
          </li>         
            
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a 
          class="mr-5">
            <!-- <search-component/> -->
          </a>
          
      
          <a
            class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
            data-toggle="modal"
            data-target="#miniCart">
            <i class="fas fa-cart-plus"></i>
          </a>
           <a
            class="btn custom-btn btn-danger my-2 my-sm-2"
           @click="logout()"
          >Log out</a>
        </form>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>

import SearchComponent from './SearchComponent3'
import { fb , db } from "../firebase";

export default {
  name: "NavbarUser",
  props: {
    msg: String
  },
  components: {
    SearchComponent
  },
  methods:{
       logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 750px) {
  .navbar.custom-nav {
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #fff !important;
  }
}
.fa-cart-plus{
  color: #fff;
}
.btn-danger{
  color: #fff;
}
</style>
