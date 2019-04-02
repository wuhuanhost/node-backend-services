"use strict";

const Service = require("egg").Service;

class User extends Service {
    async get(name) {
        //测试消息队列
        let obj = await this.ctx.model.User.find({ where: { name: name } });

        let redisVal = await this.app.redis.get("test");
        console.log({ redisVal });

        //orm框架返回的对象是一个复合对象需要取出dataValues
        Object.assign(obj.dataValues, { redisVal });
        console.log(Object.prototype.toString.call(obj));
        return obj;
    }

    async findByName(name) {
        const user = await this.ctx.model.User.findAll({ where: { name: name } });

        console.log("=============事务管理测试===================");
        let transaction;

        try {
            transaction = await this.ctx.model.transaction();
            await this.ctx.model.User.create(
                {
                    name: "小明",
                    age: 18,
                    created_at: new Date(),
                    update_at: new Date()
                },
                { transaction }
            );

            //模拟报错
            //dadasdas;

            await this.ctx.model.UserTransactionTest.create(
                {
                    user_name: "小明",
                    created_at: new Date(),
                    update_at: new Date()
                },
                { transaction }
            );

            //提交事务
            await transaction.commit();

            // return true;
        } catch (error) {
            console.log("=========================================================");
            console.error(error);

            //回滚事务
            await transaction.rollback();
            // return false;
        }

        return user;
    }
}

module.exports = User;
