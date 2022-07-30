const Router = require("koa-router");
const router = new Router();
const list = require("./list");
const home = require("./home");

// router.get("/", async (ctx) => {
//   ctx.body = "首页";
// });

// router.get("/list", async (ctx) => {
//   ctx.body = "列表页";
// });
router.use("/list", list.routes(), list.allowedMethods()); // NOTE: 这里不要忘了在use要加上你要调用子地址的父级地址，否则不生效（坑）
router.use("/home", home.routes(), home.allowedMethods());

// 后端的路由重定向，跟前端的路由重定向类似
router.redirect("/", "/home");

module.exports = router;
