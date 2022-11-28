const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias.set('vue', '@vue/compat')

        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                return {
                    ...options,
                    compilerOptions: {
                        compatConfig: {
                            MODE: 3
                        }
                    }
                }
            })
    }
})
