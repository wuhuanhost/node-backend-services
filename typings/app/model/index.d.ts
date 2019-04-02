// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser = require('../../../app/model/user');
import ExportUserTransactionTest = require('../../../app/model/user_transaction_test');

declare module 'sequelize' {
  interface Sequelize {
    User: ReturnType<typeof ExportUser>;
    UserTransactionTest: ReturnType<typeof ExportUserTransactionTest>;
  }
}
