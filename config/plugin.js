//插件配置文件

//jwt插件
exports.jwt = {
	enable: true,
	package: "egg-jwt",
};

exports.sequelize = {
	enable: false,
	package: "egg-sequelize",
};

// config/plugin.js 模板引擎
exports.nunjucks = {
	enable: true,
	package: "egg-view-nunjucks",
};

exports.redis = {
	enable: false,
	package: "egg-redis",
};
