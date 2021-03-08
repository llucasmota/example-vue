<template>
  <div id="app">
    <clicker  @countClick="countClick" />
    <message :count="count" />
    <div v-for="user of someUsers" :key="user.id">
    <users :name="user.name"
      :avatar="user.avatar">
    </users>
    </div>
  </div>
</template>

<script>
import Clicker from "./components/Clicker.vue";
import Message from "./components/Message.vue";
import Users from "./components/Users.vue";
import api from './utils/api'

export default {
  name: "App",
  components: { Clicker, Message, Users },
  methods: {
    countClick(){
      this.count++
      this.count > 10 && this.count < 12 && this.search()
    },
    search(){
       api.get('/users').then(response => {
     this.someUsers = response.data})
    }
  },
  data() {
    return {count: 0, someUsers: []}
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
