"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"admin",
			[
				{
					id: 1,
					account: "will",
					password: "123456",
					nickname: "超级管理员",
					birthday: "1990-11-10",
					email: "abc@163.com",
					phone: "15802925306",
					sex: 1,
					avatar: "",
					status: 1,
					token: "dfasjdalslsjdklasjklaj",
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 2,
					account: "admin",
					password: "123456",
					nickname: "普通管理员",
					birthday: "1990-11-10",
					email: "abc@163.com",
					phone: "15802925306",
					sex: 1,
					avatar: "",
					status: 1,
					token: "dfasjdalslsjdklasjklaj",
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
