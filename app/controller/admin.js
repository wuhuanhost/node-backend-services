var Controller = require("../core/BaseController");

// app/controller/home.js
// const Controller = require("egg").Controller;

class AdminController extends Controller {
	async login() {
		const result = await this.ctx.service.sysAdmin.login("admin", this.ctx.app.MD5("123456789"));
		this.ctx.body = result;
	}

	async add() {
		this.ctx.body = {};
	}

	async queryAdmin() {
		let account = this.ctx.params.account;
		let pageNum = this.ctx.query.page;
		this.ctx.body = {
			account,
			pageNum
		};
	}
}

module.exports = AdminController;
