<!--  -->
<template>
      <div class="singer-detail">
         <SongList @select="selectItem" :list="songs" :title="this.singer.name" :imgsrc="this.singer.img1v1Url"></SongList>
      </div>
</template>

<script>
import SongList from '../../../base/songList/songList'
import {getSongsBysinger} from '../../../api/singer'
import { mapGetters,mapActions } from "vuex";
export default {
   data(){
      return {
         songs: []
      }
   },
   components: {
      SongList
   },
   computed: {
      ...mapGetters([
         'singer'
      ])
   },
   created(){
         this._getSongsBysinger({
            id: this.singer.id,
            order: 'hot'
         })
   },
   methods: {
       _getSongsBysinger(obj){
          getSongsBysinger(obj).then(res=>{
             if(res.code === 200){
                this.songs = res.songs
               }
          })
       },
       selectItem(item,index){
          this.selectPlay({
             list: this.songs,
             index
          })
       },
       ...mapActions([
          'selectPlay'
       ])
   },
}
</script>
<style scoped>
   .singer-detail{
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgb(61, 57, 57);
   }
</style>