const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/public/hijja/web_order', {
      target: 'https://hijja.sistemtoko.com',
      changeOrigin: true,
    })
  );
};
