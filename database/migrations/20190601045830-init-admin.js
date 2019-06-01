"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("admin", {
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			account: {
				type: STRING(20),
				defaultValue: "",
				allowNull: false,
				unique: true, //添加唯一索引
				comment: "系统账号"
			},
			password: {
				type: STRING(200),
				defaultValue: "",
				allowNull: false,
				comment: "系统密码"
			},
			nickname: STRING(20),
			birthday: STRING(20),
			email: STRING(50),
			phone: STRING(20),
			sex: INTEGER(),
			avatar: STRING(255),
			token: {
				type: STRING(200),
				allowNull: false
			},
			created_at: {
				type: DATE,
				defaultValue: new Date(),
				allowNull: false
			},
			updated_at: {
				type: DATE,
				defaultValue: new Date(),
				allowNull: false
			}
		});

		// 添加索引
		// await queryInterface.addIndex("admin", ["account"], {
		// 	indexName: "admin-account-unique",
		// 	indicesType: "UNIQUE"
		// });
	},

	down: async (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		await queryInterface.dropTable("admin");
	}
};
