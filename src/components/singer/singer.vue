<!--  -->
<template>
   <div class="singer">
    <div class="search">
        全部歌手
    </div>
    <div class="singer-content">
        <ul>
            <li @click="selectItem(item)" v-for="item,index3 in Singers" :key="index3" class="singerItem">
                    <img :src="item.img1v1Url" class="singerImg">
                    <span class="SingerName">{{ item.name }}</span>
            </li>
        </ul>
    </div>
    <router-view></router-view>
   </div>
</template>

<script>
import { getAllsingers } from '../../api/singer'
import {ERR_OK} from '../../assets/js/config'
import { mapMutations,mapGetters } from 'vuex'
export default {
    data(){
        return {
            Singers:[]
        }
    },
   mounted(){
       this._getAllSingers()
   },
   computed: {
   },
   methods: {
       _getAllSingers(){
           getAllsingers().then(res=>{
               if(res.code === ERR_OK){
                this.Singers = res.artists
               }
           })
       },
       selectItem(item){
           this.$router.push({
               path:`/singer/${item.id}`
           })
           this.setSinger(item)
       },
       ...mapMutations({
           setSinger: 'SET_SINGER'
       })
   },
}
</script>
<style scoped>
.singerItem{
    text-decoration: none;
    display: block;
    height: 80px;
}
.singerImg{
    width: 70px;
    border-radius: 60%;
}
.SingerName{
    color: rgb(199, 140, 13);
    margin-left: 20px;
    font-size: 20px;
    position: relative;
    top: -20px;
}
.singerInput{
    display: inline-block;
    width: 60%;
    height: 23px;
}
.button{
    display: inline-block;
    border: 1px solid black;
    height: 26px;
    background-color: rgb(199, 140, 13);
}
.search{
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 20px;
    color: rgba(207, 154, 7, 0.966);
}
</style>