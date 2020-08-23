import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GlobalCacheComponent } from '../../pages/global-cache/global-cache.component';

const routes: Routes = [
    {
        path: '',
        component: GlobalCacheComponent
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
    declarations: [GlobalCacheComponent],
    providers: [],
})
export class GlobalCacheLayoutModule { }
