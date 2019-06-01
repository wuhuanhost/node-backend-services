"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("role", {
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			name: STRING(20),
			state: INTEGER(2),
			remark: STRING(200),
			order: INTEGER(11),
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
		await queryInterface.dropTable("role");
	}
};
