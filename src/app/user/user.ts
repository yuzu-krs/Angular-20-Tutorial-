import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User implements OnInit {
  userList: any[] = [];
  private http = inject(HttpClient);

  userObj: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: '',
  };

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }

  onSaveUser() {
    debugger;
    this.http
      .post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj)
      .subscribe({
        next: (result) => {
          debugger;
          alert('User Created Successfully');
        },
        error: (error) => {
          debugger;
          alert('Error while creating user');
        },
      });
  }
}
