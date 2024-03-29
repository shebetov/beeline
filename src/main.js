import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import Icon from './components/Icon.vue'

const app = createApp(App)

app.component('Icon', Icon)

app.mount('#app')
