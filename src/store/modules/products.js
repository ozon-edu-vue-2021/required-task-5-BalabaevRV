import { PRODUCTS_API_ADRESS } from "@/constants/productsAPIAdress.js";
import { IMG_ARRAY } from "@/constants/imgArray.js";
import axios from "axios";

const state = () => ({
  productsList: [],
});

const getters = {
  amountOfFav(state, getters) {
    return getters.favList.length;
  },
  favList(state) {
    return state.productsList.filter((item) => item.inFav);
  },
};

const actions = {
  getProductsListFromAPI() {
    axios
      .get(PRODUCTS_API_ADRESS)
      .then((response) => {
        this.commit("setProductsList", response.data);
      })
      .catch((error) => console.log(error));
  },
};

const mutations = {
  setProductsList(state, productsList) {
    productsList.forEach((item) => {
      const randomNumber = Math.round(Math.random() * (IMG_ARRAY.length - 1));
      item.amountInBasket = 0;
      item.inFav = false;
      item.price = Math.round(Math.random() * 10000);
      item.img = require("@/assets/images/" + IMG_ARRAY[randomNumber]);
    });
    state.productsList = productsList;
  },
  toggleFav(state, item) {
    item.inFav = !item.inFav;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
