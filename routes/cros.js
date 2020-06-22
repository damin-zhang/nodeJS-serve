
// 1. 获取router实例
const router = require("express").Router();
// 2. 处理路由
// => jsonp
router.get("/jsonp", (req, res) => {
    let fnName = req.query.callback;
    let data = {
        name: "张大敏",
        address: "四川成都"
    }
    res.send(`${fnName}(${JSON.stringify(data)})`);
});
// 3. 导出路由
module.exports = router;
