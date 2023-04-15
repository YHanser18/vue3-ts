// 路由创建：createRouter
// 路由模式(两者任选其一)：createWebHistory - history模式、createWebHashHistory - hash模式
// RouteRecordRaw：意为路由原始信息 （使用vue3+js的不用引入）
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

// 设置路由规则
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  // {
  //   // 定义404路由
  //   path: '/404',
  //   component: () => import('../views/404.vue')
  // },
  {
    // 匹配为定义路由然后重定向到404页面
    path: '/:pathMath(.*)',
    redirect: '/404'
  }
]

// 设置路由
const router = createRouter({
  routes,
  history: createWebHistory() // 路由模式：history
  // history:createWebHashHistory() //路由模式：hash
})

// 导出路由
export default router
