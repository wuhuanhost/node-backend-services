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
		let admin = await this.ctx.model.Admin.findOne({
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
		let result = await this.ctx.model.Admin.create(newAdmin);
		return result;
	}
	//修改用户
	async updateAdmin(admin) {}
	/**
	 * 分页查询用户列表
	 * ! 是第一页还是最后一页由前端去计算和判断，后端只返回一个满足条件的总页数，每页显示的条数前端存在配置文件中
	 * @param  显示页数         pageNum
	 * @param  每页显示的条数    pageSize
	 */
	async queryAdminsByPage(currentPage, pageSize) {
		let admin = await this.ctx.model.Admin.findAndCountAll({
			where: {
				status: 1
			},
			limit: 0, //显示的条数
			offset: (currentPage - 1) * pageSize, //起始下标
			distinct: true //关联查询去掉重复数据
		});
		return admin;
	}
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

	async getPermissionByAdmin(accountId) {
		let permissionList = await this.ctx.model.Admin.find({
			where: {
				account: accountId
			},
			// plain: true,
			// raw: true,
			include: [
				{
					model: this.ctx.model.Role,
					include: [
						{
							model: this.ctx.model.Module
						}
					]
				}
			]
			// attributes: ["id", "account"] //需要返回的字段
		});
		return permissionList;
	}
}

module.exports = SysAdmin;
