"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlobalCacheLayoutModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var global_cache_component_1 = require("../../pages/global-cache/global-cache.component");
var routes = [
    {
        path: '',
        component: global_cache_component_1.GlobalCacheComponent
    }
];
var GlobalCacheLayoutModule = /** @class */ (function () {
    function GlobalCacheLayoutModule() {
    }
    GlobalCacheLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [],
            declarations: [global_cache_component_1.GlobalCacheComponent],
            providers: []
        })
    ], GlobalCacheLayoutModule);
    return GlobalCacheLayoutModule;
}());
exports.GlobalCacheLayoutModule = GlobalCacheLayoutModule;
