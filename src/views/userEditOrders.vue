<template>
  <div class="checkout">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-9">
          <h4 class="py-4">Edit Order</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" class="media">
              <img :src="item.productImage" width="80px" class="align-self-center mr-5" alt />
              <div class="media-body">
                <h5 class="mt-0">
                  {{ item.productName }}
                  <span
                    class="float-right mr-5 cursor-pointer removeItem"
                    @click="$store.commit('removeFromCart', item)"
                  >X</span>

                  <!-- <button class=" cursor-pointer">X</button> -->
                  <div class="float-right py-1 mr-5 ml-1">
                    <div class="btn-group-vertical">
                      <button class="btn btn-info custom-btn" @click="increaseProduct(item)">+</button>
                      <button class="btn btn-danger custom-btn" @click="reducrProduct(item)">-</button>
                    </div>
                  </div>
                </h5>
                <p class="mt-0">
                  {{
                  item.productPrice
                  | currency("THB", 2, {
                  symbolOnLeft: false,
                  spaceBetweenAmountAndSymbol: true
                  })
                  }}
                </p>
                <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3 mt-4">
          <p>
            Total Price :
            {{
            this.$store.getters.totalPrice
            | currency("THB", 2, {
            symbolOnLeft: false,
            spaceBetweenAmountAndSymbol: true
            })
            }}
          </p>
          
          <router-link to="/user/checkout" tag="button" class="btn custom-btn btn-outline-info m-2">Checkout Order</router-link>
        </div>
      </div>
      <div class="d-flax float-right p-5">
        <div class="btn btn-outline-danger" @click="clear">Clear Cart</div>
        <!-- <router-link to="/user/checkout" tag="button" class="btn btn-primary">To Checkout</router-link> -->
      <router-link to="/user/products" tag="button" class="btn custom-btn btn-success m-2">Back To Products</router-link>

      </div>
    </div>
  </div>
</template>

<script>
import exportPDF from "@/components/exportPDF.vue";

export default {
  components: {
    exportPDF
  },data(){
    return{
      productQuantity:this.$store.state.cart
    }
  },
  methods: {
    increaseProduct(item) {
      //this.$store
      this.$store.commit('addToCart',item)
      console.log(item)
    },
    reducrProduct(item) {
      this.$store.commit('reduceFromCart',item)
      
    },
    clear(){
      this.$store.commit('resetCart')
    }
  }
};
</script>
<style >
.removeItem {
  color: red;
}
</style>