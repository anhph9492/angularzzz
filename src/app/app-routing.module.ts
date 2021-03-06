import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'encapsulation',
    loadChildren: () => import('./pages/encapsulation/encapsulation.module').then(value => value.EncapsulationModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
