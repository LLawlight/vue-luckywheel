import Vue from 'vue'
import App from './App.vue'
import VueLuckywheel from './components'
// import VueLuckywheel from 'vue-luckywheel'
// import 'vue-luckywheel/lib/vue-luckywheel.css'

Vue.use(VueLuckywheel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
