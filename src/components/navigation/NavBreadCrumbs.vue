<template>
  <div class="breadcrumbs">
    <!-- WIP: Need to refactor -->
    <span>{{onStep ? '1. Setup tasks' : null}} </span>
    <strong>{{!onStep ? '1. Setup tasks' : null}} </strong>
    <span>2. State from</span>
    <span>3. Enrollment start</span>
    <span>4. Review and submit</span>
    
  </div>
</template>

<script>
  export default {
    props: ['onStep']
  }
</script>

<style scoped>
  .breadcrumbs {
    display: flex;
  }
  .breadcrumbs span, strong  {
      padding-right: 40px;
  }
  .breadcrumbs span:last-child {
    padding-right: 0;
  }
</style>