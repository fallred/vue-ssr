let express = require('express');
let app = express();
let Vue = require('vue');
let fs = require('fs');
let proxy = require('express-http-proxy');
// vue提供的服务端渲染的包
let VueServerRenderer = require('vue-server-renderer');
// 创建vue实例
let vm = new Vue({
    data: {
        list: '数据列表'
      },
      template: `<div>{{list}}</div>`
});
let template = fs.readFileSync('./index.html','utf8');
// 创建渲染函数
let render = VueServerRenderer.createRenderer({
    template
});

app.get('*',(req,res)=>{
    render.renderToString(vm,{
        title:'hello'
    },function(err,html){
        res.send(html)
    })
});
app.use(express.static('public'));
app.use('/api',proxy('http://127.0.0.1:4000',{
  proxyReqPathResolver(req){
    return `/api${req.url}`;
  }
}));

app.listen(3000);