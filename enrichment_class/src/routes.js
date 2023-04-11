// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Productdetails from './components/Productdetails.vue'
import Home from './Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   
// })

// export default router

const routes = [
      { name:'Home', path: '/', component: Home },
      { name:'About', path: '/about', component: About },
      { name:'Contact', path: '/contact', component: Contact },
      { name:'Details', path: '/details', component: Productdetails },
      { name:'Signup', path: '/signup', component: Signup },
      { name:'Login', path: '/login', component: Login },

      // { path: '/about', name:'about',component: About },
      // { path: '/details', name:'details', component: Productdetails }
      // ,{ path: '/contact', name:'contact',component: Contact }
    ]

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router