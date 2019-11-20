<template>
  <div class="setup">
    <HowItWorks :payload=payload />
  </div>
  
</template>

<script>
import HowItWorks from '../components/HowItWorks';
export default {
  props: ['payload'],
  components: {
    HowItWorks
  }
}

</script>
  
<style >

.setup {
  /* margin: 0 200px 0 200px; */
}

.setup > div {
  margin-bottom: 24px;
}

</style>