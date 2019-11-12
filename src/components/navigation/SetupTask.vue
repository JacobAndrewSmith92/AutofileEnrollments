<template>
  <div class="setup">
    <h1>{{payload.complete_account_setup}}</h1>
    <h3>{{payload.complete_account_details}}</h3>
    <HowItWorks :payload=payload />
  </div>
  
</template>

<script>
import HowItWorks from '../HowItWorks';
export default {
  props: ['payload'],
  components: {
    HowItWorks
  }
}

</script>
  
<style >
  .setup {
    margin: 0 24% 0 24%;
    /* text-align: center; */
    /* display: flex;
    justify-content: center; */
  }
</style>