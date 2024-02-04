import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
    },
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  optimizeDeps: {
    include: [],
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      // '/api': {
      //   // 选项写法
      //   target: 'http://172.16.16.20:8080', // 后端本地服务器
      //   changeOrigin: true,
      //   rewrite: path => {
      //     path = path.replace(/^\/api/, '');
      //     // 进行调试输出
      //     console.log('vite proxy url: ', path);
      //     return path;
      //   },
      // },
    },
  },
});
