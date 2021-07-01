<!--  -->
<template>
      <div class="singer-detail">
         <SongList @select="selectItem" :list="songs" :title="this.$route.query.name" :imgsrc="this.$route.query.img"></SongList>
      </div>
</template>

<script>
import SongList from '../../../base/songList/songList'
import {getSongsByListid} from '../../../api/recommend'
import { mapActions } from "vuex";
export default {
   data(){
      return {
         songs: []
      }
   },
   components: {
      SongList
   },
   created(){
       this._getSongsByListid({
           id: this.$route.query.id
       })
   },
   methods: {
       _getSongsByListid(obj){
          getSongsByListid(obj).then(res=>{
             if(res.code === 200){
                this.songs = res.playlist.tracks
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