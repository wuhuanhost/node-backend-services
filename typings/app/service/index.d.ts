// This file is created by egg-ts-helper@1.25.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSysAdmin = require('../../../app/service/sys_admin');
import ExportSysModule = require('../../../app/service/sys_module');
import ExportSysPermission = require('../../../app/service/sys_permission');
import ExportSysRole = require('../../../app/service/sys_role');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    sysAdmin: ExportSysAdmin;
    sysModule: ExportSysModule;
    sysPermission: ExportSysPermission;
    sysRole: ExportSysRole;
    user: ExportUser;
  }
}
