import { defineConfig } from 'umi';

// const SERVER_URL = 'http://nurse.dev.kepai365.com/';
const SERVER_URL = 'http://huli.tmp.vastchain.ltd/';
// const SERVER_URL = 'http://60.205.253.72/#/';
// const SERVER_URL = 'http://192.168.3.10:8080/';
// const SERVER_URL = '';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  title: '任性排骨',
  history: { type: 'hash' },
  ignoreMomentLocale: true,
  targets: {
    ie: 10,
  },
  proxy: {
    '/manager': {
      target: SERVER_URL,
      changeOrigin: true,
      pathRewrite: { '^/': '' },
    },
    '/web': {
      target: SERVER_URL,
      changeOrigin: true,
      pathRewrite: { '^/': '' },
    },
    '/tools': {
      target: SERVER_URL,
      changeOrigin: true,
      pathRewrite: { '^/': '' },
    },
    '/upload': {
      target: SERVER_URL,
      changeOrigin: true,
      pathRewrite: { '^/': '' },
    },
  },
});
