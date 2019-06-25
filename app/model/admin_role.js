"use strict";

module.exports = app => {
	const { INTEGER, DATE } = app.Sequelize;

	const AdminRole = app.model.define(
		"admin_role",
		{
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
				allowNull: false
			},
			updated_at: {
				type: DATE,
				allowNull: false
			}
		},
		{
			freezeTableName: true //加上此参数后不会去数据库中找defined定义的【表名+s】的表了
		}
	);

	return AdminRole;
};
