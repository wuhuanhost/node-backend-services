// config/config.default.js
// jwt secret
exports.jwt = {
    secret: "123456789"
};

exports.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "dreamer-db-default"
};

module.exports = {
    keys: "123456789", //安全框架使用的key
    view: {
        defaultViewEngine: "nunjucks",
        defaultExtension: ".nj"
    },
    // 加载 errorHandler 中间件
    middleware: ["errorHandler"],
    // 只对 /api 前缀的 url 路径生效
    errorHandler: {
        match: "/api/*"
    }
};
