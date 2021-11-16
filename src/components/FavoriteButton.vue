<template>
  <button class="favoriteButton" @click="buttonClick">
    <favoriteSVG width="20" height="20" />
  </button>
</template>

<script>
import favoriteSVG from "@/assets/icons/favorite.svg";

export default {
  components: {
    favoriteSVG,
  },
  methods: {
    buttonClick() {
      this.$emit("clickFavButton");
    },
  },
};
</script>

<style scooped>
.favoriteButton {
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  padding-top: 5px;
  cursor: pointer;
}

.favoriteButton:hover {
  color: red;
}

.favoriteButton--active {
  color: red;
}

.favoriteButton--active svg {
  fill: red;
}
</style>
