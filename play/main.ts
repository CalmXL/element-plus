import { createApp } from 'vue';
import App from './App.vue';
import zIcon from '@ele-plus/components/icon';

const app = createApp(App)
app.use(zIcon)

app.mount('#app');
