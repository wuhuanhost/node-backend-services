# node-backend-services

### 开发模式

`npm run dev`

### 单元测试

`npm run test`

### 测试覆盖报告

`npm run cov`

### 生产环境启动

`npm run start`

### 访问信息

> > > 访问地址:http://127.0.0.1:7001/public/index.html

### 关于日志路径

> [生产环境日志路径](https://blog.csdn.net/csm0912/article/details/80894177)

### 数据库同步

#### 1、创建表

`npx sequelize migration:generate --name=init-[表名]`

#### 2、编写数据库 migration 文件，通过 1 会生成主要的结构

### 3、升级数据库

`npx sequelize db:migrate`

### 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更

`npx sequelize db:migrate:undo`

### 可以通过 `db:migrate:undo:all` 回退到初始状态

`npx sequelize db:migrate:undo:all`
