<template>
  <div class="container">
    <h1 class="mt-3 ml-2">user checkout</h1>
    <div class="m-5">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in item">
            <th>{{ index + 1 }}</th>
            <td>{{ i.productName }}</td>
            <td>X {{ i.productQuantity }}</td>
            <td>{{ i.productPrice }}</td>
            <td>{{ i.productPrice * i.productQuantity }}</td>
          </tr>
        </tbody>
         <thead>
          <tr>     
            <th></th>
            <th></th> 
            <th></th> 
             <th>Total Price</th>
            <th>{{totalPrice}}</th>    
          </tr>
        </thead>
      </table>
    </div>
    <div class="float-right mr-5">
      <exportPDF> </exportPDF>
      <button class="btn btn-success col mt-2">Checkout</button>
    </div>
  </div>
</template>
<script>
import exportPDF from "@/components/exportPDF.vue";

export default {
  components: {
    exportPDF
  },
  data() {
    return {
      item: this.$store.state.cart,
      totalPrice: this.$store.getters.totalPrice
    };
  },
  methods: {
    firestore() {
      return {
        products: db.collection("products")
      };
    },
    createProductList() {}
  }
};
</script>
