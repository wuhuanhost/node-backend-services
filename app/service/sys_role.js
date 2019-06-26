"use strict";

const Service = require("egg").Service;
/**
 *系统角色管理模块
 * @class SysManage
 */

class SysRole extends Service {
	//新增角色
	async addRole(role) {}
	//修改角色
	async updateRole(role) {}
	//根据角色id查询角色信息
	async queryRoleById(roleId) {}
	//分页查询角色列表
	async queryRoleByPage(startNo, pageSize) {}
	//查询所有的角色
	async queryRoles() {}
	//删除角色(物理删除)
	async deleteRole(roleId) {}
	/**
	 * 角色授权
	 * @param 角色id roleId
	 * @param 权限id数组 permissionIds
	 */
	async roleAuthorization(roleId, permissionIds) {}

	/**
	 * 根据角色获取用户的权限列表
	 * @param 角色id roleId
	 */
	async getPermissionsByRole(roleId) {
		roleId = 1;
		let permissionList = await this.ctx.model.Role.find({
			where: {
				id: roleId
			},
			// plain: true,
			// raw: true,
			include: [
				{
					model: this.ctx.model.Module
				}
			],
			attributes: ["id", "name", "remark"] //需要返回的字段
		});

		return permissionList;
	}
	/**
	 * 判断角色是否具有权限
	 * @param 角色id roleId
	 */
	async hasPermissionByRole(roleId) {}
}
module.exports = SysRole;
