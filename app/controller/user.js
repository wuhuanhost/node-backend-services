// app/controller/user.js
const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
	 //app.js启动时获取的天气数据
    // console.log(this.ctx.app.cities);
    console.log(this.ctx.body)
    //$.ajax post提交后台this.ctx.request.body获取不到参数？
    // if(this.ctx.request.body.account==="admin"&&this.ctx.request.body.pwd==="123"){
    if(true){
		const token=this.ctx.app.jwt.sign({ foo: 'bar' }, this.ctx.app.config.jwt.secret);
		this.ctx.body = {"token":token};
	}else{
		this.ctx.body = {"msg":"用户名密码错误！"};	
	}
	    // this.ctx.body = this.ctx;
  }

  async getUser() {
  	console.error(this.ctx.request.header['access-token'])
  	var token=this.ctx.request.header['access-token'];
	 //app.js启动时获取的天气数据
	 var _this=this;
   this.ctx.app.jwt.verify(token, this.ctx.app.config.jwt.secret, function(err,result){
		if(!err){
			_this.ctx.body = {"msg":"token 正确"};	
		}else{
			_this.ctx.body = {"msg":"token error"};
		}
   })
	
  }
}

module.exports = UserController;