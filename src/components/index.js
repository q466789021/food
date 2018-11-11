import TopHeader from './TopHeader.vue';
import ShopList from './ShopList.vue'
import Rate from './Rate.vue'
import BackTop from './BackTop.vue'
import FoodButton from "./FoodButton"
import Comment from "./Comment.vue"
import Popover from "./Popover.vue"
import Flied from "./Flied.vue"
import FliedList from "./FliedList.vue"
import CommunityItem from './CommunityItem.vue'
import UserState from './UserState.vue'
import Cell from './Cell.vue'
import OrderItem from './OrderItem.vue'
import CheckBox from './CheckBox.vue'
import Slider from './Slider.vue'
import Radio from './Radio.vue'
import Address from './Address.vue'
import CellList from './CellList.vue'

import { isEmpty } from '../util/index'

export default {
    install(Vue) {

        // 全局filter
        Vue.filter('price', val => {
            if(isEmpty(val)) return '';
            if (val.toString().includes('.')){
                return `￥${val}`;
            }else{
                return `￥${val}.00`;
            }
        })
        Vue.mixin({
            methods:{
                goBack() {
                    const scrollTop = document.documentElement.scrollTop;
                    if (scrollTop > 0) {
                      document.documentElement.scrollTop += (0 - scrollTop) / 10;
                      requestAnimationFrame(this.goBack);
                    } 
                  } 
            }
        })
        

        Vue.component(TopHeader.name, TopHeader);
        Vue.component(ShopList.name, ShopList)
        Vue.component(Rate.name, Rate)
        Vue.component(BackTop.name,BackTop)
        Vue.component(FoodButton.name,FoodButton)
        Vue.component(Comment.name,Comment)
        Vue.component(Popover.name,Popover)
        Vue.component(Flied.name,Flied)
        Vue.component(FliedList.name,FliedList)
        Vue.component(CommunityItem.name,CommunityItem)
        Vue.component(UserState.name,UserState)
        Vue.component(Cell.name,Cell)
        Vue.component(OrderItem.name,OrderItem)
        Vue.component(CheckBox.name,CheckBox)
        Vue.component(Slider.name,Slider)
        Vue.component(Radio.name,Radio)
        Vue.component(Address.name,Address)
        Vue.component(CellList.name,CellList)

    }
}