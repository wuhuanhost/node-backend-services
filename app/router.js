// app/router.js
module.exports = app => {
	const { router, controller } = app;

	router.get("/", controller.home.index);
	//api
	//登录请求
	router.post("/login", controller.user.login);
	//获取用户数据的请求
	router.get("/getUser", controller.user.getUser);

	router.get("/show", controller.user.show);

	router.get("/getUserByName", controller.user.getUserByName);

	router.get("/getTest", controller.user.getTest);
};
