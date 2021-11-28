import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/style.scss'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import { mapKey } from './key'

Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: mapKey,
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
