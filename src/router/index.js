import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   if (to.path !== '/login') {
//     if (localStorage.token) {
//       if (to.path !== '/no-access' && to.path !== '/404') {
//         if (to.matched.length === 0) {
//           next('/404')
//         }
//         next()
//       }
//     }
//     next('/login')
//   }
//   next()
// })

export default router
