// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportSysAdmin = require('../../../app/service/sys_admin');
import ExportSysModule = require('../../../app/service/sys_module');
import ExportSysPermission = require('../../../app/service/sys_permission');
import ExportSysRole = require('../../../app/service/sys_role');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    sysAdmin: AutoInstanceType<typeof ExportSysAdmin>;
    sysModule: AutoInstanceType<typeof ExportSysModule>;
    sysPermission: AutoInstanceType<typeof ExportSysPermission>;
    sysRole: AutoInstanceType<typeof ExportSysRole>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
