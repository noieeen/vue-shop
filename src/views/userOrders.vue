<template>
  <div class="container">
    <h1 class="mt-3 ml-2">My Orders</h1>
    <div class="mt-4">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Invoice</th>
            <th>Pusrchase On</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Upload Evidence</th>
            <th>Upload Pay-in Slip</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in orders">
            <th>{{ index + 1 }}</th>
            <td>{{ i.invoice }}</td>
            <td>{{ i.date }}</td>
            <td>{{ i.amount | currency("", 2) }}</td>
            <td>
              <p
                class="text-danger font-weight-bold"
                v-if="i.status == 'Cancel'"
              >
                {{ i.status }}
              </p>
              <p
                class="text-success font-weight-bold"
                v-if="i.status == 'Success'"
              >
                {{ i.status }}
              </p>
              <p
                class="text-warning font-weight-bold"
                v-if="i.status == 'Panding'"
              >
                {{ i.status }}
              </p>
              <p
                class="text-primary font-weight-bold"
                v-if="i.status == 'Upload'"
              >
                {{ i.status }}
              </p>
              <div
                style="white-space:pre;"
                class="text-info"
                v-if="i.haveEvidence && i.status == 'Upload'"
              >
                <i class="fas fa-check-circle mr-1"></i>Evidence
              </div>
              <div
                style="white-space:pre;"
                class="text-secondary"
                v-if="!i.haveEvidence && i.status == 'Upload'"
              >
                <i class="far fa-circle mr-1"></i> Evidence
              </div>
              <div
                style="white-space:pre;"
                class="text-secondary"
                v-if="!i.haveSlip && i.status == 'Upload'"
              >
                <i class="far fa-circle mr-1"></i> Pay-in Slip
              </div>
              <div
                style="white-space:pre;"
                class="text-info"
                v-if="i.haveSlip && i.status == 'Upload'"
              >
                <i class="fas fa-check-circle mr-1"></i> Pay-in Slip
              </div>
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
                  >Choose file... (Quatotion)</label
                >
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
              <div>
                <button
                  class="btn btn-success col-md-12 mt-1"
                  @click="updateOrder(i)"
                >
                  Upload
                </button>
              </div>
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
                  >Choose file... (Pay-in Slip)</label
                >
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
              <div>
                <button
                  class="btn btn-info col-md-12 mt-1"
                  @click="updateSlip(i)"
                >
                  Upload
                </button>
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
      // orderfs: [],
      order: {
        email: null,
        invoice: null,
        pusrchaseDate: null,
        amount: null,
        status: null,
        pdf: [],
        paySlip: [],
        haveEvidence: null,
        haveSlip: null
      }
    };
  },
  // firestore() {
  //   const user = fb.auth().currentUser;
  //   return {
  //     orders: db.collection("orders").doc(user.uid)
  //   };
  // },
  created() {
    this.checkOrder();
    //console.log(this.orderfs);
  },

  methods: {
    updateOrder(item) {
       if (item.haveSlip && item.haveEvidence) {
         const ordersRef = db
        .collection("orders")
        .doc(item.key)
        .update({
          evidencePDF: this.order.pdf,
          haveEvidence: 1,
          status: "Panding"
        })
        .then(function() {
          console.log("sss");
        });
       }else{
           const ordersRef = db
        .collection("orders")
        .doc(item.key)
        .update({
          evidencePDF: this.order.pdf,
          haveEvidence: 1
        })
        .then(function() {
          console.log("sss");
        });
       }
      
      this.checkOrder();
    },
    updateSlip(item) {
      if (item.haveSlip && item.haveEvidence) {
        const ordersRef = db
          .collection("orders")
          .doc(item.key)
          .update({
            slipPDF: this.order.pdf,
            haveSlip: 1,
            status: "Panding"
          })
          .then(function() {
            console.log("sss1231");
          });
      } else {
        const ordersRef = db
          .collection("orders")
          .doc(item.key)
          .update({
            slipPDF: this.order.pdf,
            haveSlip: 1
          })
          .then(function() {
            console.log("sss");
          });
      }

      this.checkOrder();
    },
    cheO(order) {
      console.log(order);
      console.log(this.order.pdf);
    },
    checkOrder() {
      const ordersRef = db.collection("orders").orderBy("time", "desc");
      let allOrders = ordersRef
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            //console.log(doc.id)
            let orderEmail = doc.data().user.email;
            let checkPdf = doc.data().user.pdf;
            if (orderEmail == this.user.email) {
              let time = timestampToDate(doc.data().time, "dd/mm/yyyy");

              this.orders.push({
                key: doc.id,
                email: orderEmail,
                invoice: doc.data().invoice,
                date: doc.data().date,
                amount: doc.data().totalPrice,
                status: doc.data().status,
                haveEvidence: doc.data().haveEvidence,
                haveSlip: doc.data().haveSlip
              });
            }
            //console.log(checkPdf);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    },
    // checkOrder() {
    //   // for (let i in this.orders) {
    //   //   console.log(orders[i])
    //   //   // if(this.user.email == i.email){
    //   //   //   console.log(i)
    //   //   // }
    //   //   // else{
    //   //   //   console.log('อีสัส')
    //   //   // }
    //   // }

    // },
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
              this.order.pdf = downloadURL;
              console.log("File available at", downloadURL);
            });
          }
        );
      }
      //this.$firestore.products.doc(key).update({})
    }
  }
};
</script>
