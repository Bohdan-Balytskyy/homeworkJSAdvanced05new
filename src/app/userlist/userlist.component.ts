import { Component, OnInit } from '@angular/core';

interface User{
    login: string,
    password: string,
    email:string
}
class User implements User{
    constructor(public login:string, public password:string, public email:string){}
}
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users: User[] = [];
  login: string = '';
  password: string = '';
  email: string = '';
  userIndex: number;
  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  clearFields(): void{
    this.login = '';
    this.password = '';
    this.email = '';
  }
  addUser(): void {
    if (this.login && this.password  && this.email) {
      let newUser: User = new User(this.login, this.password, this.email);
      this.users.push(newUser);
      this.clearFields();
    } 
  }
  deleteUser(i:number): void {
    this.users.splice(i, 1);
  }
  editUser(i: number): void {
    this.userIndex = i;
    this.login = this.users[i].login;
    this.password = this.users[i].password;
    this.email = this.users[i].email;
    this.isEdit = true;
  }
  saveEditUser() {
    if (this.login && this.password  && this.email) {
      let userChange: User = new User(this.login, this.password, this.email)
      this.users[this.userIndex] = userChange;
      this.clearFields();
      this.isEdit = false;
    } 
  }
}
