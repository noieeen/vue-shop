<template>
  <div class="contactus">
    <Intro/>
    <Navbar></Navbar>
        <div class="container h-100">
             <div class="row p-5 h-100 justify-content-center align-items-center">
        <h1>Contact Us</h1>
      </div>
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="https://sv1.picz.in.th/images/2020/03/10/Q02AJW.png" alt="Q02AJW.png" width="700">
        </div>
        <div class="col-md-6">
          
          <pre style="font-size:20px">


        Email : darin_ploy@hotmail.com

        Tel : (+66)83-030-3837
            
        Address : 6 Rajamankha Nai Rd.,
                  Amphoe Muang, Nakhon Pathom
                  73000
          </pre>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
export default {
  name: "ContactUs",
  props: {
    msg: String
  },components:{
    Intro
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>