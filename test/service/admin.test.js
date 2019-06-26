/* eslint-disable no-undef */
const assert = require("assert");
const { app } = require("egg-mock/bootstrap");

// describe("addAdmin()", () => {
// 	it("新增用户测试", async () => {
// 		// 创建 ctx
// 		const ctx = app.mockContext();
// 		var admin = {
// 			account: "dreamer12313",
// 			password: this.app.MD5("123456789"),
// 			nickname: this.app.aesDecodeCBC(this.app.aesEncodeCBC("123")),
// 			birthday: "1990-11-10",
// 			email: "abc@email.com",
// 			phone: "15802925304",
// 			sex: 1,
// 			avatar: "/images/avatar.png",
// 			status: 1,
// 			token: this.app.aesEncodeCBC("123"),
// 			created_at: new Date(),
// 			updated_at: new Date()
// 		};
// 		// console.log(ctx.service);
// 		// 通过 ctx 访问到 service.user
// 		const result = await ctx.service.sysAdmin.addAdmin(admin); // console.log(admin);
// 		assert(result);
// 	});
// });

describe("findAdmin()", () => {
	it("admin登录测试", async () => {
		// 创建 ctx
		const ctx = app.mockContext();
		// console.log(ctx.service);
		// 通过 ctx 访问到 service.user
		const result = await ctx.service.sysAdmin.login("admin", ctx.app.MD5("123456789")); // console.log(admin);
		assert(result);
		assert(result.account === "admin");
	});
});

describe("findAdmin()", () => {
	it("根据账号获取权限列表", async () => {
		// 创建 ctx
		const ctx = app.mockContext();
		// console.log(ctx.service);
		// 通过 ctx 访问到 service.user
		const result = await ctx.service.sysAdmin.getPermissionByAdmin("admin"); // console.log(admin);
		console.warn(JSON.stringify(result));
		assert(result);
		assert(result.roles[0].modules.length === 2);
	});
});
