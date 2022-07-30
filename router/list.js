// 存放列表页所有服务
const Router = require("koa-router");
const list = new Router();

list.get("/", async (ctx) => {
  ctx.body = '列表页--首页'
});

list.get("/test1", async (ctx) => {
  ctx.body = '列表页--test1页'
});

list.get("/test2", async (ctx) => {
  ctx.body = '列表页--test2页'
});

module.exports = list;
