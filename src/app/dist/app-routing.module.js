"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_layout_component_1 = require("./layouts/rxjs-layout/rxjs-layout.component");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var todo_list_layout_component_1 = require("./layouts/todo-list-layout/todo-list-layout.component");
var global_cache_layout_component_1 = require("./layouts/global-cache-layout/global-cache-layout.component");
var routes = [
    {
        path: 'rx',
        component: rxjs_layout_component_1.RxjsLayoutComponent,
        children: [
            {
                path: 'v1',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./layouts/rxjs-layout/rxjs-layout.module'); }).then(function (m) { return m.RxjsLayoutModule; }); }
            }
        ]
    },
    {
        path: 'todo',
        component: todo_list_layout_component_1.TodoListLayoutComponent,
        children: [
            {
                path: 'v1',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./layouts/todo-list-layout/todo-list-layout.module'); }).then(function (m) { return m.TodoListLayoutModule; }); }
            }
        ]
    },
    {
        path: 'global-cache',
        component: global_cache_layout_component_1.GlobalCacheLayoutComponent,
        children: [
            {
                path: 'v1',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./layouts/global-cache-layout/global-cache-layout.module'); }).then(function (m) { return m.GlobalCacheLayoutModule; }); }
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
