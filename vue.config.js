const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: true,
  publicPath: BASE_URL,
  chainWebpack: config => {
    // @ 和 _c 两个配置貌似项目初始化时默认就有的，这里不配置也能用
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false, // 打包时不生成 .map 文件
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
