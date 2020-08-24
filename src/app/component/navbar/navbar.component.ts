import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    listTitles;
    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router) {
            
    }

    ngOnInit(): void {
        this.listTitles = ROUTES.filter(title => title);
    }
}
