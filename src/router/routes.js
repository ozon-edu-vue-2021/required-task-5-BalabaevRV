import Catalog from "@/views/Catalog.vue";
import Cart from "@/views/Cart.vue";
import Favorites from "@/views/Favorites.vue";

export const routes = [
  { path: "/", name: "home", component: Catalog },
  { path: "/catalog", name: "catalog", component: Catalog },
  { path: "/Cart", name: "cart", component: Cart },
  { path: "/favorites", name: "favorites", component: Favorites },
];
