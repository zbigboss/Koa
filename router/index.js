const Router = require("koa-router");
const router = new Router();
const list = require("./list");

router.get("/", async (ctx) => {
  ctx.body = "首页";
});

// router.get("/list", async (ctx) => {
//   ctx.body = "列表页";
// });
router.use("/list", list.routes(), list.allowedMethods()); // NOTE: 这里不要忘了在use要加上你要调用子地址的父级地址，否则不生效（坑）

module.exports = router;
