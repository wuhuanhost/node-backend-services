"use strict";

module.exports = app => {
	const { STRING, INTEGER, DATE } = app.Sequelize;

	const Module = app.model.define(
		"module",
		{
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
				allowNull: false
			},
			status: {
				type: INTEGER(1),
				allowNull: false
			},
			parent_id: INTEGER(11),
			order: INTEGER(11),
			level: INTEGER(1),
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

	// Module.belongsToMany(app.model.Role, { through: app.model.RolePermission });
	Module.prototype.associate = function() {
		app.model.Module.belongsToMany(app.model.Role, { through: app.model.RolePermission });
	};

	return Module;
};
