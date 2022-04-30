require('./bootstrap');

import { createApp } from 'vue'
import Inizio from './pages/home'

const app = createApp({});
app.component('inizio', Inizio);

app.mount('#app');
