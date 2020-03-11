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
            <td><p class="text-warning">Panding</p></td>
            <td>
                <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-success " @click="checkOrder">checkOrder</button>
  </div>
</template>
<script>
import exportPDF from "@/components/exportPDF.vue";
import { fb,db } from "../firebase";

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
        status: null
      }
    };
  },
  // firestore() {
  //   return {
  //     orders: db.collection("orders")
  //   };
  // },
  order() {},

  methods: {
    reset() {
      this.orders = [];
    },
    checkOrder() {
      // if (this.user.email == orders.order.email) {
      //   console.log(this.user.email);
      // }else{
      //   console.log('shit!!')
      // }

      //  var orderEmail = "";
      //   let userRef = db.collection("Orders").doc(user.email).get().then(doc => {
      //       if (!doc.exists) {
      //         console.log("No such document!");
      //       } else {
      //         //console.log("orderEmail :", doc.data().orderEmail);
      //         orderEmail = doc.data().email;
      //         //console.log("+>", orderEmail);
      //         //let name = doc.data().name
      //         // console.log('user name: ',name)
      //         //console.log('email',{name:name,email:this.email,orderEmail:orderEmail})
      //         // this.$store.commit('currentUser',{name:name,email:this.email,orderEmail:orderEmail})

      //         if (orderEmail == "user") {
      //           console.log("go to user");
      //           this.$router.replace("user");
      //         }else if (orderEmail == "admin") {
      //           console.log("go to admin");
      //           this.$router.replace("admin");
      //         }
      //       }
      //     })
      //     .catch(err => {
      //       console.log("Error getting document", err);
      //     });

      // let ordersRef = db.collection('orders');
      // let query = ordersRef.where(user, '==', this.user.email).get()
      //   .then(snapshot => {
      //     if (snapshot.empty) {
      //       console.log('No matching documents.');
      //       return;
      //     }

      //     snapshot.forEach(doc => {
      //       console.log(doc.id, '=>', doc.data());
      //     });
      //   })
      //   .catch(err => {
      //     console.log('Error getting documents', err);
      //   });

      const ordersRef = db.collection("orders");
      let allOrders = ordersRef
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let orderEmail = doc.data().user.email;
            if (orderEmail == this.user.email) {
              //console.log(doc.id, "=>", doc.data().items);

              this.order.email = orderEmail;
              this.order.invoice = "#" + doc.data().time;
              this.order.pusrchaseDate = doc.data().time;
              this.order.amount = doc.data().totalPrice;
              this.order.status = doc.data().status;

              // this.order.email = orderEmail;
              // this.order.invoice = "#" + doc.data().time;
              // this.order.pusrchaseDate = doc.data().time;
              // this.order.amount = doc.data().totalPrice;
              // this.order.status = doc.data().status;
            }
            //this.orders.push(this.order)

            this.orders.push(this.order);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });

      console.log(this.orders);
      reset();
    },
    uploadImage(e) {
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
              this.product.images.push(downloadURL);
              console.log("File available at", downloadURL);
            });
          }
        );
        //console.log(e.target.files[0]);
      }
    }
  }
};
</script>
