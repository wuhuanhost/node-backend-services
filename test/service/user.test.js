const assert = require("assert");
const { app } = require("egg-mock/bootstrap");

describe("get()", () => {
    it("should get exists user", async () => {
        // 创建 ctx
        const ctx = app.mockContext();
        // 通过 ctx 访问到 service.user
        const user = await ctx.service.user.get("小明");
        assert(user);
        assert(user.name === "小明");
    });

    it("should get null when user not exists", async () => {
        const ctx = app.mockContext();
        const user = await ctx.service.user.get("fengmk1");
        assert(!user);
    });
});

describe("user transaction test()", () => {
    it("transaction rollback", async () => {
        const ctx = app.mockContext();
        console.log("=============事务管理测试===================");
        let transaction;
        let flag = false; //成功的标志
        try {
            transaction = await ctx.model.transaction();
            await ctx.model.User.create(
                {
                    name: "小明",
                    age: 18,
                    created_at: new Date(),
                    update_at: new Date()
                },
                { transaction }
            );
            //模拟报错
            // dadasdas;
            await ctx.model.UserTransactionTest.create(
                {
                    user_name: "小明",
                    created_at: new Date(),
                    update_at: new Date()
                },
                { transaction }
            );
            //提交事务
            await transaction.commit();
            flag = true;
            // return true;
        } catch (error) {
            console.log("=========================================================");
            console.error(error);
            //回滚事务
            await transaction.rollback();
            flag = false;
            // return false;
        }
        assert(flag);
    });
});
