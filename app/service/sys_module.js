"use strict";

var Service = require("egg").Service;

class SysModule extends Service {
	// 添加模块
	async addModule(module) {}
	// 修改模块
	async updateModule(module) {}
	// 根据id查询模块
	async queryModuleById(moduleId) {}
	// 分页查询模块数据
	async queryModulesByPage(startNo, pageSize) {}
	// 查询所有模块
	async queryModules() {}
	// 删除模块
	async deleteModule(moduleId) {}
}
module.exports = SysModule;
