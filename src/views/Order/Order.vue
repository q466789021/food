<template>
   <defaultLayout class="order">  
       <TopHeader title="订单">
           <div class="right" slot="right">
               <i class="icon-menu"></i>
           </div>
       </TopHeader>
       <div class="userinfo">
           <div class="avatar">
               <img :src="userInfo.avatar" alt="">
           </div>
           <div class="detail">
               <h3>{{userInfo.name}}</h3>
               <p>{{userInfo.desc}}</p>
               <UserState :member="userInfo.member" :by="userInfo.by" :hj="userInfo.hj" :zs="userInfo.zs"></UserState>
           </div>
       </div>
        <div class="my-order order-plane">
            <Cell title="我的订单" to="/orderList?type=-1"></Cell>
            <ul class="list">
                <router-link tag="li" to="/orderList?type=1">
                <i class="icon-bicycle"></i>
                <span>订单跟踪</span>
                </router-link>
                <router-link tag="li" to="/orderList?type=2">
                <i class="icon-wait-comment"></i>
                <span>待评价</span>
                </router-link>
                <router-link tag="li" to="/orderList?type=10">
                <i class="icon-back-money-success"></i>
                <span>退款、售后</span>
                </router-link>
            </ul>
        </div>
        <div class="wait-pay-list order-plane">
            <Cell title="待付款订单" to="/orderList?type=0"></Cell>
            <OrderItem v-for="(order,index) in orderWaitPayList" :key="index" :order="order"></OrderItem>
        </div>
        <div class="last-list order-plane">
            <Cell title="最近订单" to="/orderList?type=0"></Cell>
            <OrderItem v-for="(order,index) in lastOrderList" :key="index" :order="order"></OrderItem>
        </div>

   </defaultLayout>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import _ from "lodash";
export default {
  name: "Order",
  created() {
    console.log(this.isLogin);
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLogin", "orderWaitPayList"]),
    ...mapState({
      orderList: state => state.orderList,
      token: state => state.token,
      userInfo: state => state.userInfo
    }),
    lastOrderList() {
      //from 拆分 map 所有的create_time
      let list = Array.from(this.orderList).map(item => {
        item.create_time = new Date(item.create_time).getTime();
        return item;
      });
      //_.sortBy 排序
      list = _.sortBy(list, item => {
        return -item.create_time;
      });
      //filter过滤
      return list.filter((item, index) => index < 5);
    }
  },
  methods: {
    update() {
      this.$route.commit("setToken", "更新后的值");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/order.scss";
</style>

