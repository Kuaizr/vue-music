<!--  -->
<template>
   <div class="recommend">
       <div class="recommend-context" :data="discList">
           <wc-swiper  v-if="recomments.length" class="slider-wrapper">
                <wc-slide  v-for="item,index1 in recomments" :key="index1">
                    <a :href="item.targetId">
                        <img style="width:100%" :src="item.pic" alt="">
                    </a>
                </wc-slide>
            </wc-swiper>
           <div class="recommend-list">
               <h1 class="list-title">热门歌单推荐</h1>
                <ul v-for="item,index2 in discList" :key="index2">
                    <li @click="toSongList(item)" class="list-item"><DiscList :Item = "item"></DiscList></li>
                </ul>
           </div>
       </div>
       <router-view></router-view>
   </div>
</template>

<script>

import { getRecommend ,getDisList} from '../../api/recommend'
import {ERR_OK} from '../../assets/js/config'
import DiscList from './discList'
export default {
   components: {
       DiscList,
   },
   data() {
       return {
           recomments: [],
           discList: [],
       };
   },
   //监听属性 类似于data概念
   created(){
       this._getRecommend()
       this._getDisList()
   },
   methods: {
       _getRecommend(){
           getRecommend().then((res)=>{
               if(res.code === ERR_OK){
                this.recomments = res.banners;
               }
           })
       },
       _getDisList(){
           getDisList().then(res=>{
               if(res.code === ERR_OK){
                this.discList = res.result;
               }
           })
       },
       toSongList(item){
           this.$router.push({name:'songlist',query: {
               id: item.id,
               name: item.name,
               img: item.picUrl
               }})
       }
   },
}
</script>
<style scoped>
h1{
    font-size: 18px;
    text-align: center;
    color: rgb(206, 119, 5);
}
.list-item{
    display: inline-block;
}
</style>