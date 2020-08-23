"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var rxjs_layout_component_1 = require("./layouts/rxjs-layout/rxjs-layout.component");
var app_routing_module_1 = require("./app-routing.module");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var todo_list_layout_component_1 = require("./layouts/todo-list-layout/todo-list-layout.component");
var global_cache_layout_component_1 = require("./layouts/global-cache-layout/global-cache-layout.component");
var destroyable_component_1 = require("./utils/destroyable.component");
var firebaseConfig = {
    // apiKey: 'AIzaSyBbot7j3dPF5hbfc2o5_qmjXS476oLlph8',
    // authDomain: 'banded-hexagon-275008.firebaseapp.com',
    // databaseURL: 'https://banded-hexagon-275008.firebaseio.com',
    // projectId: 'banded-hexagon-275008',
    // storageBucket: 'banded-hexagon-275008.appspot.com',
    // messagingSenderId: '1044881337458',
    // appId: '1:1044881337458:web:3cc3f6d2101bce1a6fa6eb',
    // measurementId: 'G-P6HRZWHB9V'
    apiKey: 'AIzaSyCZ6Bhz-uPjI-WAdai4YJfBQLpWfwAI4B0',
    authDomain: 'qlmamnon.firebaseapp.com',
    databaseURL: 'https://qlmamnon.firebaseio.com',
    projectId: 'qlmamnon',
    storageBucket: 'qlmamnon.appspot.com',
    messagingSenderId: '135416329510',
    appId: '1:135416329510:web:8342a0a38f7d70ade7bde7',
    measurementId: 'G-E09R69TJC1'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                rxjs_layout_component_1.RxjsLayoutComponent,
                todo_list_layout_component_1.TodoListLayoutComponent,
                global_cache_layout_component_1.GlobalCacheLayoutComponent,
                destroyable_component_1.DestroyableComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
