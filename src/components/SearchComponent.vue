<template>
  <div class="flex flex-col items-center">
    <!--absolute-->
    <div class="inset-0 z-0" @click="modal = false"></div>
    <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        class="form-control"
        autocomplete="off"
        v-model="state"
        @input="filterStates"
        @focus="modal = true"
        placeholder="  Search"
      />
    </div>
    <div v-if="filteredStates && modal" class="z-10">
      <ul class="w-48 bg-gray-700 text-white">
        <li
          class="py-2 border-b cursor-pointer"
          v-for="filteredStates in filteredStates"
          @click="setState(filteredStates)"
        >
          {{ filteredStates }}
          
        </li>
      </ul>
    </div>
    <!-- <div v-if="filteredStates && modal" class="z-10">
      <ul class="w-48 bg-gray-700 text-white">
        <li
          class="py-2 border-b cursor-pointer"
          v-for="product in products"
          @click="setState(filteredStates)"
        >
          {{ product.name }}
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";

export default {
  props: {
    msg: String
  },
  data() {
    return {
      state: "",
      modal: false,
      states: ["Florida", "Alabama", "Texas"],
      filteredStates: [],

      products: [],
      product: {
        name: null,
        description: null
      }
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  mounted() {
    this.filterStates();
    if (this.state.length == 0) {
      this.filteredStates = this.states;
    }
  },
  methods: {
    filterStates() {
      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      });
    },

    setState(state) {
      this.state = state;
      this.modal = false;
    },
    watch: {
      state() {
        this.filteredStates();
      }
    }
  }
};
</script>
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
</style>

<!-- class = cursor-pointer เปลี่ยนเป็นมือ -->
