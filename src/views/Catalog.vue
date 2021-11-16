<template>
  <section>
    <h1>Каталог</h1>
    <ul class="productsList">
      <product-card
        v-for="product in productsList"
        :key="product.id"
        :product="product"
        class="productList__item"
      />
    </ul>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapState } from "vuex";
console.log(mapState);

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState({
      productsList: (state) => state.products.productsList,
    }),
  },
};
</script>

<style scoped>
.productsList {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
}

.productList__item {
  margin-bottom: 20px;
}
</style>
