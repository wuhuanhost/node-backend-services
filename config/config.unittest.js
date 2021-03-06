exports.sequelize = {
	dialect: "mysql",
	host: "127.0.0.1",
	port: 3306,
	username: "root",
	password: "root",
	database: "dreamer-db-unittest",
	pool: {
		//连接池配置
		max: 5, //最大连接数
		min: 0, //最小连接数
		acquire: 30000, //请求超时时间
		idle: 10000 //断开连接后，连接实例在连接池保持的时间
	},
	logging: true //输出日志
};
