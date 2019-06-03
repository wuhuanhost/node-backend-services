"use strict";

const Service = require("egg").Service;
/**
 *系统权限管理模块
 * @class SysManage
 */
class SysPermission extends Service {
	// 添加权限
	async addPermission(permission) {}
	// 修改权限
	async updatePermission(permission) {}
	// 查询权限根据权限id
	async queryPermissionById(permissionId) {}
	//分页查询权限
	async queryPermissionByPage(startNo, pageSize) {}
	// 删除权限
	async deletePermission(permissionId) {}
}
module.exports = SysPermission;
