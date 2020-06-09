import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App.vue'
import {routes} from './routes.js';
import store from './store/store.js'
import filters from './filters.js';

Vue.use(VueRouter);

// Vue.prototype.$http = Axios;

axios.defaults.baseURL = 'https://stock-trader-50913.firebaseio.com/';

Vue.prototype.$axios = axios;

const router = new VueRouter({
routes,
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
