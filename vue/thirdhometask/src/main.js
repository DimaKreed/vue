import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router'
import {routes} from "./routes";
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

const router=new VueRouter({
    routes,
  mode:"history"
  }
)
Vue.use(VueResource);
Vue.http.options.root='https://myvueproject-2080c.firebaseio.com'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
