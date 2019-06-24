var Controller = require("../core/BaseController");

// app/controller/home.js
// const Controller = require("egg").Controller;

class HomeController extends Controller {
	async index() {
		//app.js启动时获取的天气数据
		// console.log(this.ctx.app.cities);

		//await this.ctx.render("home", { name: "helloworld!!!" });
		// this.ctx.body = this.ctx.app.cities;
		this.error(404);
	}
}

module.exports = HomeController;
