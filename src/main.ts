import App from './App.vue'
import router from './router' // router
import { createApp } from 'vue'

import { createPinia } from 'pinia' // pinia
import * as echarts from 'echarts' // echarts
import Antd from 'ant-design-vue' // ant-design-vue
import 'ant-design-vue/dist/antd.css' // ant-design-css

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$echarts = echarts // 全局echarts

app.use(pinia)
app.use(router)
app.mount('#app')
