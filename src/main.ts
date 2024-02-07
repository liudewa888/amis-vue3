import { createApp, h } from 'vue';
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import form from '@/components/form.vue';

// import { render } from '@/lib/render.ts';

const app = createApp(App);

app.component('amis-form', form);

app.use(ElementPlus);

app.mount('#app');
