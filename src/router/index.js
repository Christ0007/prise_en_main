import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import Calculator from '../views/Calculator.vue'
import DashboardView from '../views/DashboardView.vue'
import StatView from '../views/StatView.vue'
import ProfilView from '../views/ProfilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    children: [
      {
        path: 'stats',
        name: 'dashboard-stats',
        component: StatView
      },
    {
      path: 'profile',
      name: 'dashboard-profile',
      component: ProfilView
    }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const isLoggedIn = false

  if (to.path.startsWith('/dashboard') && !isLoggedIn) {
    alert("Accès refusé")
    next(false)
    //next('/calculator')
  } else {
    next()
  }
})
export default router