/* eslint-disable no-undef */
const assert = require("assert");
const { app } = require("egg-mock/bootstrap");

// describe("addAdmin()", () => {
// 	it("新增用户测试", async () => {
// 		// 创建 ctx
// 		const ctx = app.mockContext();
// 		// console.log(ctx.service);
// 		// 通过 ctx 访问到 service.user
// 		const admin = await ctx.service.sysAdmin.addAdmin({}); // console.log(admin);
// 		assert(admin);
// 	});
// });

describe("findAdmin()", () => {
	it("admin登录测试", async () => {
		// 创建 ctx
		const ctx = app.mockContext();
		// console.log(ctx.service);
		// 通过 ctx 访问到 service.user
		const admin = await ctx.service.sysAdmin.login("admin", ctx.app.MD5("123456789")); // console.log(admin);
		assert(admin);
		assert(admin.account === "admin");
	});
});
