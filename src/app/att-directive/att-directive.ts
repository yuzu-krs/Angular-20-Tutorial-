import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
//直接のパスで呼び出すのは禁止。APIからインポートすること
import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-att-directive',
  imports: [
    NgClass,
    NgStyle,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    DatePipe,
  ],
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
export class AttDirective
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewChecked,
    OnDestroy
{
  div1ClassName = signal<string>('');

  firstName: string = 'Yuzu!';
  courseName: string = 'Angular 20 tutorial';

  rollNoList: number[] = [1, 2, 3, 4, 5];

  studentObj: { [key: string]: any } = {
    name: 'Yuzu',
    city: 'Tokyo',
    state: 'Japan',
  };

  currentDate: Date = new Date();

  isDiv2Green: boolean = false;

  //最初に呼ばれる
  constructor() {
    console.log('constructor AttDirective');
  }

  //コンストラクタの次に呼ばれる
  ngOnInit(): void {
    console.log('ngOnInit AttDirective');
    //APIコールをトリガーするため
  }

  //コンテンツの初期化が完了した後に呼ばれる
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked AttDirective');
  }

  //ビューの初期化が完了した後に呼ばれる
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit AttDirective');
    //子コンポーネントの初期化が完了した後に呼ばれる
  }

  //ビューの変更検出が完了した後に呼ばれる
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked AttDirective');
  }

  //コンポーネントが破棄される直前に呼ばれる(他のコンポーネントに切り替わるなど)
  ngOnDestroy(): void {
    console.log('ngOnDestroy AttDirective');

    //サブスクリプションの解除などを行う
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }
}
