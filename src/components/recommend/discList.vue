<!--  -->
<template>
   <div class="listItem">
        <img :src="Item.picUrl" class="ItemHead">
        <div class="ItemEnd">
            <svg t="1620189933867" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2148" width="32" height="32"><path d="M698.5 526.4h73.2v-33.7c0-71.7-29.1-136.7-76.1-183.7s-111.9-76.1-183.7-76.1c-71.7 0-136.7 29-183.7 76.1-47 47-76 111.9-76 183.7v33.7h73.2c11 0 20 8.9 20 20v343.8c0 11.1-9 20-20 20h-82c-11 0-20-9-20-20v-9.9H161c-17.9 0-34.1-7.3-45.9-19.1l-0.1-0.1c-11.8-11.8-19.1-28-19.1-45.9V621.3c0-17.9 7.3-34.2 19.1-46h0.1c6.2-6.2 13.6-11.1 21.8-14.5v-72.1c0-103.5 42-197.3 109.8-265.2 67.9-67.8 161.6-109.9 265.1-109.9s197.3 42 265.2 109.9c68 68 110 161.7 110 265.3v72.1c8.3 3.3 15.7 8.3 21.9 14.5 11.8 11.8 19.1 28.1 19.1 46v193.9c0 17.9-7.3 34.2-19.1 45.9v0.1c-11.8 11.8-28.1 19.1-46 19.1h-62.4v9.9c0 11.1-9 20-20 20h-82c-11 0-20-9-20-20V546.4c0-11.1 9-20 20-20z" fill="#686868" p-id="2149"></path><path d="M305.5 566.4h-42V870.2h42z" fill="#F2F2F2" p-id="2150"></path><path d="M862.9 596.3h-62.4v244h62.4c6.9 0 13.1-2.8 17.7-7.4 4.5-4.6 7.3-10.8 7.3-17.8V621.3c0-6.9-2.8-13.2-7.4-17.7-4.5-4.5-10.7-7.3-17.6-7.3z" fill="#FFDE79" p-id="2151"></path><path d="M811.7 556.3H847v-67.5c0-92.5-37.5-176.2-98.1-236.9-60.6-60.6-144.4-98.1-236.9-98.1-92.4 0-176.2 37.5-236.8 98.1-60.7 60.6-98.2 144.4-98.2 236.9v67.5h35.2v-63.6c0-82.8 33.6-157.7 87.8-212 54.2-54.2 129.2-87.8 211.9-87.8 82.8 0 157.7 33.5 212 87.8 54.2 54.2 87.8 129.2 87.8 212v63.6zM760.5 566.4h-42v303.8h42V576.3z" fill="#F2F2F2" p-id="2152"></path><path d="M223.5 596.3h-62.4c-6.9 0-13.2 2.8-17.7 7.3s-7.3 10.8-7.3 17.7v193.9c0 6.9 2.8 13.2 7.3 17.7 4.6 4.5 10.8 7.3 17.7 7.3h62.4V596.3z" fill="#FFDE79" p-id="2153"></path></svg>
            {{Item.playCount}}
        </div>
        <div class="ItemContent">{{ Item.name }}</div>
   </div>
</template>

<script>

export default {
    props:{
        Item:{
            type:Object
        }
    },
}
</script>
<style scoped>
    .listItem{
        color: aqua;
        height: 50px;
        width: 100%;
    }
    .ItemHead{
        left: 5px;
        width: 45px;
        height: 45px;
    }
    .ItemContent{
        margin-bottom: -40px;
        width: 300px;
        position: relative;
        top: -40px;
        font-size: 18px;
        color: rgb(212, 99, 33);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .ItemEnd{
        position: relative;
        top: -55px;
        left: 50px;
    }

</style>