import Vue from 'vue'
import AppdoDia from './AppdoDia.vue'

import './assets/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppdoDia),
}).$mount('#app')
