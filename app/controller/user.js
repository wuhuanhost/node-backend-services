// app/controller/user.js
const Controller = require("egg").Controller;
const auth = require("../utils/auth.js");

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
		console.log("=================casbin 权限测试=====================");
		const e = await auth();

		//添加角色
		const addeda = await e.addRoleForUser("alice", "data2_admin");
		console.log("角色添加状态" + addeda);
		//角色添加权限
		await e.addPermissionForUser("data2_admin", "data1", "read");
		await e.addPermissionForUser("data2_admin", "data1", "write");

		//获取所有角色
		const allRoles = e.getAllRoles();
		console.log("所有角色>>>" + allRoles);

		// 用户添加权限
		await e.addPermissionForUser("alice", "read");

		//判断用户是否具有权限
		const res = await e.hasPermissionForUser("alice", "read");

		console.log("alice 具有write权限>>>>>>>>>>>>" + res);

		// 获取用户的角色
		const res1 = await e.getRolesForUser("alice");
		console.log("alice所在的角色" + res1);

		//判断角色是否具有权限
		var dasd = await e.hasNamedPolicy("p", "data2_admin", "data1", "write");
		console.log("data2_admin 具有write权限>>>>>>>>>>>>" + dasd);

		//添加权限
		await e.addPolicy("data2_admin", "app", "/app/1", "GET");
		// 添加角色分组（app为模块）
		await e.addGroupingPolicy("alice", "data2_admin", "app");

		var dasdasd = await e.hasNamedPolicy("p", "data2_admin", "app", "/app/1", "GET");
		console.log("data2_admin 具有write权限>>>>>>>>>>>>" + dasdasd);

		console.log("=================casbin 权限测试=====================");

		console.error(this.ctx.request.header["access-token"]);
		var token = this.ctx.request.header["access-token"];
		//app.js启动时获取的天气数据
		var _this = this;
		this.ctx.app.jwt.verify(token, this.ctx.app.config.jwt.secret, function(err, result) {
			console.log(result);
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

	async getTest() {
		const ctx = this.ctx;
		let user = await ctx.service.user.get(ctx.query.name);
		ctx.body = user;
	}

	async getTest1() {
		const ctx = this.ctx;
		ctx.app.logger.info("访问时间 %d ms", Date.now());
		ctx.app.logger.warn("warning!");

		let user = await ctx.service.sysAdmin.getPermissionByAdmin(ctx.query.account);
		ctx.body = JSON.stringify(user);
	}
}

module.exports = UserController;
