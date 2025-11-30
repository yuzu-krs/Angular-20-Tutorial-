import { Component, signal } from '@angular/core';

import { Admin } from './admin/admin';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { SignalEx } from './signal-ex/signal-ex';
import { ControlFlow } from './control-flow/control-flow';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ControlFlow, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
