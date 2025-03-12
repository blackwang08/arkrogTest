import { createRouter, createWebHistory } from 'vue-router'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout.vue'),
    redirect: '/mainPage',
    children: [
        {
          path: '/mainPage',
          name: 'mainPage',
          component: () => import('../views/mainPage.vue')
        },
        {
          path: '/collection',
          name: 'collection',
          component: () => import('../views/collection.vue')
        }
    ]
  },

]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 这里可以添加路由守卫逻辑
  next()
})

export default router
