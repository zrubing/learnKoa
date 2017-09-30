'use strict'

const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router =require('koa-router')();
const bodyParser=require('koa-bodyParser');
// 导入controller middleware:
const controller = require('./controller');
let staticFiles = require('./static-files');

const app = new Koa();
//必须在router之前注册
app.use(bodyParser());
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
app.use(staticFiles('/static/', __dirname + '/static'));

app.use(controller());



app.listen(3000);
console.log('app started at port 3000');