const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: '/Test/',
    devServer: {
        compress: true,
        proxy: {
            '/api': {
                target: 'https://us-central1-myproject-dd0cb.cloudfunctions.net/',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
})
