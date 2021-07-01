<!--  -->
<template>
    <div>
        <div class="search">
            <input type="text" class="singerInput" ref="text">
                <div class="button" @click="dosearch()">Search</div>
        </div>
        <div class="search-detail">
         <SongList @select="selectItem" :list="songs"></SongList>
      </div>
   </div>
</template>

<script>
import SongList from '../../base/songList/songList'
import { getSongsByKeywords } from '../../api/search'
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
       this._getSongsByKeywords({
           keywords: '海阔天空'
       })
   },
   methods: {
       _getSongsByKeywords(obj){
          getSongsByKeywords(obj).then(res=>{
             if(res.code === 200){
                this.songs = res.result.songs
               }
          })
       },
       dosearch(){
           let texts = this.$refs.text.value?this.$refs.text.value:'周杰伦'
            this._getSongsByKeywords({
            keywords: texts
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
}
</style>