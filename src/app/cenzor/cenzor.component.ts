import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  bad: string = '';
  arrBad: string[];
  arrCheck: string[];
  newWord: string = '';
  expression: string = '';
  placeholderWord: string = 'word here...';
  placeholderText: string = 'text here...';
  colorBDword: string = 'lightgrey';
  colorBDtext: string = 'lightgrey';

  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.newWord === '') {
        this.placeholderWord = 'Please write a word!';
        this.colorBDword = 'red';
    } else {
      this.placeholderWord = 'word here...';
      this.colorBDword = 'lightgrey';
      this.bad === '' ? this.bad = this.newWord : this.bad += ' ' + this.newWord;
      this.newWord = '';
    };
  }
  cenzor() {
    if (this.expression === '') {
      this.placeholderText = 'Please write a text!';
      this.colorBDtext = 'red';
    } else {
      this.placeholderText = 'text here...';
      this.colorBDtext = 'lightgrey';
        this.arrBad = this.bad.split(' ');
        this.arrCheck = this.expression.split(' ');
            for (let i: number = 0; i < this.arrCheck.length; i++) {
              for (let j: number = 0; j < this.arrBad.length; j++) {
                if (this.arrCheck[i] === this.arrBad[j]) {
                    let count: number = this.arrCheck[i].length;
                    this.arrCheck[i] = '';
                    for (let k: number = 0; k < count; k++) this.arrCheck[i] += "*";
                }
              }
            }
            this.expression = this.arrCheck.join(' ');
            this.colorBDtext = 'lightgreen';
    }
  }
  reset() {
    this.bad = '';
    this.expression = '';
    this.newWord = '';
  }
}
