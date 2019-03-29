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
    }
};
