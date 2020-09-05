import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap';

import { SidebarComponent } from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CollapseModule.forRoot(),
        PerfectScrollbarModule,
        BsDropdownModule.forRoot()
    ],
    exports: [
        SidebarComponent,
        NavbarComponent
    ],
    declarations: [
        SidebarComponent,
        NavbarComponent
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
})
export class ComponentsModule { }
