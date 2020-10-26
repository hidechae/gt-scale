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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><div class=\"gt\"><div class=\"gt-neck\"><div class=\"gt-string\" *ngFor=\"let gtString of selectedGt\"><div class=\"step\" *ngFor=\"let step of gtString\"><div class=\"label\" [class.active]=\"getLabel(step)\" [class.highlight]=\"selectedStepSet.has((12 + step - selectedTone.step) % 12)\">{{ getLabel(step) }}</div></div></div></div></div><mat-card><div class=\"gt-selector\"><mat-form-field><mat-select [(value)]=\"selectedGt\"><mat-option *ngFor=\"let option of gtOptions\" [value]=\"option.value\">{{ option.viewValue }}</mat-option></mat-select></mat-form-field></div><div class=\"step-list\"><button class=\"step-list-item\" mat-raised-button=\"mat-raised-button\" *ngFor=\"let step of stepSeq\" (click)=\"onSelectStep(step)\" [class.hidden]=\"!selectedScale.stepSeq.includes(step.step)\" [class.selected]=\"selectedStepSet.has(step.step)\"> {{ step.name }}</button></div><div class=\"mode-selector\"><mat-slide-toggle [checked]=\"useTone\" (change)=\"useTone = $event.checked\"></mat-slide-toggle></div></mat-card><mat-card><div class=\"tone-list\"><button class=\"tone-list-item\" mat-fab=\"mat-fab\" *ngFor=\"let tone of toneSeq\" (click)=\"selectedTone = tone\" [class.selected]=\"tone == selectedTone\"> {{ tone.name }}</button></div></mat-card><mat-card><div class=\"scale-list\"><button class=\"scale-list-item\" mat-raised-button=\"mat-raised-button\" *ngFor=\"let scale of scaleSeq\" (click)=\"selectedScale = scale\" [class.selected]=\"scale == selectedScale\">{{ scale.name }}</button></div><div class=\"code-list\"><button class=\"code-list-item\" mat-fab=\"mat-fab\" *ngFor=\"let code of codeSeq\" (click)=\"selectedScale = code\" [class.selected]=\"code == selectedScale\">{{ code.name }}</button></div></mat-card></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.container {\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\",\"Noto Sans Japanese\",\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   ProN W3\", Meiryo, sans-serif;\n  font-size: 12px;\n  margin: auto;\n  width: 1024px; }\n  .container .gt {\n    margin: 30px 0 0; }\n    .container .gt .gt-neck {\n      display: table;\n      border-collapse: collapse; }\n      .container .gt .gt-neck .gt-string {\n        display: table-row;\n        border-collapse: collapse;\n        /** fret */ }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(4),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(6),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(8),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(10),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(16),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(18),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(20),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(22) {\n          background-color: #d7ccc8; }\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(13),\n        .container .gt .gt-neck .gt-string:not(:last-child) .step:nth-child(25) {\n          background-color: #a1887f; }\n        .container .gt .gt-neck .gt-string:last-child .step {\n          border-color: transparent !important; }\n        .container .gt .gt-neck .gt-string .step {\n          border: 1px solid #263238;\n          border-collapse: collapse;\n          box-sizing: border-box;\n          display: table-cell;\n          height: 30px;\n          position: relative;\n          min-width: 45px;\n          width: 45px; }\n          .container .gt .gt-neck .gt-string .step:first-child {\n            border-width: 0 10px 0 0; }\n          .container .gt .gt-neck .gt-string .step .label {\n            border-radius: 50%;\n            font-size: 12px;\n            height: 20px;\n            line-height: 20px;\n            position: absolute;\n            right: 5px;\n            text-align: center;\n            top: -10px;\n            width: 20px; }\n            .container .gt .gt-neck .gt-string .step .label.active {\n              background-color: white;\n              border: 1px solid #3e2723; }\n              .container .gt .gt-neck .gt-string .step .label.active.highlight {\n                background-color: #3e2723;\n                color: white; }\n  .container .gt-selector {\n    display: inline-block;\n    position: absolute;\n    left: 24px; }\n    .container .gt-selector mat-form-field {\n      width: 120px; }\n      .container .gt-selector mat-form-field /deep/ .mat-input-infix {\n        border: 0; }\n  .container .step-list {\n    display: inline-block; }\n    .container .step-list .step-list-item {\n      background-color: #d7ccc8;\n      border-radius: 50px;\n      height: 25px;\n      line-height: 25px;\n      min-width: 60px;\n      padding: 0; }\n      .container .step-list .step-list-item.hidden {\n        display: none; }\n      .container .step-list .step-list-item.selected {\n        background-color: #795548;\n        color: white; }\n      .container .step-list .step-list-item:not(:first-child) {\n        margin-left: 5px; }\n  .container .mode-selector {\n    display: inline-block;\n    position: absolute;\n    right: 24px; }\n  .container .tone-list .tone-list-item {\n    background-color: #d7ccc8; }\n    .container .tone-list .tone-list-item.selected {\n      background-color: #795548;\n      color: white; }\n    .container .tone-list .tone-list-item:not(:first-child) {\n      margin-left: 10px; }\n  .container .scale-list {\n    display: inline-block;\n    text-align: center;\n    vertical-align: top;\n    width: 500px; }\n    .container .scale-list .scale-list-item {\n      background-color: #d7ccc8;\n      margin: 0 5px 5px 0;\n      width: 145px; }\n      .container .scale-list .scale-list-item.selected {\n        background-color: #795548;\n        color: white; }\n  .container .code-list {\n    display: inline-block;\n    vertical-align: top;\n    width: 400px; }\n    .container .code-list .code-list-item {\n      background-color: #d7ccc8;\n      margin-bottom: 10px;\n      margin-right: 10px; }\n      .container .code-list .code-list-item.selected {\n        background-color: #795548;\n        color: white; }\n  .container .mat-card {\n    box-sizing: border-box;\n    margin: 0 auto;\n    text-align: center;\n    width: 960px; }\n    .container .mat-card:not(:last-child) {\n      margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scale__ = __webpack_require__("../../../../../src/app/scale.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step__ = __webpack_require__("../../../../../src/app/step.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tone__ = __webpack_require__("../../../../../src/app/tone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guitar__ = __webpack_require__("../../../../../src/app/guitar.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppComponent = (function () {
    function AppComponent() {
        this.useTone = false;
        this.stepSeq = __WEBPACK_IMPORTED_MODULE_2__step__["a" /* Step */].all;
        this.toneSeq = __WEBPACK_IMPORTED_MODULE_3__tone__["a" /* Tone */].all;
        this.scaleSeq = __WEBPACK_IMPORTED_MODULE_1__scale__["a" /* Scale */].allScale;
        this.codeSeq = __WEBPACK_IMPORTED_MODULE_1__scale__["a" /* Scale */].allCode;
        this.selectedTone = this.toneSeq[3];
        this.selectedScale = this.scaleSeq[0];
        this.selectedStepSet = new Set([0]);
        this.selectedGt = __WEBPACK_IMPORTED_MODULE_4__guitar__["a" /* Guitar */].gt;
        this.gtOptions = __WEBPACK_IMPORTED_MODULE_4__guitar__["a" /* Guitar */].options;
    }
    AppComponent.prototype.getLabel = function (step) {
        var v = (12 + step - this.selectedTone.step) % 12;
        if (this.selectedScale.stepSeq.includes(v)) {
            return this.useTone ? this.getToneLabel(step) : this.getStepLabel(v);
        }
        else {
            return null;
        }
    };
    AppComponent.prototype.getStepLabel = function (step) {
        return __WEBPACK_IMPORTED_MODULE_2__step__["a" /* Step */].map[step];
    };
    AppComponent.prototype.getToneLabel = function (step) {
        if (__WEBPACK_IMPORTED_MODULE_3__tone__["a" /* Tone */].skeys.includes(this.selectedTone.step)) {
            return __WEBPACK_IMPORTED_MODULE_3__tone__["a" /* Tone */].smap[step];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3__tone__["a" /* Tone */].fmap[step];
        }
    };
    AppComponent.prototype.onSelectStep = function (step) {
        if (this.selectedStepSet.has(step.step)) {
            this.selectedStepSet.delete(step.step);
        }
        else {
            this.selectedStepSet.add(step.step);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/guitar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guitar; });
var Guitar;
(function (Guitar) {
    var fretCount = 22;
    Guitar.gt = [
        /** 1st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        /** 2st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 2) % 12; }),
        /** 3st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 10) % 12; }),
        /** 4st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 5) % 12; }),
        /** 5st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return i % 12; }),
        /** 6st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
    ];
    Guitar.gt7 = [
        /** 1st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        /** 2st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 2) % 12; }),
        /** 3st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 10) % 12; }),
        /** 4st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 5) % 12; }),
        /** 5st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return i % 12; }),
        /** 6st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        /** 7st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 2) % 12; }),
    ];
    Guitar.gt8 = [
        /** 1st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        /** 2st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 2) % 12; }),
        /** 3st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 10) % 12; }),
        /** 4st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 5) % 12; }),
        /** 5st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return i % 12; }),
        /** 6st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        /** 7st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 2) % 12; }),
        /** 8st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 9) % 12; }),
    ];
    Guitar.ba = [
        /** 1st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 10) % 12; }),
        /** 2st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 5) % 12; }),
        /** 3st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return i % 12; }),
        /** 4st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
    ];
    Guitar.ba5 = [
        /** 1st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 10) % 12; }),
        /** 2st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 5) % 12; }),
        /** 3st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return i % 12; }),
        /** 4st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        /** 5st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 2) % 12; }),
    ];
    Guitar.ba6 = [
        /** 1st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 3) % 12; }),
        /** 2st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 10) % 12; }),
        /** 3st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 5) % 12; }),
        /** 4st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return i % 12; }),
        /** 5st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 7) % 12; }),
        /** 6st */ Array.apply(null, new Array(fretCount)).map(function (_, i) { return (i + 2) % 12; }),
    ];
    Guitar.options = [
        { value: Guitar.gt, viewValue: 'Gt. (6st.)' },
        { value: Guitar.gt7, viewValue: 'Gt. (7st.)' },
        { value: Guitar.gt8, viewValue: 'Gt. (8st.)' },
        { value: Guitar.ba, viewValue: 'Ba. (4st.)' },
        { value: Guitar.ba5, viewValue: 'Ba. (5st.)' },
        { value: Guitar.ba6, viewValue: 'Ba. (6st.)' },
    ];
})(Guitar || (Guitar = {}));


/***/ }),

/***/ "../../../../../src/app/scale.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scale; });
var Scale;
(function (Scale) {
    Scale.allScale = [{
            name: 'Ionian / Major',
            stepSeq: [0, 2, 4, 5, 7, 9, 11]
        }, {
            name: 'Dorian',
            stepSeq: [0, 2, 3, 5, 7, 9, 10]
        }, {
            name: 'Phrigian',
            stepSeq: [0, 1, 3, 5, 7, 8, 10]
        }, {
            name: 'Lydian',
            stepSeq: [0, 2, 4, 6, 7, 9, 11]
        }, {
            name: 'Mixolydian',
            stepSeq: [0, 2, 4, 5, 7, 9, 10]
        }, {
            name: 'Aeolian / Minor',
            stepSeq: [0, 2, 3, 5, 7, 8, 10]
        }, {
            name: 'Locrian',
            stepSeq: [0, 1, 3, 5, 6, 8, 10]
        }, {
            name: 'Harmonic Minor',
            stepSeq: [0, 2, 3, 5, 7, 8, 11]
        }, {
            name: 'Melodic Minor',
            stepSeq: [0, 2, 3, 5, 7, 9, 11]
        }, {
            name: 'Altered',
            stepSeq: [0, 1, 3, 4, 6, 8, 10]
        }, {
            name: 'Com-Dimi',
            stepSeq: [0, 1, 3, 4, 6, 7, 9, 10]
        }, {
            name: 'Symmetrical Aug',
            stepSeq: [0, 3, 4, 7, 8, 11]
        }, {
            name: 'Major Pentatonic',
            stepSeq: [0, 2, 4, 7, 9]
        }, {
            name: 'Minor Pentatonic',
            stepSeq: [0, 3, 5, 7, 10]
        }, {
            name: 'Kumoi Pentatonic',
            stepSeq: [0, 3, 5, 6, 10]
        }, {
            name: 'Major Blues',
            stepSeq: [0, 2, 3, 4, 7, 9]
        }, {
            name: 'Minor Blues',
            stepSeq: [0, 3, 5, 6, 7, 10]
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

/***/ "../../../../../src/app/step.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
var Step;
(function (Step) {
    Step.all = [
        { name: 'T', step: 0 },
        { name: 'm2', step: 1 },
        { name: 'M2', step: 2 },
        { name: 'm3', step: 3 },
        { name: 'M3', step: 4 },
        { name: 'P4', step: 5 },
        { name: '♯4', step: 6 },
        { name: 'P5', step: 7 },
        { name: 'm6', step: 8 },
        { name: 'M6', step: 9 },
        { name: 'm7', step: 10 },
        { name: 'M7', step: 11 },
    ];
    Step.map = {
        0: 'T',
        1: 'm2',
        2: 'M2',
        3: 'm3',
        4: 'M3',
        5: 'P4',
        6: '♯4',
        7: 'P5',
        8: 'm6',
        9: 'M6',
        10: 'm7',
        11: 'M7',
    };
})(Step || (Step = {}));


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web_animations_js__ = __webpack_require__("../../../../web-animations-js/web-animations.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web_animations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_web_animations_js__);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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
