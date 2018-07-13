import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  modelVal = '';
  arrayVal = ['1', '2'];

  constructor() { }

  ngOnInit() {
  }


  addValue() {
    this.arrayVal.push(this.modelVal);
  }

}
