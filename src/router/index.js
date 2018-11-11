import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'//首页

import Community from '../views/Community/Community.vue'//圈子
import Log from '../views/Community/subPage/Log.vue'//养生日志
import Member from '../views/Community/subPage/Member.vue'//会员活动
import WorldFood from '../views/Community/subPage/WorldFood.vue'//世界美食

import Order from '../views/Order/Order.vue'//订单
import OrderList from '../views/Order/OrderList.vue'//订单列表

import UserCenter from '../views/UserCenter/UserCenter.vue'//我的
import UserInfo from '../views/UserCenter/UserInfo.vue'//我的←我的资料
import Setting from '../views/UserCenter/Setting.vue'//我的←设置

import List from '../views/List/List.vue'//搜索列表
import Search from '../views/Search/Search.vue'//搜索
import Detail from '../views/Detail/Detail.vue'//详情
import Login from '../views/Login/Login.vue'//登陆
import PasswordLogin from '../views/Login/PasswordLogin.vue'//密码登录
import ForgetPassword from '../views/ForgetPassword/ForgetPassword.vue'//找回密码
import Register from '../views/Register/Register.vue'//注册
import Pay from '../views/Pay/Pay.vue'//支付页面
import AddressList from '../views/AddressList/AddressList.vue'//支付页面

import store from '../store/index.js'
Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home, redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/community', component: Community,redirect:'/community/member',children:[
      {path:'/community/member',component:Member},
      {path:'/community/worldFood',component:WorldFood},
      {path:'/community/log',component:Log},
    ]},


    { path: '/order', component: Order,meta:{requiresAuth:true} },
    { path: '/orderList', component: OrderList,meta:{requiresAuth:true} },
    { path: '/usercenter', component: UserCenter,meta:{requiresAuth:true} },
    { path: '/UserInfo', component: UserInfo,meta:{requiresAuth:true} },
    { path: '/Setting', component: Setting,meta:{requiresAuth:true} },
    { path: '/pay', component: Pay,meta:{requiresAuth:true} },
    { path: '/addressList', component: AddressList,meta:{requiresAuth:true} },
    { path: '/list', component: List },
    { path: '/search', component: Search },
    { path: '/detail/:id', component: Detail },
    { path: '/login', component: Login },
    { path: '/password-login', component: PasswordLogin },
    { path: '/forget-password', component: ForgetPassword },
    { path: '/register', component: Register },
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    if(store.getters.isLogin){
      next()
    }else{
      next({
        path:'/login',
        query:{
          redirect:to.path
        }
      })
    }
  }else{
    next()
  }
})

export default router;
