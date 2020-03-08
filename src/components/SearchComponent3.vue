<template>
  <div>
    <!--absolute  v-model="value  :custom-label="name""-->
    <!-- <div class="inset-0 z-0" @click="modal = false"></div> -->
    <multiselect
      :options="products"
      @select="goToProduct"
      placeholder="🔍 S e a r c h . . ."
      label="name"
      track-by="name"
      class="multiselect-container multiselect custom-multiselect mr-md-5"
    ></multiselect>

    <!-- <div class="form-group has-search"> -->
    <!-- <span class="fa fa-search form-control-feedback"></span> -->
    <!-- <input
        type="text"
        class="form-control"
        autocomplete="off"
        v-model="currentProduct"
        @input="filterProducts"
        @focus="modal = true"
        placeholder="  Search"
    />-->
    <!-- </div> -->
    <!-- <div v-if="filteredStates && modal" class="z-10">
      <ul class="w-48 bg-gray-700 text-white">
        <li
          class="py-2 border-b cursor-pointer"
          v-for="filteredStates in filteredStates"
          @click="setState(filteredStates)"
        >
          {{ filteredStates }}
          
        </li>
      </ul>
    </div>-->
    <!-- <div v-if="filteredProducts && modal" class="z-10">
      <ul class="w-48 bg-gray-700 text-white">
        <li
          class="py-2 border-b cursor-pointer"
          v-for="product in products"
          @click="setProduct(filteredProducts)"
        >
          {{ product.name }}
        </li>
      </ul>
    </div>-->
  </div>
</template>
<script>
import { db } from "../firebase";
// import multiselect from "vue-multiselect"
import Multiselect from "vue-multiselect";
import P_DetailVue from "../views/P_Detail.vue";

import VueRouter from "vue-router";
// Vue.component('multiselect', Multiselect)

export default {
  props: {
    msg: String
  },
  components: { Multiselect },
  data() {
    return {
      state: "",
      modal: false,
      states: ["Florida", "Alabama", "Texas"],
      filteredStates: [],

      currentProduct: "",
      products: [],
      product: {
        name: null,
        description: null
      },
      filteredProducts: []
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  // mounted() {
  //   this.setProduct();
  //   if (this.currentProduct.length == 0) {
  //     this.filteredProducts = this.currentProduct;
  //   }
  // },
  methods: {
    filterProducts() {
      this.filteredProducts = this.products.filter(currentProduct => {
        // console.log(currentProduct.description)

        return (
          currentProduct.name
            .toLowerCase()
            .indexOf(this.currentProduct.toLowerCase()) != -1
        );
        // return currentProduct.description.toLowerCase().indexOf(this.currentProduct.toLowerCase()) != -1
      });
    },
    setProduct(currentProduct) {
      this.currentProduct = currentProduct;
      this.modal = false;
    },
    goToProduct(selectedOption) {
      let p = selectedOption.name;
      return this.$router.replace({
        name: "P_Detail",
        params: { id: p, name: p,
        description:selectedOption.description }
      });
    
      //console.log(selectedOption.description)
      
    }
    // watch: {
    //   product() {
    //     this.filteredProducts();
    //   }
    // }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.has-search .form-control {
  padding-left: 2.375rem;
}
.has-search .form-control-feedback {
  position: absolute;
  z-index: 5;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}
.multiselect-container {
  width: 100% !important;
}
</style>

<!-- class = cursor-pointer เปลี่ยนเป็นมือ -->
