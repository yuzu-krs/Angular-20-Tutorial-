import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [FormsModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  userList: any;
  todoList: any;
  busUserList: any;

  ngOnInit() {
    //debugger;
    this.getUsers();
    this.getTodoItems();
    this.getAllBusBookingsUsers();
  }

  getUsers() {
    //debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result) => {
      //debugger;
      this.userList = result;
    });
  }

  getTodoItems() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((response) => {
      this.todoList = response; //トップが配列の場合
    });
  }

  getAllBusBookingsUsers() {
    this.http
      .get<any>('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers')
      .subscribe((res) => {
        this.busUserList = res.data; //トップがオブジェクトの場合
      });
  }
}
