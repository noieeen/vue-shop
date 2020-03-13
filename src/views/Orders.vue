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
                <th>Action</th>
                <th>Acception</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products">
                <td>{{product.user.email}}</td>
                <td>{{product.totalPrice|currency('',2)}}</td>
                <td>
                  <div class="mr-1">
                    <button class="btn btn-success mr-1" @click="editProduct(product)">Confirm</button>                  
                    <button class="btn btn-danger" @click="deleteProduct(product)">Eject</button>
                  </div>
                  </td>
                  <td>
                  <div>
                    <button class="btn btn btn-outline-info mr-1" @click="getQuotation(product)">Quotation</button>
                    <button class="btn btn btn-outline-success" @click="getAccption(product)">Acception</button>
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
      tag: null
    };
  },
  firestore() {
    return {
      products: db.collection("orders"),
      orders: db.collection("orders")
    };
  },
  methods: {

    deleteImage(img,index){
      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index,1);
      image.delete().then(()=>{
        console.log('Image deleted');
      }).catch((error)=>{
        console.log('Error occurred');
      });
    },

    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("products/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on("state_changed",snapshot => {
            // Observe state change events such as progress, pause, and resume
          },
          error => {
            // Handle unsuccessful uploads
          },() => {
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

         this.$firestore.products.doc(product['.key']).update({
           name:this.product.name,
           description:this.product.description,
           price:this.product.price,
           tags:this.product.tags,
           images:this.product.images
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

  },

  create() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

</style>
