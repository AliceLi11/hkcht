const path = require('path');
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = {
    publicPath:"./",
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'views':'@/views',
                'store':'@/store',
                'layout':'@/layout',
                'styles':'@/styles',
                'utils':'@/utils',
                'components':'@/components'
            }
        }
    },
    chainWebpack(config){
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