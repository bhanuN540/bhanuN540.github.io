(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"main-main-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    {
        path: 'main',
        loadChildren: './main/main.module#MainModule',
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'UMNR';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/service.service */ "./src/app/service.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(),
            ],
            providers: [_app_service_service__WEBPACK_IMPORTED_MODULE_12__["Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padT{\r\n    margin-top:10px;\r\n}\r\n.bgC{\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    margin-top:10px;\r\n    margin: auto;\r\n    top:15%;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n.bgL{\r\n    background-color:rgba(31, 80, 132, 0.5);\r\n    border-radius: 3px;\r\n    padding: 4% 0;\r\n    padding-left: 10%;\r\n}\r\n.selectText{\r\n    position: absolute;\r\n    text-align: center;\r\n    padding: 1%;\r\n    width: 50px;\r\n    background-color:#1f5084;\r\n    border-radius: 3px;\r\n    color:#fff;\r\n}\r\n.selectBox{\r\n    background: white;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    color:#000;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.mT2{\r\n    margin-top:2%;\r\n}\r\n.mat-select-value-text{\r\n    color:#ccc;\r\n}\r\n.p0{\r\npadding: 0;\r\n}\r\n.fl{\r\n    float: left;\r\n}\r\n.w50{\r\n    width: 50%;\r\n}\r\n.bg_login{\r\n    background-image: url('bg-image.jpg');\r\n    background-size: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    color:#f1f1f1;\r\n}\r\n.pdT1{\r\n    padding-top: 1%;\r\n}\r\n.triptype{\r\n    text-align:center;\r\n    padding-bottom:1%;\r\n}\r\n.loginform>div{\r\n    padding-bottom:4%; \r\n}\r\n.tc{\r\n    text-align: center;\r\n}\r\n@media only screen \r\nand (min-device-width : 375px) \r\nand (max-device-width : 667px) { /* STYLES GO HERE */\r\n    .bgC{\r\n        top:0%;\r\n    }\r\n    .bgL{\r\n        padding-left: 0%;\r\n    }\r\n}\r\n@media only screen \r\nand (min-device-width : 375px) \r\nand (max-device-width : 812px)\r\nand (-webkit-device-pixel-ratio : 3) { /* STYLES GO HERE */\r\n    .bgC{\r\n        top:10%;\r\n    }\r\n    .bgL{\r\n        padding-left: 0%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUNBQW9EO0lBQ3BELHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O2lDQUVpQyxtQkFBbUI7SUFDaEQ7UUFDSSxNQUFNO0lBQ1Y7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7Ozt1Q0FHdUMsbUJBQW1CO0lBQ3REO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkVHtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uYmdDe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOjE1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5iZ0x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzEsIDgwLCAxMzIsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiA0JSAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbn1cclxuLnNlbGVjdFRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWY1MDg0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG4uc2VsZWN0Qm94e1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tVDJ7XHJcbiAgICBtYXJnaW4tdG9wOjIlO1xyXG59XHJcblxyXG4ubWF0LXNlbGVjdC12YWx1ZS10ZXh0e1xyXG4gICAgY29sb3I6I2NjYztcclxufVxyXG4ucDB7XHJcbnBhZGRpbmc6IDA7XHJcbn1cclxuLmZse1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnc1MHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLmJnX2xvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmctaW1hZ2UuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6I2YxZjFmMTtcclxufVxyXG4ucGRUMXtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxufVxyXG4udHJpcHR5cGV7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOjElO1xyXG59XHJcbi5sb2dpbmZvcm0+ZGl2e1xyXG4gICAgcGFkZGluZy1ib3R0b206NCU7IFxyXG59XHJcbi50Y3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbmFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KSBcclxuYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpIHsgLyogU1RZTEVTIEdPIEhFUkUgKi9cclxuICAgIC5iZ0N7XHJcbiAgICAgICAgdG9wOjAlO1xyXG4gICAgfVxyXG4gICAgLmJnTHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIFxyXG5hbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcclxuYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpIHsgLyogU1RZTEVTIEdPIEhFUkUgKi9cclxuICAgIC5iZ0N7XHJcbiAgICAgICAgdG9wOjEwJTtcclxuICAgIH1cclxuICAgIC5iZ0x7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_login\">\n  <div class=\"row padT bgC\">\n    <div class=\"col-sm-12 col-md-6 col-lg-6 bgL tc\">\n      <form class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 loginform\" [formGroup]=\"loginform\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\" required placeholder=\"username\">\n          </div> \n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <input type=\"password\" class=\"form-control\"  formControlName=\"password\" required placeholder=\"password\">\n          </div> \n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <button type=\"submit\" (click)=\"login()\"  class=\"form-control\" [disabled]=\"!loginform.valid\">Log in</button>\n            </div> \n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                forgot password?<a href=\"#\" >click here</a>\n            </div> \n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              not an user?<input type=\"button\" class=\"btn btn-sm btn-warning btn-sm\" routerLink=\"/registration\" value=\"Sign Up\"/>\n            </div>\n       </form> \n    </div>\n\n    <div class=\"col-sm-12 col-md-6 col-lg-6 pdT1\">\n      <form (ngSubmit)=\"searchFlights(searchForm)\" #searchForm=\"ngForm\">\n        <div class=\"triptype col-sm-12 col-md-12 col-lg-12\">\n          <input type=\"radio\" value=\"Roundtrip\" [(ngModel)]=\"searchModel.tripType\" id=\"tripType1\" name=\"tripType\">Roundtrip\n          <input type=\"radio\" value=\"One-Way\" [(ngModel)]=\"searchModel.tripType\" id=\"tripType2\" name=\"tripType\">One-Way\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n          <!--<div class=\"selectText\">from</div>-->\n          <select class=\"selectBox\" [(ngModel)]=\"searchModel.origin\" id=\"origin\" name=\"origin\">\n            <option value=\"\">Select Origin</option>\n            <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-12 mT2\">\n          <!--<div class=\"selectText\">to</div>-->\n          <select class=\"selectBox\" [(ngModel)]=\"searchModel.destination\" id=\"destination\" name=\"destination\">\n            <option value=\"\">Select Destination</option>\n            <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-12\"> \n          <span>Departing</span>\n          <mat-form-field class=\"example-full-width\">\n            <input [(ngModel)]=\"searchModel.depart\" id=\"depart\" name=\"depart\" matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n          <span>Returning</span>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput [(ngModel)]=\"searchModel.return\" id=\"return\" name=\"return\" [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2></mat-datepicker>\n          </mat-form-field>\n        </div> \n       <div class=\"col-sm-12 col-md-12 col-lg-12\">\n          <div class=\"col-sm-6 col-md-6 col-lg-6 w50 fl p0\">\n          <!--<div class=\"selectText\">Travelers</div>-->\n          <mat-form-field>\n              <mat-label>No of Adult's</mat-label>\n              <select matNativeControl required [(ngModel)]=\"searchModel.adultsCount\" id=\"adultsCount\" name=\"adultsCount\">\n                <option value=\"\" selected>Select no of Adult's</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6</option>\n                <option value=\"7\">7</option>\n                <option value=\"8\">8</option>\n                <option value=\"9\">9</option>\n                <option value=\"10+\">10+</option>\n              </select>\n            </mat-form-field>\n\n          <!--<mat-select class=\"selectBox\">\n            <mat-option>Adults</mat-option>\n            <mat-option>Children</mat-option>\n            <mat-option>UMNR</mat-option>\n          </mat-select>-->\n        </div>\n        <div class=\"col-sm-6 col-md-6 col-lg-6 w50 fl p0\">\n            <mat-form-field>\n                <mat-label>No of Children's</mat-label>\n                <select matNativeControl required [(ngModel)]=\"searchModel.childCount\" id=\"childCount\" name=\"childCount\">\n                  <option value=\"\">Select no of Children's</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10+\">10+</option>\n                </select>\n              </mat-form-field>\n        </div>\n        </div>\n        <div  class=\"cb col-sm-12 col-md-12 col-lg-12\">\n          <!--<div class=\"selectText\">type</div>-->\n          <mat-select class=\"selectBox\" [(ngModel)]=\"searchModel.cabinType\" id=\"cabinType\" name=\"cabinType\">\n            <mat-option value=\"\">Cabin Type</mat-option>\n              <mat-option value=\"First class\">First class</mat-option>\n              <mat-option value=\"Business\">Business</mat-option>\n              <mat-option value=\"Premium economy\">Premium economy</mat-option>\n              <mat-option value=\"Economy/Coach\">Economy/Coach</mat-option>\n          </mat-select>\n        </div>\n        <div class=\"cb col-sm-12 col-md-12 col-lg-12 mT2 tc\">\n            <button type=\"submit\"  class=\"btn btn-warning btn-sm\">Search Flights</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




//const localData = require('src/data.json')
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
        this.loginform = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.searchModel = { "tripType": "", "origin": "", "destination": "", "depart": "", "return": "", "adultsCount": "", "childCount": "", "cabinType": "" };
    }
    /*submitData(userName,passWord){
      const data = {
        username: userName,
        password: passWord
      }
      console.log(data)
    }*/
    LoginComponent.prototype.searchFlights = function (searchForm) {
        alert(JSON.stringify(searchForm.value));
    };
    LoginComponent.prototype.login = function () {
        var redirect = 'main';
        // Set our navigation extras object
        // that passes on our global query params and fragment
        var navigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
        };
        // Redirect the user
        this.router.navigate([redirect]);
    };
    LoginComponent.prototype.ngOnInit = function () {
        //console.log("json from intenal file "+ JSON.stringify(localData) )
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  registration works!\n</p>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.getData = function (url) {
        return this.http.get(url, httpOptions);
    };
    Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cnarukula\Desktop\umnr-tcs-iata-hackathon\UMNR-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map