import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisiable: boolean = true;

  startMonthName: string = 'feb';

  cityList: string[] = ['Pune', 'Mumbai', 'Banglore', 'Chennai', 'Delhi'];

  studentList: { name: string; age: number; isActive: boolean }[] = [
    { name: 'John', age: 20, isActive: true },
    { name: 'Alice', age: 22, isActive: false },
    { name: 'Bob', age: 19, isActive: true },
    { name: 'Eve', age: 21, isActive: false },
  ];

  showP() {
    this.isParaVisiable = true;
  }

  hideP() {
    this.isParaVisiable = false;
  }
}
