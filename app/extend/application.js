/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-04 16:20:28
 * @LastEditTime: 2019-06-04 17:20:06
 * @LastEditors: Please set LastEditors
 */
var CryptoJS = require("crypto-js");
module.exports = {
	MD5(str) {
		// 密码盐值
		const salt = "25f9e794323b453885f5181f1b624d0b";
		return CryptoJS.HmacMD5(str, salt).toString();
	},

	aesEncodeCBC(data, key, iv) {
		key = key || this.config.aesConfig.key;
		iv = iv || this.config.aesConfig.iv;
		const encrypt = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
			iv: CryptoJS.enc.Utf8.parse(iv), //CBC模式需要格式化
			// iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
			// format: CryptoJS.format.Hex //返回的数据格式
		});
		// console.log("value: " + encrypt);
		return encrypt.toString();
	},

	aesDecodeCBC(data, key, iv) {
		key = key || this.config.aesConfig.key;
		iv = iv || this.config.aesConfig.iv;
		const decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
			iv: CryptoJS.enc.Utf8.parse(iv),
			// iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
			// format: CryptoJS.format.Hex
		});
		// console.log("value: " + decrypt.toString(CryptoJS.enc.Utf8));
		return decrypt.toString(CryptoJS.enc.Utf8);
	}
};
