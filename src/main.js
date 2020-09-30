import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/index.less'
// import antdPlugins from './plugins/antd'
// import lazyPlugin from './plugins/lazyPlugin'
import plugins from './plugins'

const app = createApp(App)

plugins.forEach(item => {
  app.use(item)
})
// antdPlugins.forEach(item => {
//   app.use(item)
// })
// app..use(lazyPlugin)
console.log(plugins)
app
  .use(store)
  .use(router)
  .mount('#app')
