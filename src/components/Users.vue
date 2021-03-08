<template>
 <div class="container">
   <img :src="avatar" alt="">
    <p>{{name}}</p>
    </div>    
</template>

<script>
export default {
  name: "Users",
  props: {
    name: {
      type: String
    },
    avatar: {
      type: String
    }
  },
};
</script>

<style scoped>
.principal {
  width: 100vh;
  margin: auto;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  }
  .container > img {
    width: 10vw;
    height: 10vh;
    margin: 0 2px 0 2px;
  }
</style>
