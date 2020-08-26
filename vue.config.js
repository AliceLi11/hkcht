const path = require('path');
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = {
    publicPath:"./",
    devServer:{
      open:true,
      // before:require('./mock/mock-server.js')
    },
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'views':'@/views',
                'store':'@/store',
                'layout':'@/layout',
                'styles':'@/styles',
                'utils':'@/utils',
                'components':'@/components',
                'icons':'@/icons'
            }
        }
    },
    chainWebpack(config){
      /**
       * vue-cli默认情况下会使用 url-loader 对svg进行处理，会将它放在/img 目录下，所以这时候我们引入svg-sprite-loader 会引发一些冲突。
       * 所以最安全合理的做法是使用 webpack 的 exclude 和 include ，让svg-sprite-loader只处理你指定文件夹下面的 svg，url-loader只处理除此文件夹之外的所有 svg
       */
       // set svg-sprite-loader
      config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
      config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId:'icon-[name]'
          })
          .end()
    }
}