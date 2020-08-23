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
var platform_browser_1 = require("@angular/platform-browser");
var local_storage_1 = require("@ngx-pwa/local-storage");
var http_1 = require("@angular/common/http");
var database_1 = require("@angular/fire/database");
var fire_1 = require("@angular/fire");
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
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(routes),
                http_1.HttpClientModule,
                fire_1.AngularFireModule.initializeApp(firebaseConfig),
                database_1.AngularFireDatabaseModule,
                local_storage_1.StorageModule.forRoot({
                    IDBNoWrap: true
                }),
            ],
            exports: [],
            declarations: [global_cache_component_1.GlobalCacheComponent],
            providers: []
        })
    ], GlobalCacheLayoutModule);
    return GlobalCacheLayoutModule;
}());
exports.GlobalCacheLayoutModule = GlobalCacheLayoutModule;
