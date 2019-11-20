<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeExit :onStep=onStep />
    <SetupTask :payload=payload />
  </div>
</template>

<script>
import HomeExit from './components/navigation/HomeExit';
import SetupTask from './components/SetupTask';
import ApiManager from './tools/managers/ApiManager.js';

export default {
  name: 'app',
  components: {
    HomeExit,
    SetupTask,
  },

  data() {
    return {
      payload: '',
      onStep: false
  }
},

  mounted() {
    ApiManager.getData()
    .then(response => response.json())
    .then(payload => {
      (this.payload = payload)
    }) 
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
  background-color: rgba(211,211,211, .1);
  text-align: center;
}
a {
  text-decoration: none;
  color: #55565A;
}
button {
  background-color: #3FAE2A;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  height: 36px;
  width: 108px;
}
</style>
