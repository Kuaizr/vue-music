<!--  -->
<template>
   <div class="songList">
       <vue-scroll :ops="ops">
        <span v-if="title" class="back" @click="back"><svg t="1620443790384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3007" width="48" height="48"><path d="M330.666667 512c0-14.933333 4.266667-29.866667 14.933333-40.533333l234.666667-277.33333399c23.466667-27.733333 64-29.866667 89.6-8.53333301 27.733333 23.466667 29.866667 64 8.53333299 89.6L477.866667 512l200.53333299 236.8c23.466667 27.733333 19.19999999 68.266667-8.53333299 89.6-27.733333 23.466667-68.266667 19.19999999-89.6-8.53333301l-234.666667-277.33333399c-10.666667-10.666667-14.933333-25.6-14.933333-40.533333z" fill="#db7e08" p-id="3008"></path></svg></span>
        <div v-if="title" class="title"> {{title}} </div>
        <div v-if="title" class="baseInfo">
            <img :src="imgsrc" class="img">
            <div class="randomButton">随机播放全部</div>
        </div>
        <div class="songs">
            <div class="allsongs">全部歌曲</div>
            <ul class="listul">
                <li class="listli" @click="selectItem(item,index)" v-for="item,index in list" :key="index">
                    <span class="songname">{{item.name}}</span> <br>
                    <span class="songinfo">{{joinSingers(item.ar)}} . {{item.al.name}}</span>
                </li>
            </ul>
        </div>
       </vue-scroll>
   </div>
</template>

<script>

import vueScroll from 'vuescroll'

export default {
    data(){
        return {
            ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail:{},
                    bar:{}
                }
        }
    },
    components: {
            vueScroll
        },
    props:{
        title:{
            type: String,
            default: null
        },
        imgsrc:{
            type: String
        },
        list:{
            type: Array
        }
    },
   methods: {
       joinSingers(ar){
           var singersOfsongs = []
           for(let i = 0; i < ar.length; i++){
               singersOfsongs.push(ar[i].name)
           }
           return singersOfsongs.join('/')
       },
       back(){
           this.$router.go(-1)
       },
       selectItem(item,index){
           this.$emit('select',item,index)
       }
   },
}
</script>
<style scoped>
.songList{
    width: 100%;
    height: 100%;
}
.allsongs{
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: rgba(207, 154, 7, 0.966);
}
.listli{
    text-decoration: none;
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
}
.title{
    width: 80%;
    height: 30px;
    position: absolute;
    font-size: 21px;
    color: rgba(207, 154, 7, 0.966);
    right: 20px;
    top: 15px;
    overflow: hidden;
}
.back{
    position: fixed;
    top: 5px;
    left: 5px;
}
.baseInfo{
    height: 350px;
    overflow: hidden;
}
.img{
    width: 100%;
}
.songname{
    font-size: 18px;
    color: rgb(201, 172, 149);
}
.songinfo{
    font-size: 16px;
    color: rgb(146, 142, 142);
}
.randomButton{
    position: relative;
    top: -120px;
    width: 150px;
    text-align: center;
    border: 3px solid rgb(184, 127, 3);
    border-radius: 50px;
    margin: auto;
    color: rgb(184, 127, 3);
    font-size: 16px;
}
</style>