import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.use(VueI18n)
