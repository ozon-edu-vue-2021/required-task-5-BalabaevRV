<template>
  <ul class="nav">
    <li class="nav__item">
      <router-link :to="{ name: 'catalog' }">Catalog</router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'cart' }">Cart</router-link
      ><span class="amount">{{ amountOfCart }}</span>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'favorites' }">Favorites</router-link
      ><span class="amount">{{ amountOfFav }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    amountOfCart() {
      return this.$store.getters.amountOfCart;
    },
    amountOfFav() {
      return this.$store.getters.amountOfFav;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
}

.nav__item {
  position: relative;
}

.nav__item a {
  color: black;
  text-decoration: none;
}

.nav__item .router-link-active {
  color: blue;
}

.amount {
  position: absolute;
  top: -20px;
  font-size: 14px;
  font-weight: 700;
  display: inline;
  background-color: #22b4e0;
  padding: 2px;
  border-radius: 4px;
}
</style>
