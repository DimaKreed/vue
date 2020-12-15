import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.http.options.root='http://api.icndb.com/jokes'

new Vue({
  render: h => h(App),
}).$mount('#app')
