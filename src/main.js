
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Filters from '@/helpers/filters'
const app = createApp(App)

app.use(router)
app.use(Filters)
app.mount('#app')
