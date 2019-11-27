### 整合vue-cli3的springboot

注意事项
- 前端代码在src/main/webapp中
- 调试时，前后端需分别启动，即前端npm run serve,后端启动springboot
- 调试时若需修改后端端口号，请保持webapp中vue.config.js中 devServer.proxy
属性地址端口与后端一致
```
'/': {
    target: process.env.NODE_ENV==="development"?'http://127.0.0.1:8079':"",
    changeOrigin: true
}
```
- window打包 package.bat，linux打包 package.sh,
打包后springboot的jar包中会包含前端资源