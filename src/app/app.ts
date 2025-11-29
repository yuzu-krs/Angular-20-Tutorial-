import { Component, signal } from '@angular/core';

import { Admin } from './admin/admin';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Admin, User],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
