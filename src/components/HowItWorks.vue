<template>
<div class="container">
  <div class="learn--how">
    <h2>{{payload.how_it_works.learn_how}}</h2>
    <div>{{payload.how_it_works.learn_how_details}} {{payload.how_it_works.learn_how_video}}:</div>
    <ul class="how--to--list">

    <div>1. {{payload.how_it_works.learn_how_video_step1}}</div>
    <div>2. {{payload.how_it_works.learn_how_video_step2}}</div>
    <div>3. {{payload.how_it_works.learn_how_video_step3}}</div>
    </ul>
    <div>{{payload.how_it_works.learn_how_video_after}}</div>
    <button>Continue</button>
  </div>
  <div class="helpful--hints">
    <h4>{{payload.helpful_hints.title}}</h4>
    <h4>{{payload.helpful_hints.how_much}}</h4>
    <span>{{payload.helpful_hints.how_much_answer}}</span>
  </div>
</div>
</template>

<script>
export default {
  props: ['payload']
}
</script>

<style scoped>

  .how--to--list > div {
    text-align: left;
  }

  .container {
    display: flex;
    border: 1px solid #DDDDDD;
    flex-direction: row;
  }
  .helpful--hints {
    border-left: 1px solid #DDDDDD;
    background-color: rgba(211,211,211, .3);
    width: 350px;
    text-align: left;
    padding: 4px;
  }

  .learn--how {
    /* text-align: left; */
    padding: 4px;
    min-height: 500px;
    /* max-width: 40%; */
  }
  /* button {
    
  } */
</style>