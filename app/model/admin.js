"use strict";

module.exports = app => {
	const { STRING, INTEGER, DATE } = app.Sequelize;

	const Admin = app.model.define(
		"admin",
		{
			id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			account: {
				type: STRING(20),
				allowNull: false,
				unique: true //添加唯一索引
			},
			password: {
				type: STRING(200),
				allowNull: false
			},
			nickname: STRING(20),
			birthday: STRING(20),
			email: STRING(50),
			phone: STRING(20),
			sex: INTEGER(),
			avatar: STRING(255),
			status: {
				type: INTEGER(1),
				allowNull: false
			},
			token: {
				type: STRING(200),
				allowNull: false
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
	Admin.associate = function() {
		// app.model.Role.hasMany(app.model.RolePermission, { foreignKey: "role_id" });
		app.model.Admin.belongsToMany(app.model.Role, { through: app.model.AdminRole, foreignKey: "admin_id" });
	};
	return Admin;
};
