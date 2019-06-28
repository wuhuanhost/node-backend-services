// config/config.local.js
module.exports = appInfo => {
	const config = {};
	//orm框架配置
	config.sequelize = {
		logging: true //本地测试环境输出日志
	};

	return config;
};
