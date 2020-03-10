<template>
  <div class="container">
    <h1 class="mt-3 ml-2">Checkout</h1>
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
            <td>
              {{ i.productPrice | currency("", 2, {
              symbolOnLeft: false,
              spaceBetweenAmountAndSymbol: true
              })}}
            </td>
            <td>
              {{ i.productPrice * i.productQuantity | currency("", 2, {
              symbolOnLeft: false,
              spaceBetweenAmountAndSymbol: true
              })}}
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Price</th>
            <th>
              {{totalPrice | currency("THB", 2, {
              symbolOnLeft: false,
              spaceBetweenAmountAndSymbol: true
              })}}
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="float-right mr-5 btn-group">
      <exportPDF></exportPDF>
      <button class="btn btn-success ml-2" @click="confirm">Comfirm Checkout</button>
    </div>
  </div>
</template>
<script>
import exportPDF from "@/components/exportPDF.vue";
import { db } from "../firebase";

export default {
  components: {
    exportPDF
  },
  data() {
    return {
      item: this.$store.state.cart,
      totalPrice: this.$store.getters.totalPrice,

      orders: [],
      order: {
        user: this.$store.state.currentUser,
        items: this.$store.state.cart,
        totalPrice: this.$store.getters.totalPrice,
        time: Date.now()
      }
    };
  },
  firestore() {
    return {
      orders: db.collection("orders")
    };
  },
  methods: {
    confirm() {
      this.$firestore.orders.add(this.order);
      this.$store.commit("resetCart");
      this.item = this.$store.state.cart;
      this.totalPrice = this.$store.getters.totalPrice;

      // console.log("email", this.order.currentUser.email);
      // console.log("item", Date.now());
    }
  }
};
</script>
