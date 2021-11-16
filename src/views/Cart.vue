<template>
  <div class="wrap">
    <div class="tableGroup">
      <h1>Корзина</h1>
      <table class="tableCart">
        <tr>
          <th class="cell">Изображение</th>
          <th class="cell">Наименование</th>
          <th class="cell">Количество</th>
          <th class="cell">Цена</th>
          <th class="cell">Сумма</th>
          <th class="cell"></th>
        </tr>
        <tr v-for="product in cartList" :key="product.id">
          <td class="cell">
            <img
              :src="product.img"
              :alt="'Изобаржение ' + product.title"
              width="80"
              height="80"
            />
          </td>
          <td class="cell">{{ product.title }}</td>
          <td class="cell">
            <input
              type="number"
              class="inputNum"
              v-model="product.amount"
              @change="changeTotalPrice(product.id, product.amount)"
              min="1"
            />
          </td>
          <td class="cell">{{ product.price }}</td>
          <td class="cell">{{ product.totalPrice }}</td>
          <td class="cell">
            <button class="btnDel" @click="removeFromCart(product.id)">
              X
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <h1>Оформить заказ</h1>
      <p>Всего:</p>
      <p>
        <span class="boldText">{{ amountOfCart }}</span> товаров на
        <span class="boldText">{{ totalPrice }} руб.</span>
      </p>
      <big-button
        sign="Оформить заказ"
        class="productCard__button primary"
        @clickPrimaryButton="checkout"
      />
    </div>
  </div>
</template>

<script>
import BigButton from "@/components/BigButton.vue";

export default {
  components: {
    BigButton,
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    amountOfCart() {
      return this.$store.getters.amountOfCart;
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.commit("removeFromCart", id);
    },
    changeAmount(value) {
      this.$store.commit("changeAmount", value);
    },
    changeTotalPrice(id, value) {
      this.$store.commit("changeTotalPrice", { value: +value, id: id });
      return this.$store.getters.changeTotalPrice;
    },
    checkout() {
      alert(JSON.stringify(this.cartList));
    },
  },
};
</script>

<style scoped>
.boldText {
  font-weight: 600;
}

.wrap {
  display: flex;
}

.tableGroup {
  margin-right: 200px;
}

.tableCart {
  border: 2px solid black;
}

.cell {
  padding-right: 20px;
}

.btnDel {
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

.btnDel:hover {
  color: #4279c0;
}

.btnDel:active {
  color: #032757;
}
</style>
