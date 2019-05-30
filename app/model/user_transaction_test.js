"use strict";

module.exports = app => {
	const { STRING, INTEGER, DATE } = app.Sequelize;

	const UserTransactionTest = app.model.define("user-transaction-test", {
		id: { type: INTEGER, primaryKey: true, autoIncrement: true },
		user_name: STRING(30),
		created_at: DATE,
		updated_at: DATE
	});

	return UserTransactionTest;
};
