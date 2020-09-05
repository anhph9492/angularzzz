import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth.guard.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-global-cache',
    templateUrl: 'global-cache.component.html'
    , providers: [
        AuthGuardService
    ]
})

export class GlobalCacheComponent implements OnInit {
    auth: Observable<any>;
    constructor(
        private authService: AuthGuardService
    ) {
        let hello = 'slkfsajdf';
        let xx = hello;
        hello = 'fuck';
        xx;
    }

    ngOnInit(): void { }
}
