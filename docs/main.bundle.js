webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.container {\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\",\"Noto Sans Japanese\",\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   ProN W3\", Meiryo, sans-serif;\n  padding: 30px; }\n  .container .gt {\n    margin-bottom: 30px; }\n    .container .gt .gt-neck {\n      display: table;\n      border-collapse: collapse; }\n      .container .gt .gt-neck .gt-string {\n        display: table-row;\n        border-collapse: collapse; }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:not(:first-child) {\n          border: 1px solid; }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:first-child {\n          border-right: 10px solid; }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(4),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(6),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(8),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(10),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(16),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(18),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(20) {\n          background-color: antiquewhite; }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(13) {\n          background-color: aquamarine; }\n        .container .gt .gt-neck .gt-string .step {\n          border-collapse: collapse;\n          box-sizing: border-box;\n          display: table-cell;\n          height: 30px;\n          position: relative;\n          min-width: 60px;\n          width: 60px; }\n          .container .gt .gt-neck .gt-string .step .label.active {\n            background-color: black;\n            border-radius: 50%;\n            color: white;\n            font-size: 12px;\n            height: 20px;\n            line-height: 20px;\n            left: 30px;\n            position: absolute;\n            text-align: center;\n            top: -10px;\n            width: 20px; }\n  .container .tone-list {\n    margin-bottom: 30px; }\n    .container .tone-list .tone-list-item {\n      background-color: antiquewhite;\n      border-radius: 50%;\n      display: inline-block;\n      height: 50px;\n      line-height: 50px;\n      text-align: center;\n      width: 50px; }\n      .container .tone-list .tone-list-item.selected {\n        background-color: aquamarine; }\n      .container .tone-list .tone-list-item:not(:first-child) {\n        margin-left: 10px; }\n  .container .scale-list .scale-list-item {\n    background-color: antiquewhite;\n    padding: 10px;\n    width: 300px; }\n    .container .scale-list .scale-list-item.selected {\n      background-color: aquamarine; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><div class=\"gt\"><div class=\"gt-neck\"><div class=\"gt-string gt-string-list-item--{{ i + 1}}\" *ngFor=\"let gtString of gtStringSeq; let i = index\"><div class=\"step\" *ngFor=\"let step of gtString\"><div class=\"label\" [class.active]=\"getLabel(step)\">{{ getLabel(step) }}</div></div></div></div></div><div class=\"tone-list\"><div class=\"tone-list-item\" *ngFor=\"let tone of toneSeq\" (click)=\"selectTone(tone)\" [class.selected]=\"tone == selectedTone\"><div class=\"label\">{{ tone.name }}</div></div></div><div class=\"scale-list\"><div class=\"scale-list-item\" *ngFor=\"let scale of scaleSeq\" (click)=\"selectScale(scale)\" [class.selected]=\"scale == selectedScale\"><div class=\"label\">{{ scale.name }}</div></div></div></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tone__ = __webpack_require__("../../../../../src/app/tone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scale__ = __webpack_require__("../../../../../src/app/scale.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.toneSeq = __WEBPACK_IMPORTED_MODULE_1__tone__["a" /* Tone */].all;
        this.scaleSeq = __WEBPACK_IMPORTED_MODULE_2__scale__["a" /* Scale */].all;
        this.selectedTone = null;
        this.selectedScale = null;
        this.fretCount = 21;
        this.gtStringSeq = [
            /** 1st */ Array.apply(null, new Array(this.fretCount)).map(function (_, i) { return (i + 7) % 12; }),
            /** 2st */ Array.apply(null, new Array(this.fretCount)).map(function (_, i) { return (i + 2) % 12; }),
            /** 3st */ Array.apply(null, new Array(this.fretCount)).map(function (_, i) { return (i + 10) % 12; }),
            /** 4st */ Array.apply(null, new Array(this.fretCount)).map(function (_, i) { return (i + 5) % 12; }),
            /** 5st */ Array.apply(null, new Array(this.fretCount)).map(function (_, i) { return i % 12; }),
            /** 6st */ Array.apply(null, new Array(this.fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.selectedTone = this.toneSeq[0];
        this.selectedScale = this.scaleSeq[0];
    };
    AppComponent.prototype.getLabel = function (step) {
        var v = (12 + step - this.selectedTone.step) % 12;
        if (this.selectedScale.stepSeq.includes(v)) {
            return __WEBPACK_IMPORTED_MODULE_1__tone__["a" /* Tone */].map[step];
        }
        else {
            return null;
        }
    };
    AppComponent.prototype.selectTone = function (tone) {
        this.selectedTone = tone;
    };
    AppComponent.prototype.selectScale = function (scale) {
        this.selectedScale = scale;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/scale.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scale; });
var Scale;
(function (Scale) {
    Scale.all = [
        { name: 'Major',
            stepSeq: [0, 2, 4, 5, 7, 9, 11]
        },
        { name: 'Minor',
            stepSeq: [0, 2, 3, 5, 7, 8, 10]
        }
    ];
})(Scale || (Scale = {}));


/***/ }),

/***/ "../../../../../src/app/tone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tone; });
var Tone;
(function (Tone) {
    Tone.all = [
        { name: 'A', step: 0 },
        { name: 'A#', step: 1 },
        { name: 'B', step: 2 },
        { name: 'C', step: 3 },
        { name: 'C#', step: 4 },
        { name: 'D', step: 5 },
        { name: 'D#', step: 6 },
        { name: 'E', step: 7 },
        { name: 'F', step: 8 },
        { name: 'F#', step: 9 },
        { name: 'G', step: 10 },
        { name: 'G#', step: 11 },
    ];
    Tone.map = {
        0: 'A',
        1: 'A#',
        2: 'B',
        3: 'C',
        4: 'C#',
        5: 'D',
        6: 'D#',
        7: 'E',
        8: 'F',
        9: 'F#',
        10: 'G',
        11: 'G#',
    };
})(Tone || (Tone = {}));


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map