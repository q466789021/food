import Vue from 'vue'
import Vuex from 'vuex'
import { isEmpty } from '../util/index.js'
import { ORDER_SATUS } from '../model/index'


Vue.use(Vuex)
export default new Vuex.Store({

    state: {
        token: '',
        userInfo: {},
        orderList: [],
        addrdee:null
    },
    getters: {
        hasAddress(state){
            return state.userInfo.addressList && state.userInfo.addressList.length>0;

        },
        addressList(state){
            return state.userInfo.addressList
        },
        // defaultAddress(state,{addressList}){
        //     return addressList.filter(item=>item.default)[0]
        // },

        isLogin(state) {
            return !isEmpty(state.token)
        },
        //退款/售后订单
        orderBackMoneyList(state) {
            return state.orderList.filter(order => order.status === ORDER_SATUS.BACK_MONEY.CODE);
        },
        //待评价订单
        orderWaitCommentList(state) {
            return state.orderList.filter(order => order.status === ORDER_SATUS.WAIT_COMMENT.CODE);
        },
        //待付款订单
        orderWaitPayList(state) {
            return state.orderList.filter(order => order.status === ORDER_SATUS.WAIT_PAY.CODE);
        },
        //获取订单跟踪的订单列表
        orderTailList(state) {
            return state.orderList.filter(order => order.status === ORDER_SATUS.TAIL.CODE);
        }
    },
    mutations: {
        setToken(state, value) {
            state.token = value
        },
        //用户数据
        setUserInfo(state,value){
            state.userInfo=value
        },
        //订单列表
        setOrderList(state,value){
            state.orderList=value
        }
    },
    actions:{
        login({commit,dispatch},data){
            return new Promise((resolve,reject)=>{
                Vue.prototype.$http.login(data).then(data=>{
                    commit('setToken',data.token);
                    commit('setUserInfo',data.userInfo);

                    return dispatch('getOrderList',{
                        id:data.userInfo.id,
                        token:data.token
                    })
                }).then(()=>{
                    resolve()
                },()=>{
                    reject()
                })
            })
        },
        getOrderList({commit},{id,token}){
            return new Promise((resolve,reject)=>{
                Vue.prototype.$http.getOrderList(id,token).then(data=>{
                    commit('setOrderList',data);
                    resolve();
                },()=>{
                    reject()
                })
            })
        }
    }
})