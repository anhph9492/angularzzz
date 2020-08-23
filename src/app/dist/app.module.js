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
