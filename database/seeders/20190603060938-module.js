"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"module",
			[
				{
					id: 1,
					name: "系统管理",
					url: "", //顶级菜单的url为空，点击的时候会展开二级菜单
					remark: "系统管理模块",
					type: "menu",
					status: 1,
					parent_id: 0,
					order: 1,
					level: 1,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 2,
					name: "用户管理",
					url: "/sys/admin",
					remark: "系统管理模块-用户管理",
					type: "menu",
					status: 1,
					parent_id: 1,
					order: 2,
					level: 2,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 3,
					name: "角色管理",
					url: "/sys/role",
					remark: "系统管理模块-角色管理",
					type: "menu",
					status: 1,
					parent_id: 1,
					order: 3,
					level: 2,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 4,
					name: "模块管理",
					url: "/sys/module",
					remark: "系统管理模块-模块管理",
					type: "menu",
					status: 1,
					parent_id: 1,
					order: 4,
					level: 2,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 5,
					name: "权限管理",
					url: "/sys/permission",
					remark: "系统管理模块-权限管理",
					type: "menu",
					status: 1,
					parent_id: 1,
					order: 5,
					level: 2,
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
