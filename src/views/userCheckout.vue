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
              {{
                i.productPrice
                  | currency("", 2, {
                    symbolOnLeft: false,
                    spaceBetweenAmountAndSymbol: true
                  })
              }}
            </td>
            <td>
              {{
                (i.productPrice * i.productQuantity)
                  | currency("", 2, {
                    symbolOnLeft: false,
                    spaceBetweenAmountAndSymbol: true
                  })
              }}
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
              {{
                totalPrice
                  | currency("THB", 2, {
                    symbolOnLeft: false,
                    spaceBetweenAmountAndSymbol: true
                  })
              }}
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="float-right mr-5 btn-group">
      <router-link to="/user/editOrders" tag="button" class="btn btn-info"
        >Back To Edit Orders</router-link
      >
      <button class="btn btn-success ml-2" @click="confirm">
        Comfirm Order <exportPDF> </exportPDF>
      </button>
    </div>
  </div>
</template>
<script>
import exportPDF from "@/components/exportPDF.vue";
import { db } from "../firebase";

const timestampToDate = require("timestamp-to-date");

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
        invoice: "#" + Date.now(),
        time: Date.now(),
        status: "Upload",
        date: timestampToDate(Date.now(), "dd/mm/yyyy")
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
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Confirm it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.orders.add(this.order);
          this.$store.commit("resetCart");
          this.item = this.$store.state.cart;
          this.totalPrice = this.$store.getters.totalPrice;
          Toast.fire({
            icon: "success",
            title: "Order Comfirmed"
          });
          Swal.fire("Comfirmed!!", "Order Comfirmed!!.", "success");
        }
      });

      // console.log("email", this.order.currentUser.email);
      // console.log("item", Date.now());
    }
  }
};
</script>
