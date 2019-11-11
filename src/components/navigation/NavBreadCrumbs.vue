<template>
  <div class="breadcrumbs">
    <a>Step 1</a>
    <a>Step 2</a>
    <a>Step 3</a>
    <a>Step 4</a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .breadcrumbs {
    display: flex;
  }
  .breadcrumbs a {
      padding-right: 40px;
  }
  .breadcrumbs a:last-child {
    padding-right: 0;
  }
</style>