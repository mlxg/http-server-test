const path = require('path')

module.exports = {
    dev: {
        assetsSubDirectory: 'dist',
        assetsPublicPath: '/',
        proxyTable: {
            'api': {
                target: 'http://127.0.0.1:7001',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}