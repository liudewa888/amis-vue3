import { createApp } from 'vue';
import App from '@/App.vue';
import 'element-plus/dist/index.css';

import button from '@/components/button.vue';

const app = createApp(App);


app.component('amis-button', button);

app.mount('#app');
