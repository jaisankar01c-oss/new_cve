import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/theme.css';
import { getCSSVariables } from './styles/theme.js';

const styleEl = document.createElement('style');
styleEl.id = 'app-theme';
styleEl.textContent = getCSSVariables();
document.head.appendChild(styleEl);

createApp(App).use(router).mount('#app');
