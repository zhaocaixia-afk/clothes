const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    // 浏览器配置
    devServer:{
        open:true
    },
    // 文件别名
    // vue-cli2.x
    // configureWebpack:{
    //     resolve:{
    //         alias:{
    //             'assets':'@/assets',
    //             'common':'@/common',
    //             'components':'@/components',
    //             'network':'@/network',
    //             'views':'@/views'
    //         }
    //     }
    // }
    // vue-cli3.x
    chainWebpack:(config) => {
        config.resolve.alias
        .set('assets',resolve('./src/assets'))
        .set('components',resolve('./src/components'))
        .set('views',resolve('./src/views'))
    }
}
