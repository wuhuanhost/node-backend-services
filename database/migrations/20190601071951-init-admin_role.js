"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE } = Sequelize;
		await queryInterface.createTable("admin_role", {
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			admin_id: {
				type: INTEGER(11),
				references: {
					//外键
					model: "admin",
					key: "id"
				},
				onUpdate: "cascade",
				onDelete: "cascade"
			},
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
		await queryInterface.dropTable("admin_role");
	}
};
