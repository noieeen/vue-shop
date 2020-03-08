import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');
let currentUser = window.localStorage.getItem('currentUser')

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) :[], 
    currentUser:currentUser ? JSON.parse(currentUser) :[],
  },
  getters: {
    totalPrice: state => {
      let total = 0;
      state.cart.filter(item => {
        total += item.productPrice * item.productQuantity;
      });

      return total;
    }
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find(product => product.productId == item.productId);
      if (found) {
        found.productQuantity++;
      } else {
        state.cart.push(item);
      }
      this.commit('saveData');
    },
    currentUser(state,item){
      state.currentUser = item
      this.commit('saveData')
    },
    saveData(state){
        window.localStorage.setItem('cart',JSON.stringify(state.cart));
        window.localStorage.setItem('currentUser',JSON.stringify(state.currentUser));
    },
   
    removeFromCart(state,item){
      let index = state.cart.indexOf(item);
      state.cart.splice(index,1);
      this.commit('saveData');
    },
    // resetUser(state,item){
    //   state.currentUser = null
    // }
  }
});
