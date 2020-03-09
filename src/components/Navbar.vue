<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand" href="#">COOLpRINTER</router-link>
      
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
            <router-link to="/" class="nav-link" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" href="#">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactus" class="nav-link" href="#">Contact Us</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <search-component/>
          <a
            class="btn btn-outline-primary my-2 my-sm-2"
            type="submit"
            data-toggle="modal"
            data-target="#login"
          >Log In / Sign Up</a>
          <a
            class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
            data-toggle="modal"
            data-target="#miniCart">
            <i class="fas fa-cart-plus"></i>
          </a>
        </form>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>

import SearchComponent from './SearchComponent3'

export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components: {
    SearchComponent
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
.btn-outline-primary{
  color: #fff;
}
</style>
