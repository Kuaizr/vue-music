# vue-music

> 音乐播放器-移动端
基于： 网易云音乐 Node.js API service
https://github.com/Binaryify/NeteaseCloudMusicApi
接口文档：https://neteasecloudmusicapi.vercel.app
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 说明：

本项目是作者本人暑假上网课时拿来练手的vue项目，因为时间原因很多功能没有实现，后续也没有继续完善的想法，本项目仅用于学习用途

## 主要功能：

1. 推荐歌单（轮播图只是轮播图，点了没用）
2. 歌手
3. 查看歌单或歌手的歌曲信息
4. 播放歌曲（随机，单曲，顺序），进度条可拖拽，下面的五个按钮收藏没用，其他按钮正常；播放器有mini和normal两种。
5. 搜索歌曲

## 运行截图：

![image-20210701175923804](https://gitee.com/kzer/images/raw/master/img/20210701175924.png)

## 注意事项：

1. 需要先登陆网易云账号拿到cookie写入src/assets/js/config.js 中的commonParas字段后才可以正常使用，不然很多功能无法使用，当然就算登陆了很多歌曲因为版权等原因也是无法播放的。

![image-20210701174418726](https://gitee.com/kzer/images/raw/master/img/20210701174418.png)

2. 如果是自己部署的接口，请把src/api下面的所有的文件中的url部分改成自己部署的地址或者本地地址

   ![image-20210701180129604](https://gitee.com/kzer/images/raw/master/img/20210701180129.png)

