import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Homepage from '../views/Homepage.vue'
import Oyster from '../views/Oyster.vue'
import Caviar from '../views/Caviar.vue'
import Urchin from '../views/Urchin.vue'
import Lobster from '../views/Lobster.vue'
import Contact from '../views/Contact.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/oyster',
    name: 'Oyster',
    component: Oyster
  },
  {
    path: '/caviar',
    name: 'Caviar',
    component: Caviar
  },
  {
    path: '/urchin',
    name: 'Urchin',
    component: Urchin
  },
  {
    path: '/lobster',
    name: 'Lobster',
    component: Lobster
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() { 
    window.scrollTo(0,0);
}
});

export default router;
