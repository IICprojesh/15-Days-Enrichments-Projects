import { createApp } from 'vue'
import App from './App.vue'
// import Home from './Home.vue'
import router from './routes'

createApp(App)
  .use(router)
  .mount('#app')
