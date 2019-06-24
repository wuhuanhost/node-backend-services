const { Controller } = require("egg");
class BaseController extends Controller {
	constructor(ctx) {
		super(ctx);
		this.StatusCode = new Map();
		// 状态比较多的时候可以新建一个js用于保存状态值
		this.registeStatusCode("0", "SUCCESS");
		this.registeStatusCode("-1", "ERROR");
		this.registeStatusCode("404", "NOT FOUND");
	}
	registeStatusCode(code, description) {
		this.StatusCode.set(code, description);
	}
	success(data, code = "0", msg) {
		code = code.toString();
		if (this.StatusCode.has(code)) {
			this.ctx.body = {
				code,
				data,
				msg: this.StatusCode.get(code)
			};
		} else {
			this.ctx.body = {
				code,
				data,
				msg: msg || "Unresolvable Status Code :" + code
			};
		}
	}

	error(code = "-1", msg) {
		code = code.toString();
		if (this.StatusCode.has(code)) {
			this.ctx.body = {
				code,
				data: {},
				msg: this.StatusCode.get(code)
			};
		} else {
			this.ctx.body = {
				code,
				data: {},
				msg: msg || "Unresolvable Status Code :" + code
			};
		}
	}
}
module.exports = BaseController;
