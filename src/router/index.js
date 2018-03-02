import Vue from 'vue'
import Router from 'vue-router'

// import VueVideoPlayer from 'vue-video-player'

import Home from '@/components/Home'
import Clean from '@/components/Clean'
import CleanModule from '@/components/CleanModule'
import CommSafety from '@/components/CommSafety'
// import Video from '@/components/Video'

Vue.use(Router)

// Vue.use(VueVideoPlayer, /* {
//   options: global default options,
//   events: global videojs events
// } */)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/clean',
      name: 'clean',
      component: Clean
    },
    {
      path: '/clean/:id',
      name: 'cleanModule',
      component: CleanModule
    },
    // {
    //   path: '/video',
    //   name: 'video',
    //   component: Video
    // },
    {
      path: '/commsafety',
      name: 'commsafety',
      component: CommSafety
    }
  ]
})
