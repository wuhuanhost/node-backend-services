// config/config.default.js
const path = require("path");
module.exports = appInfo => {
	const config = {};
	// jwt secret
	config.jwt = {
		secret: "123456789"
	};
	//orm框架配置
	config.sequelize = {
		dialect: "mysql",
		host: "192.168.1.123",
		// host: "192.168.99.100", //docker
		port: 3306,
		username: "root",
		password: "root",
		database: "dreamer-db-default",
		pool: {
			//连接池配置
			max: 5, //最大连接数
			min: 0, //最小连接数
			acquire: 30000, //请求超时时间
			idle: 10000 //断开连接后，连接实例在连接池保持的时间
		}
	};
	config.keys = "123456789"; //安全框架使用的key
	//模板引擎设置
	config.view = {
		defaultViewEngine: "nunjucks",
		defaultExtension: ".nj"
	};
	// 加载 errorHandler 中间件
	config.middleware = ["errorHandler"];
	// 只对 /api 前缀的 url 路径生效
	config.errorHandler = {
		match: "/api/*"
	};

	//redis配置
	config.redis = {
		client: {
			port: 6379, // Redis port
			host: "127.0.0.1", // Redis host
			// host: "192.168.99.100", //docker
			password: "auth",
			db: 0
		}
	};
	// aes配置中的key和iv
	config.aesConfig = {
		iv: "25f9e794323b453885f5181f1b624d0b",
		key: "25f9e794323b453885f5181f1b624d0b"
	};

	// 生产日志的默认位置/root/logs下
	config.logger = { dir: path.join(appInfo.root, "logs", appInfo.name) };
	return config;
};
