<!--  -->
<template>
   <div class="tab">
       <router-link tag="div" class="tab-item" to="/recommend">
        <span class="tab-link">推荐</span>
       </router-link>
       <router-link tag="div" class="tab-item" to="/singer">
        <span class="tab-link">歌手</span>
       </router-link>
       <router-link tag="div" class="tab-item" to="/search">
        <span class="tab-link">搜索</span>
       </router-link>
   </div>
</template>

<script>

export default {
   components: {},
   data() {
       return {
           
       };
   },
   //监听属性 类似于data概念
   computed: {},
   methods: {
       
   },
}
</script>
<style scoped>
    .tab{
        display: flex;
        height: 44px;
        font-size: 14px;
    }
    .tab .tab-item{
        flex: 1;
        text-align: center;
    }
    
    .router-link-active .tab-link{
        color: rgb(184, 137, 8) !important;
        border-bottom: 2px solid rgb(184, 137, 8);
    }
    .tab .tab-item .tab-link{
        padding-bottom: 5px;
        color: rgb(110, 107, 103);
    }
    
</style>