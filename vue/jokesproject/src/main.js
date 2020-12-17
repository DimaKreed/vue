import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {store} from "./store/store";
import {routes} from "./routes/routes";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
