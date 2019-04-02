// config/config.default.js

module.exports = appInfo => {
    const config = {};
    // jwt secret
    config.jwt = {
        secret: "123456789"
    };
    //orm框架配置
    config.sequelize = {
        dialect: "mysql",
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "",
        database: "dreamer-db-default"
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
            password: "auth",
            db: 0
        }
    };
    return config;
};
