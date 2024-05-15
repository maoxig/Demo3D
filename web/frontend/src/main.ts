
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../styles/global.css'
import "element-plus/dist/index.css"
import 'element-plus/theme-chalk/display.css'
import "element-plus/theme-chalk/dark/css-vars.css"


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)

app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
