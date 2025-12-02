import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { ControlFlow } from './control-flow/control-flow';
import { DataBinding } from './data-binding/data-binding';
import { SignalEx } from './signal-ex/signal-ex';
import { AttDirective } from './att-directive/att-directive';
import { GetApi } from './get-api/get-api';
import { User } from './user/user';

export const routes: Routes = [
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'control-flow-statements',
    component: ControlFlow,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'signal-ex',
    component: SignalEx,
  },
  {
    path: 'attribute-dir',
    component: AttDirective,
  },
  {
    path: 'get-api',
    component: GetApi,
  },
  {
    path: 'users',
    component: User,
  },
];
