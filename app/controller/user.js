// app/controller/user.js
const Controller = require("egg").Controller;

function toInt(str) {
    if (typeof str === "number") return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}
class UserController extends Controller {
    async login() {
        //app.js启动时获取的天气数据
        // console.log(this.ctx.app.cities);
        console.log("===============================");
        console.log("用户名" + this.ctx.request.body.account);
        console.log("密 码" + this.ctx.request.body.pwd);
        console.log("===============================");
        //$.ajax post提交后台this.ctx.request.body获取不到参数？
        var result = {};
        if (this.ctx.request.body.account === "admin" && this.ctx.request.body.pwd === "123") {
            const token = this.ctx.app.jwt.sign({ foo: "bar" }, this.ctx.app.config.jwt.secret);
            result = { success: true, token: token };
        } else {
            result = { success: false, msg: "用户名密码错误！" };
        }
        this.ctx.body = result;
    }

    async getUser() {
        console.error(this.ctx.request.header["access-token"]);
        var token = this.ctx.request.header["access-token"];
        //app.js启动时获取的天气数据
        var _this = this;
        this.ctx.app.jwt.verify(token, this.ctx.app.config.jwt.secret, function(err, result) {
            if (!err) {
                _this.ctx.body = { success: true, msg: "token 正确", data: { msg: "hello world!!!" } };
            } else {
                _this.ctx.body = { success: false, msg: "token error" };
            }
        });
    }

    async show() {
        console.error(this.ctx.query.id);
        const ctx = this.ctx;
        ctx.body = await ctx.model.User.findById(parseInt(this.ctx.query.id));
    }

    /**
     * 根据用户名称查找用户
     */
    async getUserByName() {
        console.log(this.ctx.query.id);
        const ctx = this.ctx;
        ctx.body = await ctx.service.user.findByName(ctx.query.name);
    }
}

module.exports = UserController;
