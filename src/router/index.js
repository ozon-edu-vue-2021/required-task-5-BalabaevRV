import Vue from "vue";
import Router from "vue-router";
import { routesLink } from "./routes";
import Catalog from "@/views/Catalog.vue";
import Cart from "@/views/Cart.vue";
import Favorites from "@/views/Favorites.vue";

Vue.use(Router);

const routes = [
  { path: routesLink.home, name: "home", component: Catalog },
  { path: routesLink.catalog, name: "catalog", component: Catalog },
  { path: routesLink.cart, name: "cart", component: Cart },
  { path: routesLink.favorites, name: "favorites", component: Favorites },
];

export default new Router({
  mode: "history",
  routes,
});
