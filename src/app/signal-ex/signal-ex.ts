import { Component, signal } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  firstName: string = 'Yuzu';
  productName = 'Moto';

  // Signalの定義
  // 型あり、型なし両方の定義が可能
  courseName = signal<string>('Angular');
  courseDuration = signal('15 Videos');

  // computed Signalの定義
  //計算シグナル courseName と courseDuration を結合
  // set や update メソッドは使えない
  courseDetail = computed(() => this.courseName() + ' - ' + this.courseDuration());

  constructor() {
    this.firstName = 'Changed Yuzu';
    console.log(this.firstName);

    console.log(this.courseName()); // Signalの値の取得,()が必要

    setTimeout(() => {
      this.courseName.set('React'); // Signalの値の変更
    }, 5000);

    console.log(this.courseName()); // Signalの値の取得,()が必要
  }
}
