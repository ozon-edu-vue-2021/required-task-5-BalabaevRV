import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import cart from "./modules/cart";
import products from "./modules/products";

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  modules: {
    cart,
    products,
  },
});
