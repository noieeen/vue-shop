<template>
  <div class="home-slide">
    <h1 class="text-center mt-5 z-99 welcome display-1">Welcome</h1>
    <h2 class="text-center mb-5 z-99 welcome ">COOLpRINTER</h2>
    <div class="container jusify-content-center ">
      <div id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner " role="listbox">
          <div class="carousel-item active align-items-center">
            <img
              src="https://www.img.in.th/images/4d8ab5b6fbbb2723c6e2acf04eeba485.jpg"
              class="d-block w-100"
              alt="First slide"
              width="1000px"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h4>product</h4> -->
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.img.in.th/images/5da73220bbe885df89600faf8272234f.jpg"
              class="d-block w-100"
              alt="Second slide"
              width="1000px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.img.in.th/images/47a3df6a0a8740bd906186acaff54684.jpg"
              class="d-block w-100"
              alt="Third slide"
              width="1000px"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="button d-flex justify-content-center mt-4 z-99">
        <router-link
          to="/products"
          tag="button"
          class="btn custom-btn btn-info mr-3 mt-2 col-md-6 "
          >Products</router-link>
          
        
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homeslide",
  props: {
    msg: String
  }
};
</script>
<style>
.button {
  position: relative;
}
.welcome{
  position: relative;
}
.h2{
  color: white;
}
</style>
