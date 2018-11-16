(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-others-others-module"],{

/***/ "./src/app/pages/others/orthers.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/others/orthers.routing.ts ***!
  \*************************************************/
/*! exports provided: OthersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersRoutes", function() { return OthersRoutes; });
/* harmony import */ var _pages_others_others_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/others/others.component */ "./src/app/pages/others/others.component.ts");

var OthersRoutes = [
    {
        path: '',
        component: _pages_others_others_component__WEBPACK_IMPORTED_MODULE_0__["OthersComponent"],
        data: { title: 'Others' }
    }
];


/***/ }),

/***/ "./src/app/pages/others/others.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/others/others.module.ts ***!
  \***********************************************/
/*! exports provided: OthersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function() { return OthersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_others_orthers_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/others/orthers.routing */ "./src/app/pages/others/orthers.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OthersModule = /** @class */ (function () {
    function OthersModule() {
    }
    OthersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_pages_others_orthers_routing__WEBPACK_IMPORTED_MODULE_3__["OthersRoutes"])
            ]
        })
    ], OthersModule);
    return OthersModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-others-others-module.js.map