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
	async login(account, md5Pwd) {}
	//后台新增用户
	async addAdmin(admin) {
		var admin1 = {
			account: "dreamer12313",
			password: this.app.MD5("123456789"),
			nickname: this.app.aesDecodeCBC(this.app.aesEncodeCBC("123")),
			birthday: "1990-11-10",
			email: "abc@email.com",
			phone: "15802925304",
			sex: 1,
			avatar: "/images/avatar.png",
			status: 1,
			token: this.app.aesEncodeCBC("123"),
			created_at: new Date(),
			updated_at: new Date()
		};
		return await this.ctx.model.Admin.create(admin1);
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
