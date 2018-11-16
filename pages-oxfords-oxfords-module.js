(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-oxfords-oxfords-module"],{

/***/ "./node_modules/pug-loader/index.js!./src/app/pages/oxfords/oxfords.component.pug":
/*!*******************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/pages/oxfords/oxfords.component.pug ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cp\u003Eoxfords works!\u003C\u002Fp\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/app/pages/oxfords/oxfords.component.pug":
/*!*****************************************************!*\
  !*** ./src/app/pages/oxfords/oxfords.component.pug ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/pages/oxfords/oxfords.component.pug */ "./node_modules/pug-loader/index.js!./src/app/pages/oxfords/oxfords.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/pages/oxfords/oxfords.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/oxfords/oxfords.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL294Zm9yZHMvb3hmb3Jkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/oxfords/oxfords.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/oxfords/oxfords.component.ts ***!
  \****************************************************/
/*! exports provided: OxfordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxfordsComponent", function() { return OxfordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OxfordsComponent = /** @class */ (function () {
    function OxfordsComponent() {
    }
    OxfordsComponent.prototype.ngOnInit = function () {
    };
    OxfordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oxfords',
            template: __webpack_require__(/*! ./oxfords.component.pug */ "./src/app/pages/oxfords/oxfords.component.pug"),
            styles: [__webpack_require__(/*! ./oxfords.component.scss */ "./src/app/pages/oxfords/oxfords.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OxfordsComponent);
    return OxfordsComponent;
}());



/***/ }),

/***/ "./src/app/pages/oxfords/oxfords.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/oxfords/oxfords.module.ts ***!
  \*************************************************/
/*! exports provided: OxfordsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxfordsModule", function() { return OxfordsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");
/* harmony import */ var _pages_oxfords_oxfords_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/oxfords/oxfords.component */ "./src/app/pages/oxfords/oxfords.component.ts");
/* harmony import */ var _pages_oxfords_oxfords_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/oxfords/oxfords.routing */ "./src/app/pages/oxfords/oxfords.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OxfordsModule = /** @class */ (function () {
    function OxfordsModule() {
    }
    OxfordsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pages_oxfords_oxfords_component__WEBPACK_IMPORTED_MODULE_3__["OxfordsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_oxfords_oxfords_routing__WEBPACK_IMPORTED_MODULE_4__["OxfordsRoutes"]),
                _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ]
        })
    ], OxfordsModule);
    return OxfordsModule;
}());



/***/ }),

/***/ "./src/app/pages/oxfords/oxfords.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/oxfords/oxfords.routing.ts ***!
  \**************************************************/
/*! exports provided: OxfordsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxfordsRoutes", function() { return OxfordsRoutes; });
/* harmony import */ var _pages_oxfords_oxfords_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/oxfords/oxfords.component */ "./src/app/pages/oxfords/oxfords.component.ts");

var OxfordsRoutes = [
    {
        path: '',
        component: _pages_oxfords_oxfords_component__WEBPACK_IMPORTED_MODULE_0__["OxfordsComponent"],
        data: { title: 'Oxfords' }
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-oxfords-oxfords-module.js.map