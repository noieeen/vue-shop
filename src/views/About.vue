<template>
  <div class="about">
    <Intro/>
    <Navbar></Navbar>
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <h1 style="font-size:60px">About Us</h1>
      </div>
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="https://www.img.in.th/images/82a6c2da282af437cdb49fa9325a6ad3.png" alt="82a6c2da282af437cdb49fa9325a6ad3.png" width="400">
        </div>
        <div class="col-md-6">
          <h3 style="font-size:35px">About us</h3>
          <p style="font-size:25px">
            บริษัทเราขายเครื่องพิมพ์ขนาดใหญ่ โดยมีทั้ง Multifunction Printer, Digital Printer, Indrustrial Printer จัดจำหน่ายให้ทั้งผู้ค้ารายย่อย องค์กรต่างๆ และโรงงานอุตสาหกรรม 
          </p>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
export default {
  name: "About",
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