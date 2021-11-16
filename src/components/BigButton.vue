<template>
  <button class="button" @click="buttonClick">
    {{ sign }}
  </button>
</template>

<script>
export default {
  props: {
    sign: {
      type: String,
      default: "Кнопка",
    },
  },
  methods: {
    buttonClick() {
      this.$emit("clickPrimaryButton");
    },
  },
};
</script>

<style scooped>
.button {
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.primary {
  background-color: #1c457a;
  color: #fff;
  padding: 10px 30px;
}

.primary:hover {
  background-color: #466894;
}

.primary:active {
  background-color: #050d75;
}
</style>
