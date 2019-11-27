module.exports = {
    // 选项...
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:true,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,
    devServer:{//代理
        port:8086,
        proxy: {
            '/': {
                target: process.env.NODE_ENV==="development"?'http://127.0.0.1:8079':"",
                ws: true,
                changeOrigin: true
            }
        }
    }
}