import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import ElementUI from 'element-ui';
Vue.use(ElementUI)

//按需导入 Mint-UI 中的组件
// import { Header,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';

// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button);
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)

//导入 MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//定义全局的过滤器
Vue.filter('dataFormat',(data,pattern = "YYYY-MM-DD HH:mm:ss")=>{
  return moment(data).format(pattern)
})

//导入安装 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root='http://localhost:5000'

//注册vuex
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{//this.$store.state.xxx
    car:[]//将 购物车中的商品数据，用一个数组存储起来
  },
  mutations:{//this.$store.commit('方法的名称','按需传递的唯一的参数')
    addToCar(state,Ginfo){//点击加入购物车，把商品信息，保存到store中的car上
      //分析：
      //1.如果购物车中之前就已经有这个对应的商品了，那么只需要更新数量
      //2.如果没有，则直接把商品数据，push到car中即可
      let flag = false//假设在购物车中没有找到对应的商品
      state.car.some(item=>{
        if(item.id==Ginfo.id){
          item.count+=parseInt(Ginfo.count)
          flag=true
          return true
        }
      })
      //如果循环完毕，得到的flag还是false就直接push
      if(!flag){
        state.car.push(Ginfo)
      }
    }
  },
  getters:{//this.$store.getter.xxx
    //相当于计算属性，也相当于filters
    getAllCount(state){
      let c = 0;
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    getNum(state){
      let c = 0;
      state.car.forEach(item=>{
        if(item.selected){
          c+=item.count
        }
      })
      return c
    },
    getPrice(state){
      let c = 0;
      state.car.forEach(item=>{
        if(item.selected){
          c+=item.count*item.price
        }
      })
      return c
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store//挂载store 状态管理对象
}).$mount('#app')
