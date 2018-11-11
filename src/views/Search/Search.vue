<template>
    <div class="search">
        <TopHeader class="white search-bar">
            <div slot="center" class="search-input">
                <input v-model="searchText" type="text" placeholder="搜索商品名称">
            </div>
            <div class="search-btn" slot="right" @touchstart="search">
                搜索
            </div>
        </TopHeader>
        <div class="content">
            <div class="search-history item">
                <h3>搜索历史</h3>
                <ul class="list">
                    <router-link
                    v-for="(item,index) in history"
                    :key="index"
                    tag="li"
                    :to="`/list?keyWord=${encodeURI(item)}`"
                    >
                        {{item}}
                    </router-link>
                </ul>
            </div>
            <div class="Search-hot item">
                <h3>热门搜索</h3>
                <ul class="list">
                    <router-link
                    v-for="(item,index) in hotList"
                    :key="index"
                    tag="li"
                    :to="`/list?keyWord=${encodeURI(item)}`"
                    >
                    {{item}}
                    </router-link>
                </ul>
            </div>
        </div>
    </div> 
</template>
<script>
import "../../util/index.js"
import { isEmpty, getItem, setItem } from '../../util/index.js';
export default {
    name:'Search',
    data(){
        return {
            searchText:"",
            history:getItem('history')||[],
            hotList:[],
           
        }
    },
    created(){
        this.$http.searchHot().then(data=>{
            this.hotList=data;
        })
    },
     methods:{
                search(){
                    const {searchText}=this
                    if(isEmpty(searchText)){
                        this.$toast({
                            icon:'close',
                            text:'搜索内容不能为空'
                        })
                        return;
                    }
                    this.history.push(searchText);
                    this.save()
                    this.searchText=''

                    //跳转
                    this.$router.push({
                        path:'/list',
                        query:{
                            keyWord:encodeURI(searchText)
                        }
                    })

                },
                save(){
                    setItem('history',this.history);
                }
            }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/search.scss';
</style>
