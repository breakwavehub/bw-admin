/*
 * @Author: Breakwave
 * @Date: 2020-09-27 11:34:03
 * @LastEditTime: 2020-09-27 17:22:41
 * @LastEditors: Please set LastEditors
 * @Description: vue.config.js
 * @FilePath: \bw-admin\vue.config.js
 */
const customTheme = require('./ant-design-theme.js')
console.log(customTheme.theme)
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: customTheme.theme
      }
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(true) // 修复热更新失效
    config.plugins.delete('prefetch')
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xxx.com'
      }
    }
  }
}
