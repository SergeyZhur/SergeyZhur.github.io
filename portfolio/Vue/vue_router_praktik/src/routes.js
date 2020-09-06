// defoult 
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


// Pages (страницы)
import Home from '@/pages/Home.vue'
import Error404 from '@/pages/404.vue'
import Exapmle from '@/pages/Example.vue'


// Routering , роуты ( пути url)

export default new Router({
  mode:'history',
  // убираем хэш # эта штучка, но она нужна для гитхаба проекта для url
routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
   {
     path: '/exapmle',
     name: 'exapmle',
     component: Exapmle
   },
     {
       path: '*',
       name: 'error404',
       component: Error404
     }
]
})