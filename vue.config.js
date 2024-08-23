module.exports = {
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