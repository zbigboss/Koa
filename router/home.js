// 首页所有服务接口
const Router = require("koa-router");
const home = new Router();

home.get("/", async (ctx) => {
  ctx.body = '首页'
});

home.get("/banner", async (ctx) => {
  ctx.body = '首页--轮播图'
});

home.get("/footer", async (ctx) => {
  ctx.body = '首页--底部'
});

module.exports = home;
