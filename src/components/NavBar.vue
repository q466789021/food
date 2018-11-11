<template>
  <ul class="nav-bar">
    <router-link
     v-for="(item,index) in navs"
     :key="index"
      tag="li"
      :to="item.url"
    >
    <i class="default" :class="[`icon-${item.icon}`]"></i>
    <i class="hover" :class="[`icon-${item.icon}-sel`]"></i>
    <span>{{item.text}}</span>
    </router-link>
  </ul>
  
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      navs:[
        {icon:'home',text:'首页',url:'/home'},
        {icon:'qz',text:'圈子',url:'/community'},
        {icon:'order',text:'订单',url:'/order'},
        {icon:'user',text:'我的',url:'/usercenter'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.nav-bar{
  height: 98px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid color(bc);
 li{
   display: flex;
   flex-direction: column;  
   align-items: center;
   justify-content: center;
   color: fontColor(gray);
   i{
     font-size: 1.5em;
     &.hover{
       display: none;
     }
   }
   &.active{
     color: color(orange);
     i{
       &.default{
         display: none;
       }
       &.hover{
         display: block;
       }
     }
   }

   span{
     margin-top: 13px;
     font-size: fontSize(24)
   }
 }

}

</style>
