// {app_root}/app/schedule/cleandb.js
const Subscription = require("egg").Subscription;

class TestTask extends Subscription {
	/**
	 * @property {Object} schedule
	 *  - {String} type - schedule type, `worker` or `all` or your custom types.
	 *  - {String} [cron] - cron expression, see [below](#cron-style-scheduling)
	 *  - {Object} [cronOptions] - cron options, see [cron-parser#options](https://github.com/harrisiirak/cron-parser#options)
	 *  - {String | Number} [interval] - interval expression in millisecond or express explicitly like '1h'. see [below](#interval-style-scheduling)
	 *  - {Boolean} [immediate] - To run a scheduler at startup
	 *  - {Boolean} [disable] - whether to disable a scheduler, usually use in dynamic schedule
	 *  - {Array} [env] - only enable scheduler when match env list
	 */
	static get schedule() {
		return {
			type: "all",
			cron: "0 0 */1 * * *", //每小时执行一次
			// interval: "1s", // 1 分钟间隔
			// interval: "1h",
			// immediate: true
			immediate: false
		};
	}

	async subscribe() {
		console.log("定时任务启动..............................");
		//查询用户信息
		// const user = await this.ctx.service.user.get("小明");
		// console.log(user.name);
	}
}

module.exports = TestTask;
