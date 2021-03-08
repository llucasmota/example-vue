<template>
  <button @click="countClick">Clique Aqui</button>
</template>

<script>
export default {
  name: "Clicker",
  methods: {
    countClick() {
      this.$emit("countClick");
    },
  },
};
</script>

<style scoped>
</style>
