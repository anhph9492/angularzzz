import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styles:['h1{background-color:red;}']
})

export class NavbarComponent implements OnInit {
    listTitles;
    constructor() {}

    ngOnInit(): any {}
}
