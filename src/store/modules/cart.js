const state = () => ({
  cartList: [],
});

const getters = {
  cartList(state, getters, rootState) {
    return state.cartList.map((item) => {
      const findProduct = rootState.products.productsList.find(
        (product) => product.id === item.id
      );
      return {
        id: item.id,
        img: findProduct.img,
        title: findProduct.dish,
        amount: item.amount,
        price: item.price,
        totalPrice: item.totalPrice,
      };
    });
  },
  amountOfCart(state) {
    let amount = 0;
    state.cartList.forEach((item) => {
      amount += item.amount;
    });
    return amount;
  },
  totalPrice(state) {
    let totalPrice = 0;
    state.cartList.forEach((item) => {
      totalPrice += item.totalPrice;
    });
    return totalPrice;
  },
};

const actions = {};

const mutations = {
  addToCartList(state, item) {
    const foundItem = state.cartList.find((product) => product.id === item.id);
    if (foundItem) {
      foundItem.amount += item.amount;
      foundItem.price = item.price;
      foundItem.totalPrice = foundItem.amount * foundItem.price;
    } else {
      item.totalPrice = item.price * item.amount;
      state.cartList.push(item);
    }
  },
  removeFromCart(state, id) {
    state.cartList = state.cartList.filter((product) => product.id !== id);
  },
  changeTotalPrice(state, item) {
    const foundItem = state.cartList.find((product) => product.id === item.id);
    foundItem.amount = item.value;
    foundItem.totalPrice = foundItem.price * foundItem.amount;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
