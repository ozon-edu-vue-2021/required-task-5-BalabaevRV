<template>
  <div id="app">
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import MainNav from "./components/MainNav.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: { MainNav },
  mounted() {
    this.getProductsListFromAPI();
  },
  methods: {
    ...mapActions("products", ["getProductsListFromAPI"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
