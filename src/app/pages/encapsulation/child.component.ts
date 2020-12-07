import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h1>{{title}}</h1>'
})

export class ChildComponent implements OnInit {
  title = 'child component';
  constructor() {
  }

  ngOnInit() {
  }
}
