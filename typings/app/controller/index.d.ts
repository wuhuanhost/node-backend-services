// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin = require('../../../app/controller/admin');
import ExportHome = require('../../../app/controller/home');
import ExportModule = require('../../../app/controller/module');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    home: ExportHome;
    module: ExportModule;
    user: ExportUser;
  }
}
