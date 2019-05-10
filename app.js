// app.js
module.exports = app => {
	app.beforeStart(async () => {
		// 应用会等待这个函数执行完成才启动
		//app.cities = await app.curl('https://www.sojson.com/open/api/weather/json.shtml?city=西安', {
		//   method: 'GET',
		//   dataType: 'json',
		// });

		app.cities = {
			dasd: "hello world!!!"
		};

		//执行定时任务
		// app.runSchedule("other");

		// 也可以通过以下方式来调用 Service
		// const ctx = app.createAnonymousContext();
		// app.cities = await ctx.service.cities.load();
	});
};
