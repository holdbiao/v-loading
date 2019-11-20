import Vue from 'vue'
import App from './App.vue'
import biuLoading from './loading/index'

Vue.use(biuLoading,  {text: 'loading'})

new Vue({
  el: '#app',
  render: h => h(App)
})
