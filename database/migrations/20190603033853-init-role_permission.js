"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE } = Sequelize;
		await queryInterface.createTable("role_permission", {
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			role_id: {
				type: INTEGER(11),
				references: {
					//外键
					model: "role",
					key: "id"
				},
				onUpdate: "cascade",
				onDelete: "cascade"
			},
			module_id: {
				type: INTEGER(11),
				references: {
					//外键
					model: "module",
					key: "id"
				},
				onUpdate: "cascade",
				onDelete: "cascade"
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
		await queryInterface.dropTable("role_permission");
	}
};
