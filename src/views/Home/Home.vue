<template>
    <DefaultLayout class="home">
        <TopHeader class="topheader">
            <div slot="left" class="left">
                <i class="icon-pos"></i>
                <span>定位</span>
            </div>
            <div slot="center" class="center">
                <i class="icon-search"></i>
                <input type="text" placeholder="搜索：菜名、店铺" @focus="$router.push('./search')">
            </div>
            <div slot="right" class="right">
                <i class="icon-scan"></i>
                <span>扫一扫</span>
            </div>
        </TopHeader>
        <!-- 轮播图 -->
        <swiper class="banner" :options="swiperOption">
            <swiper-slide>
                <img :src="require('../../assets/img/banner1.jpg')" alt="">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('../../assets/img/banner2.jpg')" alt="">
            </swiper-slide>
            <swiper-slide>
                <img :src="require('../../assets/img/banner3.jpg')" alt="">
            </swiper-slide>
        </swiper>
        <!-- 导航条 -->
        <div class="main-nav">
            <router-link :to="`/list?keyWord=${encodeURI('荤菜')}`" tag="div" class="item">
                <div class="pic">
                    <img v-lazy="require('../../assets/img/hun.png')" alt="">
                </div>
                <span>荤菜</span>
            </router-link>
            <router-link :to="`/list?keyWord=${encodeURI('素菜')}`" tag="div" class="item">
                <div class="pic">
                    <img v-lazy="require('../../assets/img/su.png')" alt="">
                </div>
                <span>素菜</span>
            </router-link>
            <router-link :to="`/list?keyWord=${encodeURI('蔬果煲')}`" tag="div" class="item">
                <div class="pic">
                    <img v-lazy="require('../../assets/img/shu.png')" alt="">
                </div>
                <span>蔬果菜</span>
            </router-link>
            <router-link :to="`/list?keyWord=${encodeURI('特色菜')}`" tag="div" class="item">
                <div class="pic">
                    <img v-lazy="require('../../assets/img/te.png')" alt="">
                </div>
                <span>特色菜</span>
            </router-link>
        </div>
        <!-- 活动 -->
        <div class="activity">
            <div class="top">
                <div class="vip item">
                    <h3>会员优惠</h3>
                    <p>会员优惠多多</p>
                    <img :src="require('../../assets/img/plane1.png')" alt="">
                </div>
                <div class="week item">
                    <h3>周边活动</h3>
                    <p>优惠在生活</p>
                    <img :src="require('../../assets/img/plane2.png')" alt="">
                </div>
                <div class="special-offer item">
                    <h3>特价区</h3>
                    <p>激动人心</p>
                    <img :src="require('../../assets/img/plane3.png')" alt="">
                </div>
            </div>
            <div class="bottom">
                <div class="time-limit">
                    <h3>限时抢购</h3>
                    <p>
                        <span>10</span>:<span>26</span>:<span>30</span>
                    </p>
                    <img :src="require('../../assets/img/timebanner.jpg')" alt="">
                </div>
                <div class="coupon">
                    <h3>优惠券</h3>
                    <p>会员抢不停</p>
                    <img :src="require('../../assets/img/scal.png')" alt="">
                </div>
            </div>
        </div>
        <!-- 每日推荐 -->
        <div class="every">
            <h3>每日推荐</h3>
            <ShopList
             v-for="(item,index) in evertDayProducts"
             :product="item"
             :key="index"
            >
            </ShopList>
        </div>
        <!-- 猜你喜欢 -->
        <div class="like">
            <h3>猜你喜欢</h3>
            <ShopList
             v-for="(item,index) in evertDayProducts"
             :product="item"
             :key="index"
            >
            </ShopList>
        </div>
         
    </DefaultLayout>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        loop: true
      },
      evertDayProducts:[]
    };
  },
  created(){
      this.$http.everyDayRecom().then(data=>{
      // console.log(data);
      this.evertDayProducts=data;
      })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/home.scss";
</style>

