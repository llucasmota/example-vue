<template>
  <p >{{ count }}</p>
</template>

<script>
export default {
  name: "Message",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
</style>
