<template>
  <div class="nav--bar">
    <img id="header--logo" alt="Vue logo" src="../../assets/TaxJarLogos/taxjar-plus-logotype.png">
    <SomeFile/>
    <a href="/">Save and Exit</a>
  </div>
</template>

<script>
  import SomeFile from './SetupTask.vue'
  export default {
    // props: {
      
    // }
    components: {
      SomeFile
    }
  }
</script>

<!-- Style Needs -->

<style >
  #header--logo {
    width: 120px;
    height: 24px;

  }
  .nav--bar {
    display: flex;
    justify-content: space-between;
    padding: 0 96px 0 96px;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid #9955565A;
    background-color: white;
  }
</style>

