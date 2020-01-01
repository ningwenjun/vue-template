const path = require('path')

const port = 9969
const title = 'vue模板'

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath:'',
  lintOnSave: false,
  devServer:{
    port
  },
  configureWebpack:{
    name:title
  },
  chainWebpack: config => {
    // 把原来的默认svg的loader规则排除svg-sprite目录
    config.module
      .rule('svg')
      .exclude
        .add(resolve('src/icons'))
        .end()
    // 增加svg-sprite-loader规则
    config.module
      .rule('svg-sprite-loader')
      .test(/\.(svg)(\?.*)?$/)
      .include
        .add(resolve('src/icons'))
        .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId:'icon-[name]'
      })
  }
}
