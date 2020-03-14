const Koa = require('koa');
const fs = require('fs')
const KoaStatic = require('koa-static');
const path = require('path')


// const bodyParser = require('koa-bodyparser');

// const controller = require('./controller');

// const templating = require('./templating');

const app = new Koa();
console.log(path.join(__dirname,'../'));
console.log(__dirname+"../");

app.use(KoaStatic(__dirname+"\\..\\")); //里面传的路径和index.html里面引用静态资源的src或者fref的路径配合


// app.use(async(ctx, next) => {   //这里因为请求的是静态网页index.html,所以用koastatic已经能够实现。index.html务必在启动目录，默认在启动目录找
//     console.log('>>> 1');
//     await next()
//     ctx.response.type='text/html'
//     ctx.response.body = fs.readFileSync(__dirname+'/index.html')
// })



app.listen(3005);
console.log('app started at port 3005...');
