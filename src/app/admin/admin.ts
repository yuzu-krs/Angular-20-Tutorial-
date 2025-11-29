import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  firstName: string = 'Yuzu';

  courseName: string = 'Angular 20 Tutorial';

  rollNo: number = 111;
}
