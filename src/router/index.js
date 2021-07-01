import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend'
import Singer from '../components/singer/singer'
import Search from '../components/search/search'
import SingerDetail from '../components/singer/singer-detail/singer-detail'
import SongListDetail from '../components/recommend/songlist-detail/songlist-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      name: 'recommend',
      path: '/recommend',
      component: Recommend,
      children: [
        {
          name: 'songlist',
          path: '/songlist',
          component: SongListDetail
        }
      ]
    },
    {
      name: 'singer',
      path: '/singer',
      component: Singer,
      children:[
        {
          path:':id',
          component: SingerDetail
        }
      ]
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    }
  ]
})