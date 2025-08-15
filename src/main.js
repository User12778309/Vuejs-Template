import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue, { /* options */ });
app.mount('#app')