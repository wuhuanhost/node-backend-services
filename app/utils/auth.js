var casbin = require("casbin");
var path = require("path");
var SequelizeAdapter = require("casbin-sequelize-adapter").SequelizeAdapter;

module.exports = async function myFunction() {
	const a = await SequelizeAdapter.newAdapter("mysql://root:@127.0.0.1:3306/"); // Your connection string.

	// Or you can use an existing DB "abc" like this:
	// The adapter will use the table named "casbin_rule".
	// If it doesn't exist, the adapter will create it automatically.
	// const a = await SequelizeAdapter.newAdapter('mysql://root:123@localhost:3306/abc', true);

	const e = await casbin.newEnforcer(path.join(__dirname, "./auth.conf"), a);

	// Load the policy from DB.
	await e.loadPolicy();

	return e;
};
