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
exports.push([module.i, "@charset \"UTF-8\";\n.container {\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\",\"Noto Sans Japanese\",\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   ProN W3\", Meiryo, sans-serif;\n  font-size: 12px;\n  padding: 30px; }\n  .container .gt {\n    margin-bottom: 30px; }\n    .container .gt .gt-neck {\n      display: table;\n      border-collapse: collapse; }\n      .container .gt .gt-neck .gt-string {\n        display: table-row;\n        border-collapse: collapse;\n        /** fret */ }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(4),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(6),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(8),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(10),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(16),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(18),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(20),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(22) {\n          background-color: antiquewhite; }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(13),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(25) {\n          background-color: aquamarine; }\n        .container .gt .gt-neck .gt-string:last-child .step {\n          border-color: transparent !important; }\n        .container .gt .gt-neck .gt-string .step {\n          border: 1px solid;\n          border-collapse: collapse;\n          box-sizing: border-box;\n          display: table-cell;\n          height: 30px;\n          position: relative;\n          min-width: 60px;\n          width: 60px; }\n          .container .gt .gt-neck .gt-string .step:first-child {\n            border-width: 0 10px 0 0; }\n          .container .gt .gt-neck .gt-string .step .label {\n            border-radius: 50%;\n            color: white;\n            font-size: 12px;\n            height: 20px;\n            line-height: 20px;\n            position: absolute;\n            right: 10px;\n            text-align: center;\n            top: -10px;\n            width: 20px; }\n            .container .gt .gt-neck .gt-string .step .label.active {\n              background-color: black; }\n              .container .gt .gt-neck .gt-string .step .label.active.root {\n                background-color: brown; }\n              .container .gt .gt-neck .gt-string .step .label.active.fifth {\n                background-color: chocolate; }\n  .container .tone-list {\n    margin-bottom: 30px; }\n    .container .tone-list .tone-list-item {\n      background-color: antiquewhite;\n      border-radius: 50%;\n      display: inline-block;\n      height: 50px;\n      line-height: 50px;\n      text-align: center;\n      width: 50px; }\n      .container .tone-list .tone-list-item.selected {\n        background-color: aquamarine; }\n      .container .tone-list .tone-list-item:not(:first-child) {\n        margin-left: 10px; }\n  .container .scale-list {\n    display: inline-block;\n    vertical-align: top;\n    width: 360px; }\n    .container .scale-list .scale-list-item {\n      background-color: antiquewhite;\n      border-radius: 5px;\n      box-sizing: border-box;\n      display: inline-block;\n      margin: 0 5px 5px 0;\n      padding: 10px 20px;\n      width: 160px; }\n      .container .scale-list .scale-list-item.selected {\n        background-color: aquamarine; }\n  .container .code-list {\n    display: inline-block;\n    vertical-align: top;\n    width: 400px; }\n    .container .code-list .code-list-item {\n      background-color: antiquewhite;\n      border-radius: 50%;\n      box-sizing: border-box;\n      display: inline-block;\n      height: 50px;\n      line-height: 50px;\n      margin-bottom: 10px;\n      margin-right: 10px;\n      text-align: center;\n      width: 50px; }\n      .container .code-list .code-list-item.selected {\n        background-color: aquamarine; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><div class=\"gt\"><div class=\"gt-neck\"><div class=\"gt-string gt-string-list-item--{{ i + 1}}\" *ngFor=\"let gtString of gtStringSeq; let i = index\"><div class=\"step\" *ngFor=\"let step of gtString\"><div class=\"label\" [class.active]=\"getLabel(step)\" [class.root]=\"step == selectedTone.step\" [class.fifth]=\"step == selectedTone.step + 7\">{{ getLabel(step) }}</div></div></div></div></div><div class=\"tone-list\"><div class=\"tone-list-item\" *ngFor=\"let tone of toneSeq\" (click)=\"selectedTone = tone\" [class.selected]=\"tone == selectedTone\"><div class=\"label\">{{ tone.name }}</div></div></div><div class=\"scale-list\"><div class=\"scale-list-item\" *ngFor=\"let scale of scaleSeq\" (click)=\"selectedScale = scale\" [class.selected]=\"scale == selectedScale\"><div class=\"label\">{{ scale.name }}</div></div></div><div class=\"code-list\"><div class=\"code-list-item\" *ngFor=\"let code of codeSeq\" (click)=\"selectedScale = code\" [class.selected]=\"code == selectedScale\"><div class=\"label\">{{ code.name }}</div></div></div></div>"

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
        this.scaleSeq = __WEBPACK_IMPORTED_MODULE_2__scale__["a" /* Scale */].allScale;
        this.codeSeq = __WEBPACK_IMPORTED_MODULE_2__scale__["a" /* Scale */].allCode;
        this.selectedTone = null;
        this.selectedScale = null;
        this.fretCount = 22;
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
        this.selectedTone = this.toneSeq[3];
        this.selectedScale = this.scaleSeq[0];
    };
    AppComponent.prototype.getLabel = function (step) {
        var v = (12 + step - this.selectedTone.step) % 12;
        if (this.selectedScale.stepSeq.includes(v)) {
            if (__WEBPACK_IMPORTED_MODULE_1__tone__["a" /* Tone */].skeys.includes(this.selectedTone.step)) {
                return __WEBPACK_IMPORTED_MODULE_1__tone__["a" /* Tone */].smap[step];
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1__tone__["a" /* Tone */].fmap[step];
            }
        }
        else {
            return null;
        }
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
    Scale.allScale = [{
            name: 'Major',
            stepSeq: [0, 2, 4, 5, 7, 9, 11]
        }, {
            name: 'Minor',
            stepSeq: [0, 2, 3, 5, 7, 8, 10]
        }, {
            name: 'Harmonic Minor',
            stepSeq: [0, 2, 3, 5, 7, 8, 11]
        }, {
            name: 'Melodic Minor',
            stepSeq: [0, 2, 3, 5, 7, 9, 11]
        }, {
            name: 'Major Pentatonic',
            stepSeq: [0, 2, 4, 7, 9]
        }, {
            name: 'Minor Pentatonic',
            stepSeq: [0, 3, 5, 7, 10]
        }, {
            name: 'Ionian',
            stepSeq: [0, 2, 4, 5, 7, 9, 11]
        }, {
            name: 'Dorian',
            stepSeq: [0, 2, 3, 5, 7, 9, 10]
        }];
    Scale.allCode = [{
            name: 'M',
            stepSeq: [0, 4, 7]
        }, {
            name: 'm',
            stepSeq: [0, 3, 7]
        }, {
            name: '7',
            stepSeq: [0, 4, 7, 10]
        }, {
            name: 'M7',
            stepSeq: [0, 4, 7, 11]
        }, {
            name: 'm7',
            stepSeq: [0, 3, 7, 10]
        }, {
            name: 'mM7',
            stepSeq: [0, 3, 7, 11]
        }, {
            name: '6',
            stepSeq: [0, 4, 7, 9]
        }, {
            name: 'm6',
            stepSeq: [0, 3, 7, 9]
        }, {
            name: '9',
            stepSeq: [0, 4, 7, 10, 2]
        }, {
            name: 'M9',
            stepSeq: [0, 4, 7, 11, 2]
        }, {
            name: 'm9',
            stepSeq: [0, 3, 7, 10, 2]
        }, {
            name: '69',
            stepSeq: [0, 4, 7, 9, 2]
        }, {
            name: 'm69',
            stepSeq: [0, 3, 7, 9, 2]
        }, {
            name: 'sus4',
            stepSeq: [0, 5, 7]
        }, {
            name: '7sus4',
            stepSeq: [0, 5, 7, 10]
        }, {
            name: 'dim',
            stepSeq: [0, 3, 6]
        }, {
            name: 'aug',
            stepSeq: [0, 4, 8]
        }, {
            name: 'aug7',
            stepSeq: [0, 4, 8, 10]
        }, {
            name: 'add9',
            stepSeq: [0, 4, 7, 2]
        }, {
            name: '7(♯5)',
            stepSeq: [0, 4, 8, 10]
        }, {
            name: '7(♭5)',
            stepSeq: [0, 4, 6, 10]
        }, {
            name: 'm7(♭5)',
            stepSeq: [0, 3, 6, 10]
        }, {
            name: '7(♯9)',
            stepSeq: [0, 4, 7, 10, 3]
        }, {
            name: '7(♭9)',
            stepSeq: [0, 4, 7, 10, 1]
        }];
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
        { name: 'A♯', step: 1 },
        { name: 'B', step: 2 },
        { name: 'C', step: 3 },
        { name: 'C♯', step: 4 },
        { name: 'D', step: 5 },
        { name: 'D♯', step: 6 },
        { name: 'E', step: 7 },
        { name: 'F', step: 8 },
        { name: 'F♯', step: 9 },
        { name: 'G', step: 10 },
        { name: 'G♯', step: 11 },
    ];
    Tone.skeys = [0, 2, 3, 4, 5, 7, 9, 10];
    Tone.fkeys = [1, 6, 8, 11];
    Tone.smap = {
        0: 'A',
        1: 'A♯',
        2: 'B',
        3: 'C',
        4: 'C♯',
        5: 'D',
        6: 'D♯',
        7: 'E',
        8: 'F',
        9: 'F♯',
        10: 'G',
        11: 'G♯',
    };
    Tone.fmap = {
        0: 'A',
        1: 'B♭',
        2: 'B',
        3: 'C',
        4: 'D♭',
        5: 'D',
        6: 'E♭',
        7: 'E',
        8: 'F',
        9: 'G♭',
        10: 'G',
        11: 'A♭',
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