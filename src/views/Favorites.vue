<template>
  <section>
    <h1>Избранное</h1>
    <ul class="favList">
      <product-card
        v-for="product in favList"
        :key="product.id"
        :product="product"
        class="favList__item"
      />
    </ul>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["favList"]),
  },
};
</script>

<style scoped>
.favList {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: flex-start;
  gap: 20px;
}

.favList__item {
  margin-bottom: 20px;
}
</style>
