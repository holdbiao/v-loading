import Vue from 'vue'
import Loading from './loading.vue'

const LoadingConstructor = Vue.extend(Loading)

let Instance = null

const LoadingFn = (Options) => {
  return {
    show (options) {
      let text = (options && options.text) || (Options && Options.text) || ''
      Instance = new LoadingConstructor({})
      Instance.vm = Instance.$mount() // 挂载
      document.body.appendChild(Instance.vm.$el)
      Instance.vm.text = text
      Instance.vm.visible = true
    },
    close () {
      Instance.vm.close()
      Instance = null
    }
  }
}

export default {
  install: (Vue, Options) => {
    Vue.prototype.$Loading = LoadingFn(Options)
  }
}
