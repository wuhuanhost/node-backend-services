// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
	 //app.js启动时获取的天气数据
    console.log(this.ctx.app.cities)
	this.ctx.body = this.ctx.app.cities;
	
  }
}

module.exports = HomeController;