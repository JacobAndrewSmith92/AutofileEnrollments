<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeExit />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeExit from './components/navigation/HomeExit';
export default {
  name: 'app',
  components: {
    HomeExit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 -1em 0 -1em;
  height: 100vh;
  background-color: #FDFDFF;
}
a {
  text-decoration: none;
  color: #55565A;
}
</style>
