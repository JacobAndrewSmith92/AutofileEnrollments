import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router/routes';

Vue.config.productionTip = false
Vue.use(VueRouter)

// const Home  = {
//   template: '<div>Home</div>'
// }

// const Login = {
//   template: '<div>Login</div>'
// }

// const About = {
//   template: '<div>About</div>'
// }
const router = new VueRouter({
  mode: 'history',
    routes
    // { path: '/', component: Home },
    // { path: '/login', component: Login },
    // { path: '/about', component: About }
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
