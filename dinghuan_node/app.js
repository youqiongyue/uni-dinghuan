const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// 代理配置
const proxyOptions = {
    target: 'http://47.106.143.175:8680', // 目标服务器
    changeOrigin: true, // 更改源
    pathRewrite: {
        '^/api': '', // 保持路径
    },
};

// 使用代理中间件
app.use('/api', createProxyMiddleware(proxyOptions));

// 启动服务器
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});