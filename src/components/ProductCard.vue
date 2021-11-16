<template>
  <li class="productCard">
    <h2 class="productCard__title title">{{ product.dish }}</h2>
    <img
      class="productCard__img"
      :src="product.img"
      :alt="'Изобаржение ' + product.dish"
      width="240"
      height="240"
    />
    <p class="productCard__description">{{ shortDescription }}</p>
    <p class="productCard__price">{{ product.price }} руб.</p>
    <div class="prdocutCard__group">
      <input-num class="productCard__input" @changeInputField="changeAmount" />
      <big-button
        sign="В корзину"
        class="productCard__button primary"
        @clickPrimaryButton="addToCart()"
      />
    </div>
    <favorite-button
      @clickFavButton="addToFav"
      :class="[
        'productCard__stickyButton',
        { 'favoriteButton--active': product.inFav },
      ]"
    />
  </li>
</template>

<script>
import BigButton from "./BigButton";
import FavoriteButton from "./FavoriteButton";
import InputNum from "./InputNum";

export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      amount: 1,
    };
  },
  components: {
    BigButton,
    FavoriteButton,
    InputNum,
  },
  computed: {
    shortDescription: function () {
      return this.product.description.substr(0, 70) + " ...";
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCartList", {
        id: this.product.id,
        amount: this.amount,
        price: this.product.price,
      });
    },
    addToFav() {
      this.$store.commit("toggleFav", this.product);
    },
    changeAmount(value) {
      this.amount = +value;
    },
  },
};
</script>

<style scoped>
.productCard {
  position: relative;
  border-radius: 10px;
  border: 1px solid rgb(43, 42, 42);
  padding: 40px;
  width: 320px;
  height: 600px;
  list-style: none;
}

.productCard__stickyButton {
  position: absolute;
  top: 20px;
  right: 20px;
}

.productCard__title {
  display: block;
  min-height: 56px;
}

.productCard__img {
  border-radius: 10px;
}

.productCard__description {
  min-height: 56px;
}

.prdocutCard__group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.productCard__price {
  font-size: 20px;
  font-weight: 700;
}
</style>
