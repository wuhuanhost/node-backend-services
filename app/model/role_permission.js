"use strict";

module.exports = app => {
	const { INTEGER, DATE } = app.Sequelize;

	const RolePermission = app.model.define(
		"role_permission",
		{
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
		},
		{
			freezeTableName: true //加上此参数后不会去数据库中找defined定义的【表名+s】的表了
		}
	);

	// app.model.Module.belongsToMany(app.model.Role, { through: RolePermission });
	// app.model.Role.belongsToMany(app.model.Module, { through: RolePermission });
	RolePermission.associate = function() {
		// app.model.RolePermission.belongsTo(app.model.Module, { foreignKey: "module_id" });
		// app.model.RolePermission.belongsTo(app.model.Role, { foreignKey: "role_id" });
	};
	return RolePermission;
};
