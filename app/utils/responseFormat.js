/*
 * @Description: response格式化工具，已经使用BaseController中相应方法取代，使用其他框架可以使用本方法来格式化responses数据
 * @Author: your name
 * @Date: 2019-06-24 09:19:15
 * @LastEditTime: 2019-07-12 15:25:16
 * @LastEditors: Please set LastEditors
 */
class ResponseFormat {
	constructor() {
		this.response = {
			code: "",
			data: {},
			msg: ""
		};
		this.StatusCode = new Map();
		this.registeStatusCode("0", "OK");
		this.registeStatusCode("-1", "ERROR");
	}
	registeStatusCode(code, description) {
		this.StatusCode.set(code, description);
	}
	registeStatusCodes(arr) {
		for (let [code, description] of arr) {
			this.StatusCode.set(code, description);
		}
	}
	set(data, code = "0", msg) {
		code = code.toString();
		if (this.StatusCode.has(code)) {
			return {
				code,
				data,
				msg: this.StatusCode.get(code)
			};
		} else {
			// log Something ,here is an unique code
			return {
				code,
				data,
				msg: msg || "Unresolvable Status Code :" + code
			};
		}
	}
	error(code = "-1", msg) {
		code = code.toString();
		if (this.StatusCode.has(code)) {
			return {
				code,
				data: {},
				msg: this.StatusCode.get(code)
			};
		} else {
			// log Something ,here is an unique code
			return {
				code,
				data: {},
				msg: msg || "Unresolvable Status Code :" + code
			};
		}
	}
}

let responseFormat = new ResponseFormat();

//registe Status Code

responseFormat.registeStatusCodes([["404", "NtFound"], ["200", "success"], ["1", "等待中"]]);

export default responseFormat;
