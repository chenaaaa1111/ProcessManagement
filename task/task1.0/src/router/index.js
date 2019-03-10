import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

  //Element ui
//import Index from '@/components/Index_e'
import Simple from '@/components/Simple'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[{
        path: '/simple',
        name: 'simple',
        component: Simple,
      }]
    }
  ]
})
