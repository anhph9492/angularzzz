import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentComponent} from './parent.component';
import {Routes, RouterModule } from '@angular/router';
import {ChildComponent} from './child.component';
@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ParentComponent
      }
    ])
  ],
  providers: [],
})
export class EncapsulationModule { }
