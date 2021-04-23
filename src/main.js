import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Plugin } from 'vue-responsive-video-background-player'

Vue.config.productionTip = false
AOS.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Plugin)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
