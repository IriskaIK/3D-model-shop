import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import VueGoogleMaps from '@fawmi/vue-google-maps'
let gKey = import.meta.env.VITE_API_KEY


const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
        theme: {
            defaultTheme: 'dark'
        }
    },
    
    theme: {
        defaultTheme: 'dark'
    },
    components,
    directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueGoogleMaps, {
    load: {
        key: gKey,
    },
})

app.mount('#app')
