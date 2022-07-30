// 入口文件
const Koa = require("koa2"); // 构造函数
const app = new Koa(); // 声明一个实例
const port = 8089;
const router = require("./router");

// app.use(async (ctx) => {
//   ctx.body = "hello,koa";
// });

/**
 * use()就是调用router中间件
 * router.routes()的作用是：启动路由
 * router.allowedMethods()的作用是：允许任何请求
 */
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
  console.log(`server is runing in http://localhost:${port}`);
});
