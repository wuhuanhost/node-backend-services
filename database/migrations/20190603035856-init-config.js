"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { STRING, INTEGER, DATE, JSON } = Sequelize;
		await queryInterface.createTable("config", {
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			key: {
				type: STRING(20),
				unique: true,
				allowNull: false
			},
			value: {
				type: JSON,
				allowNull: false,
				defaultValue: {}
			},
			status: {
				type: STRING(1),
				allowNull: false,
				defaultValue: 1
			},
			remark: {
				type: STRING(200),
				defaultValue: 1
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
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("config");
	}
};
