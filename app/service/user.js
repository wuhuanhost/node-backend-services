"use strict";

const Service = require("egg").Service;

class User extends Service {
    async get(name) {
        //测试消息队列
        let obj = await this.ctx.model.User.find({ where: { name: name } });

        let redisVal = await this.app.redis.get("test");

        let result = obj.toJSON();

        //合并mysql和redis的数据
        Object.assign(result, { redisVal });

        //测试redis发布订阅模式
        this.app.redis.publish("news", "hello world!!!");

        this.app.redis.set(
            "testobj",
            JSON.stringify({
                name: 123,
                age: 18
            })
        );
        let abc = await this.app.redis.get("testobj");
        console.log(JSON.parse(abc).name);

        return result;
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
