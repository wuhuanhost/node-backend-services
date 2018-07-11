// {app_root}/app/schedule/cleandb.js
const Subscription = require('egg').Subscription;

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
      type: 'all',
      cron: '10 0 3 * * *',
      //interval: '1s', // 1 分钟间隔
	  // interval: '1h',
      // immediate: true,
    };
  }

  async subscribe() {
    console.log("定时任务启动..............................")
  }
}

module.exports = TestTask;