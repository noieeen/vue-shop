<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 jusify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Orders Page</h3>
            <p>Manage Your Order</p>
          </div>
          <div class="col-md-6">
            <img src="/img/productsPage.png" alt class="img-fluid" />
          </div>

          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <hr />

      <div class="product-test">
        <h3 class="d-inline-block">Orders list</h3>

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Amount</th>
                <th>Stutas</th>
                <th>Action</th>
                <th>Acception</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders">
                <td>{{ order.email }}</td>
                <td>{{ order.amount | currency("", 2) }}</td>
                <td>
                  <p
                    class="text-danger font-weight-bold"
                    v-if="order.status == 'Cancel'"
                  >
                    {{ order.status }}
                  </p>
                  <p
                    class="text-success font-weight-bold"
                    v-if="order.status == 'Success'"
                  >
                    {{ order.status }}
                  </p>
                  <p
                    class="text-warning font-weight-bold"
                    v-if="order.status == 'Panding'"
                  >
                    {{ order.status }}
                  </p>
                  <p
                    class="text-primary font-weight-bold"
                    v-if="order.status == 'Upload'"
                  >
                    {{ order.status }}
                  </p>
                  <div
                    style="white-space:pre;"
                    class="text-info"
                    v-if="order.haveEvidence && order.status == 'Upload'"
                  >
                    <i class="fas fa-check-circle mr-1"></i>Evidence
                  </div>
                  <div
                    style="white-space:pre;"
                    class="text-secondary"
                    v-if="!order.haveEvidence && order.status == 'Upload'"
                  >
                    <i class="far fa-circle mr-1"></i> Evidence
                  </div>
                  <div
                    style="white-space:pre;"
                    class="text-secondary"
                    v-if="!order.haveSlip && order.status == 'Upload'"
                  >
                    <i class="far fa-circle mr-1"></i> Pay-in Slip
                  </div>
                  <div
                    style="white-space:pre;"
                    class="text-info"
                    v-if="order.haveSlip && order.status == 'Upload'"
                  >
                    <i class="fas fa-check-circle mr-1"></i> Pay-in Slip
                  </div>
                </td>
                <td>
                  <div class="mr-1">
                    <button
                      class="btn btn-success mr-1"
                      @click="editProduct(order)"
                    >
                      Confirm
                    </button>
                    <button class="btn btn-danger" @click="ejectProduct(order)">
                      Eject
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <button
                      v-if="order.evidencePDF"
                      class="btn btn btn-outline-info mr-1"
                      @click="getQuotation(order)"
                    >
                      Quotation
                    </button>
                    <button
                      v-if="order.slipPDF"
                      class="btn btn btn-outline-success"
                      @click="getAccption(order)"
                    >
                      Acception
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";

export default {
  name: "Products",
  components: { VueEditor },
  props: {
    msg: String
  },
  data() {
    return {
      orders: [],
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      },
      activeItem: null,
      modal: null,
      tag: null,
      order: {
        email: null,
        invoice: null,
        pusrchaseDate: null,
        amount: null,
        status: null,
        pdf: [],
        paySlip: [],
        haveEvidence: null,
        haveSlip: null,
        evidencePDF: null,
        slipPDF: null
      }
    };
  },
  created() {
    this.getOrder();
    //console.log(this.orderfs);
  },
  // firestore() {
  //   console.log(db.collection("orders"));
  //   return {
  //     orders: db.collection("orders")
  //   };
  // },
  methods: {
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index, 1);
      image
        .delete()
        .then(() => {
          console.log("Image deleted");
        })
        .catch(error => {
          console.log("Error occurred");
        });
    },

    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("products/" + file.name);
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
    },

    updateProduct(product) {
      this.$firestore.products.doc(product[".key"]).update({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        tags: this.product.tags,
        images: this.product.images
      });

      Toast.fire({
        type: "success",
        title: "Updated  successfully"
      });

      $("#product").modal("hide");
    },

    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.products.doc(doc[".key"]).delete();
          // console.log(doc['.key']);

          Swal.fire("Deleted!", "Deleted successfully.", "success");
          // Toast.fire({           //***ดี */
          // icon: 'success',
          // title: 'Signed in successfully'
          // });
        }
      });
    },
    readData() {},
    editProduct(order) {
      const ordersRef = db
        .collection("orders")
        .doc(order.key)
        .update({
          status: "Success"
        })
        .then(function() {
          console.log("sss");
        });
    },
    ejectProduct(order) {
      this.$firestore.orders.doc(order.key).update({
        status: "Cancel"
      });
    },
    getOrder() {
      const ordersRef = db.collection("orders").orderBy("time", "desc");
      let allOrders = ordersRef
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.orders.push({
              key: doc.id,
              email: doc.data().user.email,
              invoice: doc.data().invoice,
              date: doc.data().date,
              amount: doc.data().totalPrice,
              status: doc.data().status,
              haveEvidence: doc.data().haveEvidence,
              haveSlip: doc.data().haveSlip,
              evidencePDF: doc.data().evidencePDF,
              slipPDF: doc.data().slipPDF
            });

            //console.log(checkPdf);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    },
    getQuotation(order) {
      window.open(order.evidencePDF, "_blank");
    },
    getAccption(order) {
      window.open(order.slipPDF, "_blank");
    }
  },

  create() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
</style>
