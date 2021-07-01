<!-- 进度条组件 -->
<template>
   <div class="progressBar" ref="progressBar" @click="progressClick">
        <div class="bar-inner">
            <div class="progress" ref="progress"></div>
            <div class="progressBtn" ref="progressBtn"
                @touchstart.prevent="progressTouchStart"
                @touchmove.prevent ="progressTouchMove"
                @touchend="progressTouchEnd"
            ></div>
        </div>       
   </div>
</template>

<script>

export default {
    props:{
        percent:{
            type: Number,
            default: 0
        }
    },
    created(){
        this.touch = {init:false}
    },
    methods:{
        progressTouchStart(e){
            this.touch.init = true
            this.touch.startX = e.touches[0].pageX
            this.touch.left = this.$refs.progress.clientWidth
        },
        progressTouchMove(e){
            if(!this.touch.init){
                return 
            }
            const deltaX = e.touches[0].pageX - this.touch.startX
            const offsetWidth =Math.min(Math.max(0, this.touch.left + deltaX),this.$refs.progressBar.clientWidth)
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style.left = `${offsetWidth}px`
        },
        progressTouchEnd(e){
            this.touch.init = false
            this._triggerPercent()
        },
        _triggerPercent(){
            const barwidth = this.$refs.progressBar.clientWidth
            const percent = this.$refs.progress.clientWidth / barwidth
            this.$emit('percentChange',percent)
        },progressClick(e){
            this.$refs.progress.style.width = `${e.offsetX}px`
            this.$refs.progressBtn.style.left = `${e.offsetX}px`
            this._triggerPercent()
        }
    },
   watch:{
       percent(newpercent){
           if(newpercent >= 0 && this.touch.init == false){
               const barwidth = this.$refs.progressBar.clientWidth
               const offsetWidth = newpercent * barwidth
               this.$refs.progress.style.width = `${offsetWidth}px`
               this.$refs.progressBtn.style.left = `${offsetWidth}px`
           }
       }
   }
}
</script>
<style scoped>
.progressBar{
    display: inline-block;
    width: 60%;
    height: 10px;
}
.bar-inner{
    height: 4px;
    border: 1px solid ;
    border-radius: 5px;
    background-color: rgb(48, 40, 40);
}
.progressBtn{
    position: relative;
    top: -8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 4px solid rgb(231, 97, 8);
    background-color: rgb(182, 172, 163);
}
.progress{
    height: 100%;
    background-color: rgb(179, 91, 9);
}
</style>