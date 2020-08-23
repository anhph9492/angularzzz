"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RxjsLayoutComponent = void 0;
var core_1 = require("@angular/core");
var RxjsLayoutComponent = /** @class */ (function () {
    function RxjsLayoutComponent(dynamicLoaderService) {
        this.dynamicLoaderService = dynamicLoaderService;
    }
    RxjsLayoutComponent.prototype.ngOnInit = function () {
        this.loadStyles();
        document.getElementsByTagName('body')[0].classList.add('mat-typography');
    };
    RxjsLayoutComponent.prototype.loadStyles = function () {
        this.dynamicLoaderService.loadAllStyles('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap', 'https://fonts.googleapis.com/icon?family=Material+Icons')
            .then(function (data) { return console.log('>>> RxjsLayoutComponent loadStyles success !!!' + data); })["catch"](function (error) { return console.log('>>> RxjsLayoutComponent loadStyles success !!!' + error); });
    };
    RxjsLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-rxjs-layout',
            templateUrl: 'rxjs-layout.component.html',
            styleUrls: [
                'rxjs-layout.component.scss'
            ]
        })
    ], RxjsLayoutComponent);
    return RxjsLayoutComponent;
}());
exports.RxjsLayoutComponent = RxjsLayoutComponent;
