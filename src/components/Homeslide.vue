<template>
  <div class="home-slide">
    <h1 class="text-center m-5">Welcome</h1>
    <div class="container jusify-content-center">

      <!-- <carousel :perPage="1">
        <slide>
          <img
          src="/img/slide1.jpg"
          alt="Slide #1"
          width="1000px"
          >
        </slide>
        <slide>
          <img
          src="/img/slide1.jpg"
          alt="Slide #2"
          width="1000px"
          >
        </slide>
        <slide>
          <img
          src="/img/slide1.jpg"
          alt="Slide #3"
          width="1000px"
          >
        </slide>
      </carousel> -->
     <div id="carouselId" class="carousel slide" data-ride="carousel">
       <ol class="carousel-indicators">
         <li data-target="#carouselId" data-slide-to="0" class="active"></li>
         <li data-target="#carouselId" data-slide-to="1"></li>
         <li data-target="#carouselId" data-slide-to="2"></li>
       </ol>
       <div class="carousel-inner " role="listbox">
           
         <div class="carousel-item active align-items-center">
           <img src="/img/slide1.jpg" class="d-block w-100" alt="First slide" width="1000px">
         <div class="carousel-caption d-none d-md-block">
             <h4>product</h4>
         </div>
         </div>
         <div class="carousel-item">
           <img src="/img/slide1.jpg" class="d-block w-100" alt="Second slide" width="1000px">
         </div>
         <div class="carousel-item">
           <img src="/img/slide1.jpg" class="d-block w-100" alt="Third slide" width="1000px">
         </div>
         
       </div>
       <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
       </a>
     </div>
     <dir class="d-flex justify-content-center mt-4 ">
       <router-link to="/products" tag="button" class="btn custom-btn btn-outline-success mr-3">Products</router-link>
       <router-link to="/products" tag="button" class="btn custom-btn btn-outline-info mr-3">Exploer</router-link>
     </dir>
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
