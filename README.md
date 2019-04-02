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

#### 3、升级数据库

`npx sequelize db:migrate`

> 升级测试数据库

`NODE_ENV=test npx sequelize db:migrate`

#### 4、如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更

`npx sequelize db:migrate:undo`

#### 5、可以通过 `db:migrate:undo:all` 回退到初始状态

`npx sequelize db:migrate:undo:all`

### 表数据初始化

> 如果一些表中有一些初始化的数据，可以使用 seeders 来实现

#### 1、创建 seeders 文件

`npx sequelize seed:generate --name [表名]`

#### 2、同步数据到数据库

`npx sequelize db:seed:all`
