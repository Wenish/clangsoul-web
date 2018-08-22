import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'
import store from '@/store'
import './registerServiceWorker'
/*
var theme = {
  primary: "#546E7A",
  secondary: "#90A4AE",
  accent: "#B0BEC5",
  error: "#D50000",
  warning: "#FFC107",
  info: "#00BCD4",
  success: "#4CAF50"
}
*/
Vue.use(Vuetify)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
