import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/Home.vue';
import Member from './components/tabbar/Member.vue';
import Shopcar from './components/tabbar/Shopcar.vue';
import Search from './components/tabbar/Search.vue';
import newsList from './components/news/newsList.vue';
import newsInfo from './components/news/newsInfo.vue';
import photoList from './components/photos/photoList.vue';
import goodList from './components/goods/goodList.vue';
import goodsInfo from './components/goods/goodsInfo.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newsList',
      component: newsList
    },
    {
      path: '/home/newsInfo/:id',
      component: newsInfo
    },
    {
      path:'/home/photolist',
      component:photoList
    },
    {
      path:'/home/goodslist',
      component:goodList
    },
    {
      path:'/home/goodsInfo/:id',
      component:goodsInfo
    }
  ],
  linkActiveClass:"mui-active"
})
