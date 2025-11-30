import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { ControlFlow } from './control-flow/control-flow';
import { DataBinding } from './data-binding/data-binding';
import { SignalEx } from './signal-ex/signal-ex';

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
];
