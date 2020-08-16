import { Component, OnInit } from '@angular/core';
import { DynamicScriptAndStyleLoaderService } from '../../services/dynamic-loader.service';

@Component({
    selector: 'app-rxjs-layout',
    templateUrl: 'rxjs-layout.component.html',
    styleUrls:[
        'rxjs-layout.component.scss'
    ]
})
export class RxjsLayoutComponent implements OnInit {
    constructor(private dynamicLoaderService: DynamicScriptAndStyleLoaderService) { }
    ngOnInit(): void {
        this.loadStyles();
        document.getElementsByTagName('body')[0].classList.add('mat-typography');
    }
    private loadStyles(): void {
        this.dynamicLoaderService.loadAllStyles(
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
        )
            .then(data => console.log('>>> RxjsLayoutComponent loadStyles success !!!' + data))
            .catch(error => console.log('>>> RxjsLayoutComponent loadStyles success !!!' + error));
    }
}
