(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blueup-blueup-module"],{

/***/ "./src/app/pages/blueup/blueup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/blueup/blueup.module.ts ***!
  \***********************************************/
/*! exports provided: BlueupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueupModule", function() { return BlueupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_blueup_blueup_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/blueup/blueup.routing */ "./src/app/pages/blueup/blueup.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlueupModule = /** @class */ (function () {
    function BlueupModule() {
    }
    BlueupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_pages_blueup_blueup_routing__WEBPACK_IMPORTED_MODULE_3__["BlueupRoutes"])
            ]
        })
    ], BlueupModule);
    return BlueupModule;
}());



/***/ }),

/***/ "./src/app/pages/blueup/blueup.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blueup/blueup.routing.ts ***!
  \************************************************/
/*! exports provided: BlueupRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueupRoutes", function() { return BlueupRoutes; });
/* harmony import */ var _pages_blueup_blueup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/blueup/blueup.component */ "./src/app/pages/blueup/blueup.component.ts");

var BlueupRoutes = [
    {
        path: '',
        component: _pages_blueup_blueup_component__WEBPACK_IMPORTED_MODULE_0__["BlueupComponent"],
        data: { title: 'Blueup' }
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-blueup-blueup-module.js.map