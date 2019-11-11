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

	//测试获取权限
	router.get("/getTest1", controller.user.getTest1);

	/**========================================系统管理接口(使用sys作为前缀)============================ */

	// 登录接口
	router.post("/sys/authorizations", controller.admin.login);
	// 创建系统管理员
	router.post("/sys/admin", controller.admin.add);
	// 获取系统所有的管理员(分页)account=null表示查询全部，否者根据用户账号（唯一）来查询（模糊匹配）
	router.get("/sys/admins/:account", controller.admin.queryAdmin);
	//获取用户账号下的所有模块(左侧菜单)
	router.get("/sys/modules/:account", controller.module.list);

	/**========================================系统管理接口===========================================*/

	/**========================================前台接口(使用api作为前缀)============================ */
	// 目前前台接口也使用本项目提供，后续可以分离出来用java spring-boot来重写前台接口
	// todo
	/**========================================前台接口============================================= */
};
