import { createApp } from 'vue'
import App from './App.vue'
import { PrimeVue } from '@/plugins/PrimeVue'
import router from '@/router'
import 'windi.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
