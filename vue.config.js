const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV !== 'production') return;

  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         // 生成文件的路径，也可以与webpakc打包的一致。
  //         staticDir: path.join(__dirname, 'unpackage/dist/build/web'),

  //         // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
  //         routes: [
  //           '/',
  //           '/pages/index/search_price',
  //           '/pages/index/search_track'
  //         ],

  //         // 这个很重要，如果没有配置这段，也不会进行预编译
  //         renderer: new Renderer({
  //           inject: {
  //             foo: 'bar'
  //           },
  //           headless: true,
  //           // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
  //           renderAfterDocumentEvent: 'render-event',
  //           renderAfterTime: 5000
  //         })
  //       })
  //     ]
  //   }
  // },
  devServer: {
    proxy: {
      '/api': {  // 这里最好有一个 /api 前缀，避免与静态资源冲突
        target: 'http://47.106.143.175:8680',  // 后端服务实际地址
        changeOrigin: true,  // 允许跨域
        pathRewrite: {
          '^/api': ''  // 重写路径：去掉路径中开头的 '/api'
        }
      }
    }
  }
};