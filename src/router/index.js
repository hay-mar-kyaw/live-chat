import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
import {auth} from '../firebase/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path:'/chatroom',
      name: 'chatroom',
      component: Chatroom,
      beforeEnter(to,from,next){
        let user = auth.currentUser;
        if(user){
            next()
        }else{
            next({name:"welcome"})
        }

      }
    }
    
  ]
})

export default router
