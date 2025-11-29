import { Component, signal } from '@angular/core';

import { Admin } from './admin/admin';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [Admin, User, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
