
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/vuex/index'
import 'swiper/dist/css/swiper.min.css'




new Vue({
  el: '#app',
  router,
  render:h=>h(App),
  store

})
