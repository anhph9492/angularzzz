import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from '../../pages/rxjs/rsjs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TraditionalComponent} from '../../pages/rxjs/traditional/traditional.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from '../../pages/rxjs/reactive/reactive.component';
export const routes: Routes = [
    {
        path: '',
        component: RxjsComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [
        RxjsComponent,
        TraditionalComponent,
        ReactiveComponent
    ],
    providers: [],
})
export class RxjsLayoutModule {
    constructor() { }
}

