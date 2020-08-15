import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from '../../pages/rxjs/rsjs.component';


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
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        RxjsComponent
    ],
    providers: [],
})
export class RxjsLayoutModule { }
