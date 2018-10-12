
<!--主页-->
<template>
  <div class="msite">
    <HeaderTop :title="address.name">
    <router-link slot="search" to="/search" class="header_search">
      <i class="iconfont icon-sousuo"></i>
    </router-link>
    <router-link slot="login" to="/logon" class="header_login">
      <span class="header_login_text">登录|注册</span>
    </router-link>
    </HeaderTop>
    <nav class="msite_nav border-1px">
      <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(cs,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index2) in  cs" :key="index2">
              <div class="food_container">
                <img :src="imgBaseUrl+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>

          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <ShopList/>

  </div>
</template>
<script>

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import {mapState}from 'vuex'
import Swiper from 'swiper'
export default {
  data(){
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  mounted(){
    this.$store.dispatch('getFoodtypes')
    this.$store.dispatch('getShopslist')


  },
  watch:{
    category(value){
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          loop: true, // 循环模式选项
          pagination: {
            el: '.swiper-pagination',
          },

        })
      })
    }
  },
  computed:{
    ...mapState(['address','category']),
    categorysArr () {
      const max = 8
      const arr = []
      const {category} = this
      let smallArr = []
      category.forEach(c => {
        if(smallArr.length===0) {
          arr.push(smallArr)
        }
        smallArr.push(c)
        if(smallArr.length===max) {
          smallArr = []
        }
      })

      return arr
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
