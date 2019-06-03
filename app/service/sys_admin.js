"use strict";

const Service = require("egg").Service;
/**
 *系统用户管理模块
 * @class SysManage
 */
class SysAdmin extends Service {
	//新增用户
	async addAdmin(admin) {}
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
