import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsLayoutComponent } from './layouts/rxjs-layout/rxjs-layout.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'rx',
    component: RxjsLayoutComponent,
    children: [
      {
        path: '01',
        loadChildren: () => import('./layouts/rxjs-layout/rxjs-layout.module').then(m => m.RxjsLayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
