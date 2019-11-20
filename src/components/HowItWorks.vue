<template>
<div>
      <h2 class="title">{{payload.complete_account_setup}}</h2>
      <div class="subtitle">{{payload.complete_account_details}}</div>
  <div class="container">
    <div class="learn--how">
      <h3>{{payload.how_it_works.learn_how}}</h3>
      <div>{{payload.how_it_works.learn_how_details}} {{payload.how_it_works.learn_how_video}}:</div>
      <ul class="how--to--list">
        <div><span class="list--numbers">1</span> {{payload.how_it_works.learn_how_video_step1}}</div>
        <div><span class="list--numbers">2</span> {{payload.how_it_works.learn_how_video_step2}}</div>
        <div><span class="list--numbers">3</span> {{payload.how_it_works.learn_how_video_step3}}</div>
      </ul>
      <div class="pretend--video"></div>
        <span class="after--video">{{payload.how_it_works.learn_how_video_after}}</span>
      <div>
      </div>
      <button class="continue--btn" v-on:click="routeTest">Continue</button>
      <router-link to='hello-world'>Hello World</router-link>
    </div>
    <div class="helpful--hints">
      <h4 class="hh--title">{{payload.helpful_hints.title}}</h4>
      <h4>{{payload.helpful_hints.how_much}}</h4>
      <div>{{payload.helpful_hints.how_much_answer}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['payload'],

  methods: {
    routeTest: function () {
      alert("Hello");
    }
  },
}
</script>

<style scoped>


  .pretend--video {
    align-self: center;
    width: 449px;
    height: 250px;
    border: 1px dotted black;
    margin-bottom: 24px;
    background: linear-gradient(90deg, rgba(63,174,42,1) 0%, rgba(85,86,90,.5) 55%,  rgba(250, 188, 60) 100%);
  }

  .subtitle {
    font-size: 13px;
    margin: -8px 0 24px 0;
  }


  .list--numbers {
    margin-left: -16px;
    padding: 4px;
  }

  .how--to--list > div {
    text-align: left;
    margin-bottom: 16px;
  }

  .container {
    display: flex;
    justify-content: center;
    height: auto; 
  }
  .helpful--hints {
    border: 1px solid #DDDDDD;
    background-color: rgba(211,211,211, .3);
    width: 200px;
    text-align: left;
  }

  .helpful--hints {
    padding: 0 32px 0 32px;
  }

  .helpful--hints > .hh--title {
    margin-top: 24px;
  }

  .learn--how {
    text-align: left;
    padding: 16px;
    border: 1px solid #DDDDDD;
    width: 450px;
    background-color: white;
  }

  div > .continue--btn {
    margin-top: 8px;
    float:  right;
  }


</style>