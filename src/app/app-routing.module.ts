import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsLayoutComponent } from './layouts/rxjs-layout/rxjs-layout.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListLayoutComponent } from './layouts/todo-list-layout/todo-list-layout.component';
import { GlobalCacheLayoutComponent } from './layouts/global-cache-layout/global-cache-layout.component';
const routes: Routes = [
  {
    path: 'rx',
    component: RxjsLayoutComponent,
    children: [
      {
        path: 'v1',
        loadChildren: () => import('./layouts/rxjs-layout/rxjs-layout.module').then(m => m.RxjsLayoutModule)
      }
    ]
  },
  {
    path: 'todo',
    component: TodoListLayoutComponent,
    children: [
      {
        path: 'v1',
        loadChildren: () => import('./layouts/todo-list-layout/todo-list-layout.module').then(m => m.TodoListLayoutModule)
      }
    ]
  },
  {
    path: 'global-cache',
    component: GlobalCacheLayoutComponent,
    children: [
      {
        path: 'v1',
        loadChildren: () => import('./layouts/global-cache-layout/global-cache-layout.module').then(m => m.GlobalCacheLayoutModule)
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
