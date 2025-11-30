import { Component, signal } from '@angular/core';
//直接のパスで呼び出すのは禁止。APIからインポートすること
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
  //standaloneとはそのコンポーネント単体で動作することを意味する
  // imports に他のモジュールを指定することで、そのコンポーネント内で利用できるようになる
  // @NgModuleのdeclarationsに登録する必要がない
  // @NgModule({
  //  declarations: [MyComponent],   // この中に入れないと動かない
  //  imports: [CommonModule],       // このモジュールが使える機能
  //  bootstrap: [AppComponent]      // 最初に動くコンポーネント
})
export class AttDirective {
  div1ClassName = signal<string>('');

  isDiv2Green: boolean = false;

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }
}
