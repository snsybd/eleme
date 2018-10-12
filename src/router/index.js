
// 路由组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../assets/Msite/Msite.vue'
import order from '../assets/order/order.vue'
import person from '../assets/profile/profile.vue'
import search from '../assets/search/search.vue'
import logon from  '../assets/logon/logon.vue'
import shop from '../components/shop/shop.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta:{
        showFooter:true
      },
    },
    {
      path: '/order',
      component: order,
      meta:{
        showFooter:true
      },
    },
    {
      path: '/profile',
      component: person,
      meta:{
        showFooter:true
      },
    },
    {
      path: '/search',
      component: search,
      meta:{
        showFooter:true
      },
    },
    {
      path:'/logon',
      component: logon,

    },
    {
      path:'/shop',
      conponent: shop
    }
  ]
})
