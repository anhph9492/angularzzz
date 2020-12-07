import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<h1>app parent</h1><app-child></app-child>',
  styles: ['h1 { background-color: red; color: white;}']
})

export class ParentComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
