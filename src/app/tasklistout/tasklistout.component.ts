import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklistout',
  templateUrl: './tasklistout.component.html',
  styleUrls: ['./tasklistout.component.scss']
})
export class TasklistoutComponent implements OnInit {

  text: string;
  count: number;
  newTask: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  add() {
    if (this.text) {
      this.newTask = this.text;
      this.text = '';
      this.count++;
    }
  }
  changeCount(n:number) {
    this.count = n;
  }
}
