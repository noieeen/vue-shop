<template>
  <div class="container">
    <h1 class="mt-3 ml-2">My Orders</h1>
    <div class="m-5">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Invoice</th>
            <th>Pusrchase On</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Upload Evidence</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in orders">
            <th>{{ index + 1 }}</th>
            <td>{{ i.invoice }}</td>
            <td>{{ i.pusrchaseDate }}</td>
            <td>{{ i.amount | currency("", 2) }}</td>
            <td><p class="text-danger font-weight-bold" v-if="i.status == 'Cancel'">{{i.status}}</p>
              <p class="text-success font-weight-bold" v-if="i.status == 'Success'">{{i.status}}</p>
              <p class="text-warning font-weight-bold" v-if="i.status == 'Panding'">{{i.status}}</p>
              <p class="text-primary font-weight-bold" v-if="i.status == 'Upload'">{{i.status}}</p>
              
            </td>
            <td>
              <div class="custom-file">
                <input
                  type="file"
                  @change="uploadPdf"
                  class="custom-file-input"
                  id="validatedCustomFile"
                  required
                />
                <label class="custom-file-label" for="validatedCustomFile"
                  >Choose file...</label
                >
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
              <div>
                <button class="btn btn-success col-md-12 mt-1" @click="cheO(i)" >Upload</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>
<script>
import exportPDF from "@/components/exportPDF.vue";
import { fb, db } from "../firebase";

const timestampToDate = require("timestamp-to-date");

export default {
  components: {
    exportPDF
  },
  data() {
    return {
      user: this.$store.state.currentUser,
      orders: [],
      order: {
        email: null,
        invoice: null,
        pusrchaseDate: null,
        amount: null,
        status: null,
        pdf:[]
      }
    };
  },
  // firestore() {
  //   return {
  //     orders: db.collection("orders")
  //   };
  // },
  created() {
    this.checkOrder();
    
  },

  methods: {
    cheO(order){
      console.log(order)
    },
    checkOrder() {
      const ordersRef = db.collection("orders");
      let allOrders = ordersRef
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let orderEmail = doc.data().user.email;
            let checkPdf = doc.data().user.pdf
            if (orderEmail == this.user.email) {
              let time = timestampToDate(doc.data().time, "dd/mm/yyyy");
              
              this.orders.push({
                email: orderEmail,
                invoice: "#" + doc.data().time,
                pusrchaseDate: time,
                amount: doc.data().totalPrice,
                status: doc.data().status,
                pdf:this.pdf
              });
            }
            //console.log(checkPdf);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    },
    uploadPdf(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("orders/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {
            // Observe state change events such as progress, pause, and resume
          },
          error => {
            // Handle unsuccessful uploads
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.order.pdf.push(downloadURL);
              console.log("File available at", downloadURL);
            });
          }
        );
        //console.log(e.target.files[0]);
      }
    },
 
  }
};
</script>
