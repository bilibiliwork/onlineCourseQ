const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port:7070,
    webSocketServer:false,
    proxy:{
      '/api':{
        target:'http://localhost:8089',
        pathRewrite:{'^/api':'http://localhost:8089'},
        changeOrigin:true                  
      }
    }
  },
})
