import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

// 以下是vue-i18n的內容
// const message = {
//   tw: {
//     hello: '哈囉你好～'
//   },
//   en: {
//     hello: 'Hello~there~'
//   }
// }

// const i18n = new VueI18n({
//   locale: 'tw',
//   message
// })
// // i18n到此為止

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.use(VueI18n)
