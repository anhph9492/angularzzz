import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsLayoutComponent } from './layouts/rxjs-layout/rxjs-layout.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListLayoutComponent } from './layouts/todo-list-layout/todo-list-layout.component';
import { GlobalCacheLayoutComponent } from './layouts/global-cache-layout/global-cache-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuardService } from './services/auth.guard.service';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboards/dashboards.module').then(m => m.DashboardsModule)
      },
      {
        path: 'cache',
        loadChildren: () => import('./pages/global-cache/global-cache.module').then(m => m.GlobalCacheModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
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
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
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
