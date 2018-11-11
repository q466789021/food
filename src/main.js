// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import swiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import Toast from './components/Toast/index'
import components from './components/index'
import Service from './service'
import 'lib-flexible'
import 'swiper/dist/css/swiper.css'
import "font-awesome/css/font-awesome.min.css"
import layouts from './layouts/index'
import VueLazyload from 'vue-lazyload'
import store from './store/index.js'
Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(swiper)
Vue.use(layouts)
Vue.use(components)
Vue.use(Toast)
Vue.use(Service)

/* 处理移动端 active伪类无法生效的问题 */
document.body.addEventListener('touchstart',()=>{});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
