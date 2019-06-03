"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("module", {
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			name: {
				type: STRING(20),
				unique: true,
				allowNull: false
			},
			url: {
				type: STRING(255),
				allowNull: false,
				defaultValue: ""
			},
			remark: STRING(200),
			type: {
				type: STRING(20),
				allowNull: false,
				defaultValue: "menu"
			},
			status: {
				type: INTEGER(1),
				allowNull: false,
				defaultValue: 1
			},
			parent_id: INTEGER(11),
			order: INTEGER(11),
			level: INTEGER(1),
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
		await queryInterface.dropTable("module");
	}
};
