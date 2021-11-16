<template>
  <ul class="nav">
    <li v-for="item in menu" :key="item.link" class="nav__item">
      <router-link :to="item.link">{{ item.name }}</router-link>
      <span v-if="item.amount" class="amount">{{
        item.amount
      }}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import { routesLink } from "@/router/routes.js";

export default {
  computed: {
    ...mapGetters(["amountOfCart"]),
    ...mapGetters("products", ["amountOfFav"]),
    menu() {
      return [
        {
          name: "Сatalog",
          link: routesLink.catalog,
        },
        {
          name: "Cart",
          link: routesLink.cart,
          amount: this.amountOfCart,
        },
        {
          name: "Favorites",
          link: routesLink.favorites,
          amount: this.amountOfFav,
        },
      ];
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
