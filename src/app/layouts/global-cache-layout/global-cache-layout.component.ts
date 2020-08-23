import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-global-cache-layout',
    templateUrl: 'global-cache-layout.component.html'
})

export class GlobalCacheLayoutComponent implements OnInit {
    constructor() {
        let hello = 'slkfsajdf';
        let xx  = hello;
        hello = 'fuck';
        xx;
     }

    ngOnInit(): void { }
}
