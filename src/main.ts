import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Inject from '@/types/Inject'
import { PlayerType } from '@/types/PlayerType'
import { GameChoice } from '@/types/GameChoice'

Vue.config.productionTip = false
Vue.use(Inject, {
  PlayerType,
  GameChoice
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
