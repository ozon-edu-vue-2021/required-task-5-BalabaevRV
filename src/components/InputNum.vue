<template>
  <input
    type="number"
    class="inputNum"
    :id="idInput"
    :name="idInput"
    @change="changeInputField"
    value="1"
    min="1"
  />
</template>

<script>
export default {
  props: {
    idInput: {
      type: String,
      default: "input",
    },
    action: {
      type: String,
      default: "Кнопка",
    },
  },
  methods: {
    changeInputField(e) {
      this.$emit("changeInputField", e.target.value);
    },
  },
};
</script>

<style scooped>
.inputNum {
  border-radius: 15px;
  width: 80px;
  height: 30px;
  margin-top: 1px;
  text-align: center;
}
</style>
