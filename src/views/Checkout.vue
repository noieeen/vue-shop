<template>
  <div class="checkout">
    <Navbar></Navbar>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-9">
          <h4 class="py-4">Checkout Page</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" class="media">
              <img :src="item.productImage" width="80px" class="align-self-center mr-5" alt />
              <div class="media-body">
                <h5 class="mt-0">
                  {{item.productName}}
                  <span
                    class="float-right mr-5 cursor-pointer"
                    @click="$store.commit('removeFromCart',item)"
                  >X</span>
                </h5>
                <p class="mt-0">
                  {{item.productPrice | currency("THB", 2, {
                  symbolOnLeft: false,
                  spaceBetweenAmountAndSymbol: true
                  })
                  }}
                </p>
                <p class="mt-0">Quantity : {{item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <p>Total Price : {{ this.$store.getters.totalPrice | currency("THB", 2, {
                  symbolOnLeft: false,
                  spaceBetweenAmountAndSymbol: true
                  }) 
                  }}</p>
          <button class="btn custom-btn btn-outline-info m-2">Checkout Order</button>
        </div>
      </div>
      <div class="d-flax float-right p-5">
        <exportPDF>
          
        </exportPDF>
      </div>
      
    </div>
    
  </div>
</template>

<script>

import exportPDF from '@/components/exportPDF.vue'

export default {
  components:{
    exportPDF,
  }
}
</script>