(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-collins-collins-module"],{

/***/ "./src/app/pages/collins/collins.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/collins/collins.module.ts ***!
  \*************************************************/
/*! exports provided: CollinsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollinsModule", function() { return CollinsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_collins_collins_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/collins/collins.routing */ "./src/app/pages/collins/collins.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CollinsModule = /** @class */ (function () {
    function CollinsModule() {
    }
    CollinsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_pages_collins_collins_routing__WEBPACK_IMPORTED_MODULE_3__["CollinsRoutes"])
            ]
        })
    ], CollinsModule);
    return CollinsModule;
}());



/***/ }),

/***/ "./src/app/pages/collins/collins.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/collins/collins.routing.ts ***!
  \**************************************************/
/*! exports provided: CollinsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollinsRoutes", function() { return CollinsRoutes; });
/* harmony import */ var _pages_collins_collins_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/collins/collins.component */ "./src/app/pages/collins/collins.component.ts");

var CollinsRoutes = [
    {
        path: '',
        component: _pages_collins_collins_component__WEBPACK_IMPORTED_MODULE_0__["CollinsComponent"],
        data: { title: 'Collins' }
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-collins-collins-module.js.map