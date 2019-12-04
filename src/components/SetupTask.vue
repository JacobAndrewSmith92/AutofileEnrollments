<template>
  <div class="setup">
    <!-- <keep-alive> -->
      <!-- <component v-bind:is="component" :payload=payload @how-it="testingProps"></component> -->
    <!-- </keep-alive> -->
    <HowItWorks :payload=payload @how-it="testingProps" />
    <!-- <ChildComponent @how-it="testingProps"></ChildComponent> -->
    <!-- <button class="continue--on" v-on:click="component=BusinessProfile">Continue</button> -->
  </div>
  
</template>

<script>
import HowItWorks from '../components/HowItWorks';
// import BusinessProfile from '../components/BusinessProfile';

export default {
  name: 'SetupTasks',
  props: ['payload'],
  components: {
    HowItWorks,
    // BusinessProfile
  },
  methods: {
    testingProps() {
      alert('helllo there');
    }
  },

  data() {
    return {
      component: 'how-it-works'
    }
  }
}

</script>
  
<style >



.setup > div {
  margin-bottom: 24px;
}


</style>