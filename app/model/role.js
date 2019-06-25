"use strict";

module.exports = app => {
	const { STRING, INTEGER, DATE } = app.Sequelize;

	const Role = app.model.define(
		"role",
		{
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			name: STRING(20),
			status: INTEGER(2),
			remark: STRING(200),
			order: INTEGER(11),
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
	// Role.belongsToMany(app.model.Module, { through: app.model.RolePermission });
	Role.prototype.associate = function() {
		app.model.Role.belongsToMany(app.model.Module, { through: app.model.RolePermission });
	};
	return Role;
};
