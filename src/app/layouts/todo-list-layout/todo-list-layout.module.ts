import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from '../../pages/todo-list/todo-list.component';
const routes: Routes = [
    {
        path: '',
        component: TodoListComponent
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
    declarations: [TodoListComponent],
    providers: [],
})
export class TodoListLayoutModule { }
