import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()

import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(pinia)
app.use(router)

VueQueryPlugin.install(app,{
    queryClientConfig:{
        defaultOptions:{
            queries:{
                cacheTime: 1000 * 60,
            }
        }
    }

})

app.mount('#app')