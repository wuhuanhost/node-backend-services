"use strict";

const Service = require("egg").Service;
/**
 *系统用户管理模块
 * @class SysManage
 */
class SysAdmin extends Service {
	/**
	 *用户登录
	 * @param 账号 account
	 * @param 密码 md5Pwd
	 */
	async login(account, md5Pwd) {
		var admin = await this.ctx.model.Admin.findOne({
			where: {
				account: account,
				password: md5Pwd
			}
		});
		return admin.toJSON();
	}
	//后台新增用户
	async addAdmin(admin) {
		let password = admin.password; //获取明文密码
		let encyptPwd = this.ctx.app.MD5(password); //加密密码
		let newAdmin = Object.assign({}, admin, { password: encyptPwd }); //合并对象
		return await this.ctx.model.Admin.create(newAdmin);
	}
	//修改用户
	async updateAdmin(admin) {}
	//分页查询用户列表
	async queryAdminsByPage(startNo, pageSize) {}
	// 根据用户查询用户信息
	async queryAdminById(adminId) {}
	// 删除账号(物理删除)
	async deleteAdmin(adminId) {}
	/**
	 * 为管理员分配角色
	 * @param 管理员id adminId
	 * @param 角色id roleId
	 */
	async adminAssignRole(adminId, roleId) {}
}

module.exports = SysAdmin;
