// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin = require('../../../app/model/admin');
import ExportAdminRole = require('../../../app/model/admin_role');
import ExportModule = require('../../../app/model/module');
import ExportRole = require('../../../app/model/role');
import ExportRolePermission = require('../../../app/model/role_permission');
import ExportUser = require('../../../app/model/user');
import ExportUserTransactionTest = require('../../../app/model/user_transaction_test');

declare module 'sequelize' {
  interface Sequelize {
    Admin: ReturnType<typeof ExportAdmin>;
    AdminRole: ReturnType<typeof ExportAdminRole>;
    Module: ReturnType<typeof ExportModule>;
    Role: ReturnType<typeof ExportRole>;
    RolePermission: ReturnType<typeof ExportRolePermission>;
    User: ReturnType<typeof ExportUser>;
    UserTransactionTest: ReturnType<typeof ExportUserTransactionTest>;
  }
}
