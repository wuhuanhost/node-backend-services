/* eslint-disable no-undef */
const assert = require("assert");
const { app } = require("egg-mock/bootstrap");

describe("findRolePermission()", () => {
	it("获取超级管理员角色权限测试", async () => {
		// 创建 ctx
		const ctx = app.mockContext();
		// console.log(ctx.service);
		// 通过 ctx 访问到 service.user
		const result = await ctx.service.sysRole.getPermissionsByRole(1); // console.log(admin);
		console.log(
			result.toJSON({
				omitNull: true
			})
		);
		assert(result.modules.length === 5);
	});
	it("获取普通管理员角色权限测试", async () => {
		// 创建 ctx
		const ctx = app.mockContext();
		// console.log(ctx.service);
		// 通过 ctx 访问到 service.user
		const result = await ctx.service.sysRole.getPermissionsByRole(2); // console.log(admin);
		console.log(
			result.toJSON({
				omitNull: true
			})
		);
		assert(result.modules.length === 2);
	});
});
