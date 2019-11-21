import Vue from 'vue'
import App from './App.vue'
import Loading from './loading/index'

Vue.use(Loading,  {text: 'loading'}) // 全局的默认设置

new Vue({
  el: '#app',
  render: h => h(App)
})
