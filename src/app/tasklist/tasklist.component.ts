import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Task{
    name: string,
    status: boolean
}
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

   tasks: Task[] = [
    { name: 'HTML5', status: true },
    { name: 'CSS3', status: true },
    { name: 'SCSS', status: false },
    { name: 'JavaScript', status: false },
    { name: 'jQuery', status: false },
    { name: 'Angular', status: false }];
  newName: string = '';
  userIndex: number;
  isEdit: boolean = false;
  @Output() fromchild = new EventEmitter<number>(true); //true для уникнення помилки: Expression has changed after it was checked - https://angular.io/errors/NG0100
  @Input() set newTask(name:string) {
    if (name) this.tasks.push({ name: name, status: false });
  }
  constructor() {
  }

  ngOnInit(): void {
    this.fromchild.emit(this.tasks.length);
  }
  delete(i:number): void {
    this.tasks.splice(i, 1);
    this.fromchild.emit(this.tasks.length);
  }
  edit(i: number): void {
    this.userIndex = i;
    this.newName = this.tasks[i].name;
    this.isEdit = true;
  }
  save() {
    if (this.newName) {
      this.tasks[this.userIndex].name = this.newName;
      this.newName = '';
      this.isEdit = false;
    } 
  }
}
