import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
import '@/mock/index'

import { Tab, Tabs, Swipe, SwipeItem } from 'vant'

const app = createApp(App)
app.use(router)
// 注册Vant组件
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)

app.mount('#app')
