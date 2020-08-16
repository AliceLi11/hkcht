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
                'utils':'@/utils'
            }
        }
    }
}