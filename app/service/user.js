"use strict";

const Service = require("egg").Service;

class User extends Service {
    async get(name) {
        return await this.ctx.model.User.find({ where: { name: name } });
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
