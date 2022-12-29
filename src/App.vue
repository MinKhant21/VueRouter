<template>
  <nav>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'About'}">About</router-link> |
    <router-link :to="{name:'JobView'}">jobs</router-link>
  </nav>
  <button @click="redirect()">Redirect</button>
  <button @click="forward">Go Forward</button>
  <button @click="backward">Go BackWard</button>
  <router-view/>

</template>
<script>
export default{
  methods:{
     redirect(){
      this.$router.push({name:"home"})
    },
    forward(){
      this.$router.go(1);
    },
    backward(){
      this.$router.go(-1);
    }
  }
}
  
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
