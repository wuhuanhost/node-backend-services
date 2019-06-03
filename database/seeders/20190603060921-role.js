"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"role",
			[
				{
					id: 1,
					name: "超级管理员",
					status: 1,
					remark: "拥有所有权限的系管理员",
					order: 1,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 2,
					name: "管理员",
					status: 1,
					remark: "普通管理员，拥有除系统管理模块之外的所有模块的管理权限",
					order: 2,
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
