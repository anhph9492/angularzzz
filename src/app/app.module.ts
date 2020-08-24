import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RxjsLayoutComponent } from './layouts/rxjs-layout/rxjs-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListLayoutComponent } from './layouts/todo-list-layout/todo-list-layout.component';
import { GlobalCacheLayoutComponent } from './layouts/global-cache-layout/global-cache-layout.component';
import { DestroyableComponent} from './utils/destroyable.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './component/components.module';
@NgModule({
  declarations: [
    AppComponent,
    RxjsLayoutComponent,
    TodoListLayoutComponent,
    GlobalCacheLayoutComponent,
    DestroyableComponent,
    AdminLayoutComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
