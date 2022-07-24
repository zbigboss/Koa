// 入口文件
const Koa = require("koa2"); // 构造函数
const app = new Koa(); // 声明一个实例
const port = 8089;

app.use(async (ctx) => {
  ctx.body = "hello,koa";
});

app.listen(port, () => {
  console.log(`server is runing in http://localhost:${port}`);
});
