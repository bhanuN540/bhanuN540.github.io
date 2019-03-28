(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/booker/booker.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/booker/booker.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padT{\r\n    margin-top:10px;\r\n}\r\n.mat-form-field-infix{\r\n    border-bottom:1px solid #ccc;\r\n}\r\n.bgC{\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    margin-top:10px;\r\n    margin: auto;\r\n    top:20%;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n.bgL{\r\n    background-color:rgba(31, 80, 132, 0.5);\r\n    border-radius: 3px;\r\n    padding: 4% 0;\r\n}\r\n.selectText{\r\n    position: absolute;\r\n    text-align: center;\r\n    padding: 1%;\r\n    width: 50px;\r\n    background-color:#1f5084;\r\n    border-radius: 3px;\r\n    color:rgb(133, 36, 36);\r\n}\r\n.selectBox{\r\n    background: white;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    color:#000;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.mT2{\r\n    margin-top:2%;\r\n}\r\n.mat-select-value-text{\r\n    color:#ccc;\r\n}\r\n.p0{\r\n    padding:0;\r\n}\r\n.fl{\r\n    float: left;\r\n}\r\n.w50{\r\n    width: 50%;\r\n}\r\n.mat-form-field-flex{\r\n    border-bottom: 1px solid #000;\r\n}\r\n.mat-form-field-suffix{\r\n    background:  #1f5084;\r\n}\r\n.mat-select-value{\r\n    color:#000;\r\n}\r\ntable{\r\n    width: 100%;\r\n}\r\nthead{\r\n    background: #8ab2dc;\r\n}\r\ntable tr td{\r\n    text-align: center;\r\n    padding: 1% 0;\r\n}\r\ntable tr th{\r\n    width: 16.3%;\r\n    color:rgb(0, 0, 0);\r\n    text-align: center;\r\n    padding: 1% 0;\r\n}\r\ntable tbody tr:nth-child(2n){\r\n    background-color:#dee7ee;\r\n}\r\n.searchForm div span{\r\n    padding-right:1%; \r\n}\r\n.searchForm{\r\n    margin-top: -20px;\r\n}\r\n.searchForm>div{\r\n    padding-top:1%;\r\n    padding-bottom: 1%; \r\n}\r\n.dn{\r\n    display: none;\r\n}\r\n.tc{\r\n    text-align: center;\r\n}\r\n.p0{\r\n    padding: 0;\r\n}\r\n.package{\r\n    font-size: 14px;\r\n    background:rgba(31, 80, 132);\r\n    color:#fff;\r\n}\r\n.mT4{\r\n    margin-top: 4%;\r\n}\r\n.mT6{\r\n    margin-top: 6%;\r\n}\r\n.mT10{\r\n    margin-top: 10%;\r\n}\r\n.package p{\r\n    margin-bottom: 0.5%;\r\n    margin-top:0.5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ib29rZXIvYm9va2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ib29rZXIvYm9va2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkVHtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5iZ0N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6MjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJnTHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgzMSwgODAsIDEzMiwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDQlIDA7XHJcbn1cclxuLnNlbGVjdFRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWY1MDg0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6cmdiKDEzMywgMzYsIDM2KTtcclxufVxyXG4uc2VsZWN0Qm94e1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1UMntcclxuICAgIG1hcmdpbi10b3A6MiU7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXZhbHVlLXRleHR7XHJcbiAgICBjb2xvcjojY2NjO1xyXG59XHJcbi5wMHtcclxuICAgIHBhZGRpbmc6MDtcclxufVxyXG4uZmx7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4udzUwe1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtZmxleHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXh7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzFmNTA4NDtcclxufVxyXG4ubWF0LXNlbGVjdC12YWx1ZXtcclxuICAgIGNvbG9yOiMwMDA7XHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG50aGVhZHtcclxuICAgIGJhY2tncm91bmQ6ICM4YWIyZGM7XHJcbn1cclxudGFibGUgdHIgdGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxJSAwO1xyXG59XHJcbnRhYmxlIHRyIHRoe1xyXG4gICAgd2lkdGg6IDE2LjMlO1xyXG4gICAgY29sb3I6cmdiKDAsIDAsIDApO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMSUgMDtcclxufVxyXG50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoMm4pe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGVlN2VlO1xyXG59XHJcbi5zZWFyY2hGb3JtIGRpdiBzcGFue1xyXG4gICAgcGFkZGluZy1yaWdodDoxJTsgXHJcbn1cclxuLnNlYXJjaEZvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4uc2VhcmNoRm9ybT5kaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDoxJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxJTsgXHJcbn1cclxuLmRue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udGN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnAwe1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ucGFja2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgzMSwgODAsIDEzMik7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5tVDR7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4ubVQ2e1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbn1cclxuLm1UMTB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLnBhY2thZ2UgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XHJcbiAgICBtYXJnaW4tdG9wOjAuNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/booker/booker.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/booker/booker.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"searchForm\" (ngSubmit)=\"searchFlights(searchForm)\" #searchForm=\"ngForm\">\n  <div class=\"triptype col-sm-12 col-md-12 col-lg-12\" *ngIf=\"profileData\">\n    <span>Select Travelers</span>\n    <mat-form-field>\n        <mat-label>Travelers</mat-label>\n        <mat-select   multiple id=\"travelers\" name=\"travelers\" [(ngModel)]=\"searchModel.selectedTravelers\">\n          <mat-option [value]=\"profileData.Name\">{{profileData.Name}} ({{profileData.AgeType}})</mat-option>\n          <mat-option *ngFor=\"let kid of profileData.kids\" [value]=\"kid.Name\">{{kid.Name}} ({{kid.AgeType}})</mat-option>\n        </mat-select>\n      </mat-form-field>\n  </div>\n  <div class=\"triptype col-sm-12 col-md-12 col-lg-12\">\n    <input type=\"radio\" required value=\"Roundtrip\" [(ngModel)]=\"searchModel.tripType\" id=\"tripType\" name=\"tripType\">Roundtrip\n    <input type=\"radio\" required value=\"One-Way\" [(ngModel)]=\"searchModel.tripType\" id=\"tripType\" name=\"tripType\">One-Way\n  </div>\n  <div class=\"col-sm-8 col-md-8 col-lg-8\">\n    <!--<div class=\"selectText\">from</div>-->\n    <select class=\"selectBox\" [(ngModel)]=\"searchModel.origin\" id=\"origin\" required name=\"origin\">\n      <option value=\"\">Select Origin</option>\n      <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n    </select>\n  </div>\n  <div class=\"col-sm-8 col-md-8 col-lg-8\">\n    <!--<div class=\"selectText\">to</div>-->\n    <select class=\"selectBox\" [(ngModel)]=\"searchModel.destination\" id=\"destination\" name=\"destination\">\n      <option value=\"\">Select Destination</option>\n      <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n    </select>\n  </div>\n  <div class=\"col-sm-4 col-md-4 col-lg-4 fl col-xs-12\"> \n    <span>Departing</span>\n    <mat-form-field class=\"example-full-width\">\n      <input required [(ngModel)]=\"searchModel.depart\" id=\"depart\" name=\"depart\" matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      <mat-datepicker #picker1></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <div class=\"col-sm-4 col-md-4 col-lg-4 fl col-xs-12\">\n    <span>Returning</span>\n    <mat-form-field class=\"example-full-width\">\n      <input required matInput [(ngModel)]=\"searchModel.return\" id=\"return\" name=\"return\" [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n  </div> \n  <div class=\"col-sm-12 col-md-12 col-lg-12 fl col-xs-12\">\n  <div class=\"col-sm-4 col-md-4 col-xs-12 fl col-lg-4\">\n  <!--<div class=\"selectText\">Travelers</div>-->\n  <mat-form-field>\n      <mat-label>No of Adult's</mat-label>\n      <select matNativeControl  [(ngModel)]=\"searchModel.adultsCount\" id=\"adultsCount\" name=\"adultsCount\">\n        <option value=\"\" selected>Select no of Adult's</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10+\">10+</option>\n      </select>\n    </mat-form-field>\n  </div>\n  <div class=\"col-sm-4 col-md-4 col-lg-4 fl col-xs-12\">\n      <mat-form-field>\n          <mat-label>No of Children's</mat-label>\n          <select matNativeControl [(ngModel)]=\"searchModel.childCount\" id=\"childCount\" name=\"childCount\">\n            <option value=\"\">Select no of Children's</option>\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n            <option value=\"6\">6</option>\n            <option value=\"7\">7</option>\n            <option value=\"8\">8</option>\n            <option value=\"9\">9</option>\n            <option value=\"10+\">10+</option>\n          </select>\n        </mat-form-field>\n  </div>\n</div>\n  <div  class=\"cb col-sm-8 col-md-8 fl col-lg-8\">\n    <div class=\"selectText dn\">type</div>\n    <select  required class=\"selectBox\" [(ngModel)]=\"searchModel.cabinType\" id=\"cabinType\" name=\"cabinType\">\n      <option value=\"\">Select Cabin Type</option>\n        <option value=\"First class\">First class</option>\n        <option value=\"Business\">Business</option>\n        <option value=\"Premium economy\">Premium economy</option>\n        <option value=\"Economy/Coach\">Economy/Coach</option>\n    </select>\n  </div>\n  <div class=\"cb col-sm-12 col-md-12 col-lg-12\">\n      <button type=\"submit\" [disabled]=\"!searchForm.valid\" class=\"btn btn-warning btn-sm\">Search Flights</button>\n  </div>\n</form>\n\n<div  class=\"col-sm-12 col-md-12 mT2 col-lg-12\" *ngIf=\"shoppingResponse\" >\n  <form>\n    <table>\n      <thead>\n        <tr>\n          <th>\n            &nbsp;\n          </th>\n          <th>\n            Flight Details\n          </th>\n          <th>\n            Departs\n          </th>\n          <th>\n            Arrives\n          </th>\n          <th>\n            Duration\n          </th>\n          <th>\n            Ticket Price\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let flightdata of shoppingResponse.AirShoppingRS[0].ResponseOffer; let i = index\">\n          <td>\n              <input type=\"radio\" required value=\"{{i}}\" id=\"selectTrip\" name=\"selectTrip\">\n          </td>\n          <td>\n            <div>\n                {{flightdata.MarketingCarrierName}}\n            </div>\n            <div>\n                {{flightdata.OperatingCarrierCode}} {{flightdata.OperatingFlightNumber}}\n            </div>\n            <div>\n              {{flightdata.DeptAirportCode}} --> {{flightdata.ArrAirportCode}}\n            </div>\n          </td>\n          <td>\n              {{flightdata.DeptDate}} {{flightdata.DeptTime}}\n          </td>\n          <td>\n              {{flightdata.ArrDate}} {{flightdata.ArrTime}}\n          </td>\n          <td>\n              3 hours\n          </td>\n          <td>\n              {{flightdata.TotalFareAmount}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    \n    <div class=\"cb col-sm-12 col-md-12 col-lg-12 mT2\">\n        <button type=\"button\" class=\"btn btn-warning btn-sm fr\" routerLink=\"./payment\" >Continue</button>\n    </div>\n\n    <div class=\"cb col-sm-12 col-md-12 col-lg-12 mT2 p0 package\">\n        <div class=\"tc col-sm-12 col-md-12 col-lg-12 p0 mT6\">\n            <div class=\"tc fl col-sm-2 col-md-2 col-lg-2 p0\">\n              <img src=\"../../../assets/img/delta.jpg\" height=\"150px\" width=\"150px\">\n            </div>\n            <div class=\"tc fl col-sm-8 col-md-8 col-lg-8 p0\">\n              <strong>Summer vacation package</strong>\n              <div>\n                  <p> Room:\tPartner Package / 1 King Bed 1600 Collins Avenue, Miami Beach, FL 33139</p>\n              </div>\n              <div>\n                <strong>Flight details</strong>\n                <p>Outbound:\tDepart: 9:00 PM; Arrive: 12:10 AM (Nonstop)</p>\n                <p> Inbound:\tDepart: 6:00 AM; Arrive: 8:56 AM (Nonstop)</p>\n              </div>\n              <div class=\"tc\">\n                  <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"./payment\" >Book</button>\n              </div>\n            </div>\n            <div class=\"tc fl col-sm-2 col-md-2 col-lg-2 p0\">\n              <img src=\"../../../assets/img/hilton.jpg\"  height=\"150px\" width=\"150px\">\n            </div>\n            <div class=\"cb\">\n              \n            </div>\n        </div>\n    </div>\n\n    <div class=\"cb col-sm-12 col-md-12 col-lg-12 mT p0 package\">\n        <div class=\"tc col-sm-12 col-md-12 col-lg-12 p0 mT6\">\n            <div class=\"tc fl col-sm-2 col-md-2 col-lg-2 p0\">\n              <img src=\"../../../assets/img/jetblue.jpg\" height=\"150px\" width=\"150px\">\n            </div>\n            <div class=\"tc fl col-sm-8 col-md-8 col-lg-8 p0\">\n              <strong>Summer vacation package</strong>\n              <div>\n                  <p> Room:\tPartner Package / 1 King Bed 1600 Collins Avenue, Miami Beach, FL 33139</p>\n              </div>\n              <div>\n                <strong>Flight details</strong>\n                <p>Outbound:\tDepart: 9:00 PM; Arrive: 12:10 AM (Nonstop)</p>\n                <p> Inbound:\tDepart: 6:00 AM; Arrive: 8:56 AM (Nonstop)</p>\n              </div>\n              <div class=\"tc\">\n                  <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"./payment\" >Book</button>\n              </div>\n            </div>\n            <div class=\"tc fl col-sm-2 col-md-2 col-lg-2 p0\">\n              <img src=\"../../../assets/img/hyatt.jpg\"  height=\"150px\" width=\"150px\">\n            </div>\n            <div class=\"cb\">\n              \n            </div>\n        </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/main/booker/booker.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/booker/booker.component.ts ***!
  \*************************************************/
/*! exports provided: BookerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookerComponent", function() { return BookerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service.service */ "./src/app/service.service.ts");





var BookerComponent = /** @class */ (function () {
    function BookerComponent(httpService, fb, router) {
        this.httpService = httpService;
        this.fb = fb;
        this.router = router;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        //travelers=["Angelo","Jesse"];
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
        this.searchModel = { "selectedTravelers": "", "tripType": "", "origin": "", "destination": "", "depart": "", "return": "", "adultsCount": "", "childCount": "", "cabinType": "" };
    }
    /*submitData(userName,passWord){
      const data = {
        username: userName,
        password: passWord
      }
      console.log(data)
    }*/
    BookerComponent.prototype.searchFlights = function (searchForm) {
        var _this = this;
        this.httpService.getData("./assets/shopping.JSON").subscribe(function (shoppingResponse) { return _this.shoppingResponse = shoppingResponse; });
    };
    BookerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData("./assets/profileData.JSON").subscribe(function (profileData) { return _this.profileData = profileData; });
        //console.log("json from intenal file "+ JSON.stringify(localData) )
        this.dropdownList = [
            { item_id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' }
        ];
        this.selectedItems = [
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    BookerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booker',
            template: __webpack_require__(/*! ./booker.component.html */ "./src/app/main/booker/booker.component.html"),
            styles: [__webpack_require__(/*! ./booker.component.css */ "./src/app/main/booker/booker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_4__["Service"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookerComponent);
    return BookerComponent;
}());



/***/ }),

/***/ "./src/app/main/booking/booking.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/booking/booking.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.padT{\r\n    margin-top:10px;\r\n}\r\n.bgC{\r\n    background-color: #f1f1f1;\r\n    margin-top:10px;\r\n}\r\n.bgL{\r\n    background-color: #1f5084;\r\n    border-radius: 3px;\r\n}\r\n.selectText{\r\n    position: absolute;\r\n    text-align: center;\r\n    padding: 1%;\r\n    width: 50px;\r\n    background-color:#1f5084;\r\n    border-radius: 3px;\r\n    color:#fff;\r\n}\r\n.selectBox{\r\n    background: white;\r\n    border-radius: 5px;\r\n    padding: 1%;\r\n    color:#000;\r\n    padding-left: 50px;\r\n}\r\n.mT2{\r\n    margin-top:2%;\r\n}\r\n.cb{\r\n    clear: both;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ib29raW5nL2Jvb2tpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wYWRUe1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi5iZ0N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi5iZ0x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY1MDg0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5zZWxlY3RUZXh0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFmNTA4NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLnNlbGVjdEJveHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcbi5tVDJ7XHJcbiAgICBtYXJnaW4tdG9wOjIlO1xyXG59XHJcbi5jYntcclxuICAgIGNsZWFyOiBib3RoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main/booking/booking.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/booking/booking.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  booking works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/booking/booking.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/booking/booking.component.ts ***!
  \***************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/main/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/main/booking/booking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-align{\r\n    width: 100%;\r\n    background-color: #eeeeee;\r\n    /*border: 1px solid grey;*/\r\n}\r\n@media (min-width: 1200px){\r\n.col-xl-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n}\r\n}\r\n.clear{\r\n    background-color:#fff;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.umnrTripDetails{\r\n    display: block;\r\n}\r\n.popup-win {\r\n    position: fixed;\r\n    min-width: 300px;\r\n    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);\r\n}\r\n.popup-content {\r\n    opacity: 1;\r\n    padding: 15px;\r\n    background-color: #fff;\r\n}\r\n.popup-overlay {\r\n    /*justify-content: center;*/\r\n    /*align-items: center;*/\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    -webkit-tap-highlight-color: transparent;\r\n    transition: opacity .4s cubic-bezier(.25,.8,.25,1);\r\n    opacity: 0.5;\r\n    background: rgba(0,0,0,.6);\r\n}\r\n.blur-in {\r\n    -webkit-animation: blur 2s forwards;\r\n    animation: blur 2s forwards;\r\n}\r\n.blur-out {\r\n    -webkit-animation: blur-out 2s forwards;\r\n    animation: blur-out 2s forwards;\r\n}\r\n.popup-title-bar {\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    color: #fff;\r\n    background-color: #07a5e7;\r\n}\r\n.dropdown{\r\n    display:inline-block;\r\n}\r\n.imageSection{\r\n    padding-top:1rem;\r\n}\r\n.tripType{\r\n    //margin-left: 42rem;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-left: 10px solid rgb(218, 200, 43); /* yellow */\r\n}\r\n.ng-invalid:not(form)  {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-left: 10px solid #e94646; /* red */\r\n}\r\n.backdrop {\r\n    background-color:rgba(0,0,0,0.6);\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n.modal{\r\n    z-index: auto !important;\r\n}\r\n.example-full-width{\r\n    border-left:none !important;\r\n}\r\n.btn-primary{\r\n    background-color: #582c4f;\r\n}\r\n.ancillaryLabel{\r\n    color:#582c4f;\r\n}\r\n.popupTravellers{\r\n    margin-left: 70px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5QjtBQUNBO0FBQ0E7SUFFSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEdBQTRHO0FBQ2hIO0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxrREFBa0Q7SUFDbEQsWUFBWTtJQUNaLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksbUNBQW1DO0lBR25DLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksdUNBQXVDO0lBR3ZDLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUdBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUNBQXlDLEVBQUUsV0FBVztBQUMxRDtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCLEVBQUUsUUFBUTtBQUM3QztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYWxpZ257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIGdyZXk7Ki9cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuLmNvbC14bC02IHtcclxuICAgIC1tcy1mbGV4OiAwIDAgNTAlO1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbn1cclxuLmNsZWFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnVtbnJUcmlwRGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucG9wdXAtd2luIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLCAwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5wb3B1cC1jb250ZW50IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnBvcHVwLW92ZXJsYXkge1xyXG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xyXG4gICAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC42KTtcclxufVxyXG5cclxuLmJsdXItaW4ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsdXIgMnMgZm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmx1ciAycyBmb3J3YXJkcztcclxuICAgIC1vLWFuaW1hdGlvbjogYmx1ciAycyBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbjogYmx1ciAycyBmb3J3YXJkcztcclxufVxyXG5cclxuLmJsdXItb3V0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibHVyLW91dCAycyBmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uOiBibHVyLW91dCAycyBmb3J3YXJkcztcclxuICAgIC1vLWFuaW1hdGlvbjogYmx1ci1vdXQgMnMgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGJsdXItb3V0IDJzIGZvcndhcmRzO1xyXG59XHJcblxyXG4ucG9wdXAtdGl0bGUtYmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2E1ZTc7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd257XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmltYWdlU2VjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOjFyZW07XHJcbn1cclxuXHJcbi50cmlwVHlwZXtcclxuICAgIC8vbWFyZ2luLWxlZnQ6IDQycmVtO1xyXG59XHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDIxOCwgMjAwLCA0Myk7IC8qIHllbGxvdyAqL1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNlOTQ2NDY7IC8qIHJlZCAqL1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxufVxyXG4ubW9kYWx7XHJcbiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIGJvcmRlci1sZWZ0Om5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4MmM0ZjtcclxufVxyXG4uYW5jaWxsYXJ5TGFiZWx7XHJcbiAgICBjb2xvcjojNTgyYzRmO1xyXG59XHJcblxyXG4ucG9wdXBUcmF2ZWxsZXJze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h2 class=\"dashboard-page-title\">Upcoming Trips</h2>\r\n            <div class=\"row upcomingTripRow\"  *ngFor=\"let trip of upComingTripResponseData; let i = index\">\r\n                <div class=\"row row-align\">\r\n                <div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2\">\r\n                   \r\n                  <div><strong>{{trip.originCity}} to {{trip.destinationCity}}</strong></div>\r\n                  <div>Reservation Code: {{trip.pnrNbr}}</div>\r\n                  <div>Departs: {{trip.dateRange}}</div>\r\n                  <div *ngFor=\"let pax of trip.travellers\">Travellers: {{pax.firstName}} {{pax.lastName}}</div></div>\r\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 imageSection\">\r\n            <img [attr.alt]=\"(trip.airlineBooked)\" [src]=\"(trip.airlineLogo)\" class=\"img-fluid secondNavImage px-2\">\r\n                  <input class=\"btn btn-warning btn-sm mr-2\" type=\"submit\" name=\"submit\" value=\"Open Itinerary\" [routerLink]=\"['/main/itineraryDetails', trip]\">\r\n                  <input class=\"btn btn-primary btn-sm mr-2\"  routerLink=\"/main/tracker\" type=\"submit\" name=\"tracker\" value=\"Track your flight\">\r\n\t\t\t\t  </div>\r\n                 \r\n                </div>\r\n\t\t\t\t        <p class=\"clear\"></p>\r\n              </div>\r\n             <div class=\"row\">\r\n\t\t\t <h2 class=\"dashboard-page-title\">Recent Trips</h2>\r\n\t\t\t <div class=\"dropdown tripType\">Show\r\n                      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (change)=\"selectDetailsBasedOnTripType($event.target.value)\">\r\n                          UMNR trips\r\n                      </button>\r\n                      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item selected\" href=\"#\">UMNR trips</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Others</a>\r\n                      </div>\r\n                    </div>\r\n\t\t\t </div>\r\n\t\t\t <div  class=\"row recentTripRow\"  *ngFor=\"let recentTrip of recentTripDetails; let i = index\">\r\n                <div *ngIf=\"recentTrip?.isUmnrOnly\" class=\"row row-align hidden\">\r\n                <div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2\">\r\n                 \r\n                  <div><strong>{{recentTrip.originCity}} to {{recentTrip.destinationCity}}</strong></div>\r\n                  <div>Reservation Code: {{recentTrip.pnrNbr}}</div>\r\n                  <div>Departs: {{recentTrip.dateRange}}</div>\r\n                  <div *ngFor=\"let pax of recentTrip.travellers\">Travellers: {{pax.firstName}} {{pax.lastName}}</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2\">\r\n            <img [attr.alt]=\"(recentTrip.airlineBooked)\" [src]=\"(recentTrip.airlineLogo)\" class=\"img-fluid secondNavImage\">\r\n\t\t\t\t          <img  [attr.alt]=\"(recentTrip.umnrChildExpBaralt)\" [src]=\"(recentTrip.umnrChildExpBar)\" class=\"img-fluid secondNavImage px-2\">\r\n                  <!--<img  [attr.alt]=\"(recentTrip.publicRatingUrl)\" [src]=\"(recentTrip.publicRatingUrl)\" class=\"img-fluid secondNavImage px-2\">-->\r\n                  <input class=\"btn btn-warning btn-sm\"   type=\"submit\" name=\"submit\" value=\"Repeat this trip\" (click)=\"openModalDialog()\">\r\n\t\t\t\t  </div>\r\n              <div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2\">\r\n                  <mat-form-field>\r\n                    <mat-label class=\"ancillaryLabel\">Ancillaries purchased</mat-label>\r\n                    <mat-select  multiple id=\"ancillariesArray\" name=\"ancillariesArray\" >\r\n                      <mat-option value=\"priority boarding\">priority boarding</mat-option>\r\n                      <mat-option value=\"exit row seat\">Exit Row Seat</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n              </div>   \r\n                </div>\r\n\t\t\t\t        <p class=\"clear\"></p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n <!--pop up on click of repeat trip-->\r\n <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\r\n \r\n <!-- modal -->\r\n <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display}\">\r\n   <!-- modal-dialog -->\r\n   <div class=\"modal-dialog\" role=\"document\">\r\n     <!-- modal-content -->\r\n     <div class=\"modal-content\">\r\n       <div class=\"modal-body\">\r\n         <div class=\"row\">\r\n          <div class=\"col-sm-4 col-md-4 col-lg-4 fl col-xs-12\"> \r\n            <span>Departing</span>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input required [(ngModel)]=\"searchModel.depart\" id=\"depart\" name=\"depart\" matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker1></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2 mr-2 popupTravellers\">\r\n              <mat-form-field>\r\n               <span>Travellers</span>\r\n               <mat-select  multiple id=\"travelers\" name=\"travelers\" [(ngModel)]=\"searchModel.selectedTravelers\">\r\n                  <mat-option *ngFor=\"let traveler of travelers\" [value]=\"traveler\">{{traveler.firstName}} {{traveler.lastName}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </div>   \r\n        </div>\r\n          <div class=\"col-sm-4 col-md-4 col-lg-4 fl col-xs-12\">\r\n            <span>Returning</span>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input required matInput [(ngModel)]=\"searchModel.return\" id=\"return\" name=\"return\" [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2></mat-datepicker>\r\n            </mat-form-field>\r\n          </div> \r\n             <div>\r\n                 <input type=\"submit\" class=\"btn btn-warning btn-sm\" value=\"Book now\" routerLink=\"/main/payment\">\r\n             </div>\r\n       </div>\r\n \r\n       <!-- modal-footer -->\r\n       <div class=\"modal-footer\">\r\n         <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModalDialog()\" >Close</button>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dialog) {
        this.dialog = dialog;
        this.display = 'none';
        this.modals = [];
        this.show = false;
        this.travelers = [];
        this.searchModel = { "selectedTravelers": "", "tripType": "", "origin": "", "destination": "", "depart": "", "return": "", "adultsCount": "", "childCount": "", "cabinType": "" };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.date = new Date();
        this.logedInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('youremail@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[^ @]*@[^ @]*')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('YourPassword', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        var tripDetails = this.getDummyJson();
        if (tripDetails.upComingTrips || tripDetails.recentTrips) {
            this.upComingTripResponseData = tripDetails.upComingTrips;
            this.recentTripDetails = tripDetails.recentTrips;
            for (var _i = 0, _a = this.recentTripDetails; _i < _a.length; _i++) {
                var recentTrip = _a[_i];
                if (recentTrip.travellers) {
                    for (var _b = 0, _c = recentTrip.travellers; _b < _c.length; _b++) {
                        var travellers = _c[_b];
                        this.travelers.push(travellers);
                        if (this.travelers.length > 2) {
                            return this.travelers;
                        }
                    }
                }
            }
        }
    };
    DashboardComponent.prototype.openModalDialog = function () {
        this.display = 'block';
    };
    DashboardComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    DashboardComponent.prototype.getDummyJson = function () {
        var tripResponseData = {
            "errors": [],
            "upComingTrips": [
                {
                    "pnrNbr": "H8XKLW",
                    "destinationCity": "New York City,NY(JFK)",
                    "originCity": "Seattlle, Washington(SEA)",
                    "dateRange": "Mar 27, 2019",
                    "airlineBooked": "Delta",
                    "airlineLogo": "assets/img/deltaLogo.JPG",
                    "seatNumber": "32A",
                    "travellers": [{
                            "firstName": "John",
                            "lastName": "Smith"
                        }]
                },
                {
                    "pnrNbr": "LBS4RT",
                    "destinationCity": "Oahu- Honolulu,Hi(hnl)",
                    "originCity": "Hawai Island, HI(ITO)",
                    "dateRange": "April 27, 2019",
                    "airlineBooked": "Hawain",
                    "airlineLogo": "assets/img/hawainAirlinesLogo.JPG",
                    "seatNumber": "82B",
                    "travellers": [{
                            "firstName": "Jane",
                            "lastName": "David"
                        },
                        {
                            "firstName": "Jasmine",
                            "lastName": "David"
                        }
                    ]
                }
            ],
            "recentTrips": [
                {
                    "pnrNbr": "LBS4RT",
                    "destinationCity": "Oahu- Honolulu,Hi(hnl)",
                    "originCity": "Hawai Island, HI(ITO)",
                    "dateRange": "April 27, 2019",
                    "airlineBooked": "Hawain",
                    "airlineLogo": "assets/img/hawainAirlinesLogo.JPG",
                    "isUmnrOnly": "true",
                    "umnrChildExpBar": "assets/img/childExperience.JPG",
                    "umnrChildExpBaralt": "child experience bar",
                    "travellers": [{
                            "firstName": "Jane",
                            "lastName": "David"
                        },
                        {
                            "firstName": "Jasmine",
                            "lastName": "David"
                        }
                    ]
                },
                {
                    "pnrNbr": "H8XKLW",
                    "destinationCity": "New York City,NY(JFK)",
                    "originCity": "Seattlle, Washington(SEA)",
                    "dateRange": "Mar 27, 2019",
                    "airlineBooked": "Delta",
                    "airlineLogo": "assets/img/deltaLogo.JPG",
                    "umnrChildExpBar": "assets/img/childExperience.JPG",
                    "umnrChildExpBaralt": "child experience bar",
                    "isUmnrOnly": "false",
                    "travellers": [{
                            "firstName": "John",
                            "lastName": "Smith"
                        }]
                },
                {
                    "pnrNbr": "H8XKLW",
                    "destinationCity": "New York City,NY(JFK)",
                    "originCity": "Seattlle, Washington(SEA)",
                    "dateRange": "Mar 27, 2019",
                    "airlineBooked": "Delta",
                    "airlineLogo": "assets/img/deltaLogo.JPG",
                    "isUmnrOnly": "true",
                    "umnrChildExpBar": "assets/img/childExperience.JPG",
                    "umnrChildExpBaralt": "child experience bar",
                    "travellers": [{
                            "firstName": "John",
                            "lastName": "Smith"
                        }]
                }
            ]
        };
        return tripResponseData;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/main/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/in-flight-entertainment/in-flight-entertainment.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/main/in-flight-entertainment/in-flight-entertainment.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW4tZmxpZ2h0LWVudGVydGFpbm1lbnQvaW4tZmxpZ2h0LWVudGVydGFpbm1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/in-flight-entertainment/in-flight-entertainment.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main/in-flight-entertainment/in-flight-entertainment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  in-flight-entertainment works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/in-flight-entertainment/in-flight-entertainment.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/in-flight-entertainment/in-flight-entertainment.component.ts ***!
  \***********************************************************************************/
/*! exports provided: InFlightEntertainmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InFlightEntertainmentComponent", function() { return InFlightEntertainmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InFlightEntertainmentComponent = /** @class */ (function () {
    function InFlightEntertainmentComponent() {
    }
    InFlightEntertainmentComponent.prototype.ngOnInit = function () {
    };
    InFlightEntertainmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-in-flight-entertainment',
            template: __webpack_require__(/*! ./in-flight-entertainment.component.html */ "./src/app/main/in-flight-entertainment/in-flight-entertainment.component.html"),
            styles: [__webpack_require__(/*! ./in-flight-entertainment.component.css */ "./src/app/main/in-flight-entertainment/in-flight-entertainment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InFlightEntertainmentComponent);
    return InFlightEntertainmentComponent;
}());



/***/ }),

/***/ "./src/app/main/itinerary-details/itinerary-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/main/itinerary-details/itinerary-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaXRpbmVyYXJ5LWRldGFpbHMvaXRpbmVyYXJ5LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/itinerary-details/itinerary-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/itinerary-details/itinerary-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Itinerary Details</h2>\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>Origin</th>\r\n          <th>Destination</th>\r\n          <th>Travel Date</th>\r\n          <th>Seat Number</th>\r\n          <th>PNR#</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"success\">\r\n          <td>{{destinationCity}}</td>\r\n          <td>{{origin}}</td>\r\n          <td>{{travelDate}}</td>\r\n          <td>{{seatNumber}}</td>\r\n          <td>{{recordLocator}}</td>\r\n        </tr>      \r\n      </tbody>\r\n    </table>\r\n\r\n\r\n    <div  class=\"col-sm-12 col-md-12 mT2 col-lg-12\" *ngIf=\"shoppingResponse\" >\r\n      \r\n        <h2>Offers for your itinerary</h2>\r\n    <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n               \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let flightdata of shoppingResponse.AirShoppingRS[0].ResponseOffer; let i = index\">\r\n              \r\n                <td >\r\n\t\t\t\t\t        {{flightdata.Offers.CarrierLoyaltyOfferName}}\r\n                 </td> \r\n                 <td >\r\n                    {{flightdata.Offers.CarrierLoyaltyOfferTotalAmount}}\r\n                   </td>\r\n                 \r\n                   <div class=\"cb col-sm-12 col-md-12 col-lg-12 mT2\">\r\n                      <button type=\"button\" class=\"btn btn-warning btn-sm fr\" routerLink=\"/main/payment\">Add to cart and checkout</button>\r\n                  </div>\r\n                    <td >\r\n                      {{flightdata.Offers.ALacarteOfferItemID}}\r\n                     </td> \r\n                     <td >\r\n                        {{flightdata.Offers.ALacarteOfferTotalAmount}}\r\n                       </td>\r\n                       <div class=\"cb col-sm-12 col-md-12 col-lg-12 mT2\">\r\n                          <button type=\"button\" class=\"btn btn-warning btn-sm fr\">Add to cart and checkout</button>\r\n                      </div>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          \r\n       \r\n      </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/main/itinerary-details/itinerary-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/itinerary-details/itinerary-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ItineraryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryDetailsComponent", function() { return ItineraryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service.service */ "./src/app/service.service.ts");




var ItineraryDetailsComponent = /** @class */ (function () {
    function ItineraryDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    ItineraryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params);
            _this.destinationCity = params.destinationCity;
            _this.origin = params.originCity;
            _this.travelDate = params.dateRange;
            _this.seatNumber = params.seatNumber;
            _this.recordLocator = params.pnrNbr;
        });
        this.service.getData('./assets/shopping.json')
            .subscribe(function (shoppingResponse) {
            _this.shoppingResponse = shoppingResponse;
        }, function (error) {
        });
    };
    ItineraryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itinerary-details',
            template: __webpack_require__(/*! ./itinerary-details.component.html */ "./src/app/main/itinerary-details/itinerary-details.component.html"),
            styles: [__webpack_require__(/*! ./itinerary-details.component.css */ "./src/app/main/itinerary-details/itinerary-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], ItineraryDetailsComponent);
    return ItineraryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/landing/landing.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/landing/landing.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/landing/landing.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/landing/landing.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/landing/landing.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/landing/landing.component.ts ***!
  \***************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/main/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/main/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/main/tracker/tracker.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/main/reviews/reviews.component.ts");
/* harmony import */ var _in_flight_entertainment_in_flight_entertainment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./in-flight-entertainment/in-flight-entertainment.component */ "./src/app/main/in-flight-entertainment/in-flight-entertainment.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _booker_booker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booker/booker.component */ "./src/app/main/booker/booker.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/main/payment/payment.component.ts");
/* harmony import */ var _pnr_confirmation_pnr_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pnr-confirmation/pnr-confirmation.component */ "./src/app/main/pnr-confirmation/pnr-confirmation.component.ts");
/* harmony import */ var _itinerary_details_itinerary_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./itinerary-details/itinerary-details.component */ "./src/app/main/itinerary-details/itinerary-details.component.ts");











var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        children: [
            { path: '', component: _booker_booker_component__WEBPACK_IMPORTED_MODULE_6__["BookerComponent"] },
            { path: 'booking', component: _booker_booker_component__WEBPACK_IMPORTED_MODULE_6__["BookerComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
            { path: 'tracker', component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_2__["TrackerComponent"] },
            { path: 'review', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_3__["ReviewsComponent"] },
            { path: 'IFE', component: _in_flight_entertainment_in_flight_entertainment_component__WEBPACK_IMPORTED_MODULE_4__["InFlightEntertainmentComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
            { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"] },
            { path: 'pnrconfirm', component: _pnr_confirmation_pnr_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["PnrConfirmationComponent"] },
            { path: 'itineraryDetails', component: _itinerary_details_itinerary_details_component__WEBPACK_IMPORTED_MODULE_10__["ItineraryDetailsComponent"] }
        ]
    }
];
var MainRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navC{\r\n    background: #1f5084;\r\n    padding: 0.5% 0 0.5% 4%;\r\n    width:80%;\r\n    position: fixed;\r\n    z-index: 999;\r\n}\r\n.navC a{\r\n    color: #fff;   \r\n    padding:0 1%;\r\n}\r\n.profileLink{\r\n    position: absolute;\r\n    right: 0;\r\n    top: 3px;\r\n    width: 130px;\r\n}\r\n.navC a{\r\n    color: #fff;   \r\n    padding: 1% 1%;\r\n    display: inline-block;\r\n}\r\n.navC a[active=\"active\"]{\r\n    background-color: #ffc107;\r\n}\r\n/*.navC a:last-child{\r\n    float: right;\r\n}\r\n.navC a:last-child img{\r\n    margin-top:-4px;\r\n}*/\r\n.selectedContent{\r\n  padding: 2% 4% 1% 4%;\r\n  margin-top:4%; \r\n}\r\n.mainContainer{\r\n    background:url('mainImg.jpg') 60% 80%;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.mainContainer>div{\r\n    background:#fff;\r\n    overflow:scroll;\r\n    height: 90%;\r\n    width: 80%;\r\n    margin:2.5% auto;\r\n}\r\n.tc{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTs7Ozs7RUFLRTtBQUNGO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjtBQUNBO0lBQ0kscUNBQW9EO0lBQ3BELFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZDe1xyXG4gICAgYmFja2dyb3VuZDogIzFmNTA4NDtcclxuICAgIHBhZGRpbmc6IDAuNSUgMCAwLjUlIDQlO1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcbi5uYXZDIGF7XHJcbiAgICBjb2xvcjogI2ZmZjsgICBcclxuICAgIHBhZGRpbmc6MCAxJTtcclxufVxyXG4ucHJvZmlsZUxpbmt7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcbi5uYXZDIGF7XHJcbiAgICBjb2xvcjogI2ZmZjsgICBcclxuICAgIHBhZGRpbmc6IDElIDElO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5uYXZDIGFbYWN0aXZlPVwiYWN0aXZlXCJde1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxufVxyXG4vKi5uYXZDIGE6bGFzdC1jaGlsZHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ubmF2QyBhOmxhc3QtY2hpbGQgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDotNHB4O1xyXG59Ki9cclxuLnNlbGVjdGVkQ29udGVudHtcclxuICBwYWRkaW5nOiAyJSA0JSAxJSA0JTtcclxuICBtYXJnaW4tdG9wOjQlOyBcclxufVxyXG4ubWFpbkNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWcvbWFpbkltZy5qcGcpIDYwJSA4MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1haW5Db250YWluZXI+ZGl2e1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOjIuNSUgYXV0bztcclxufVxyXG4udGN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer\">\n<!--<div> class=\"col-sm-12 col-md-12 col-lg-12\"\n        <div>\n          <img></img>\n        </div>\n    </div>-->\n\n    <div>\n        <div class=\"navC\">\n          <nav>\n            <a routerLink=\"./booking\" routerLinkActive=\"active\">Booker</a>|\n            <a routerLink=\"./dashboard\" routerLinkActive=\"active\">Dashboard</a>|\n            <a routerLink=\"./tracker\" routerLinkActive=\"active\">Tracker</a>|\n            <a routerLink=\"./review\" routerLinkActive=\"active\">Review</a>|\n            <a routerLink=\"./IFE\" routerLinkActive=\"active\">IFE</a>\n            \n\n           <!-- <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"bottom\"\n        ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n  Popover on bottom\n</button>-->\n          </nav>\n          <div class=\"profileLink\" *ngIf=\"profileData\">\n            <a routerLink=\"./profile\" routerLinkActive=\"active\" class=\"tc\">\n              <img height=\"24px\" width=\"24px\" src=\"../../assets/img/profile.png\"/><br>\n              <span>{{profileData.Name}}, {{profileData.Surname}}</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"selectedContent\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(httpService) {
        this.httpService = httpService;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        //$('[data-toggle="popover"]').popover(); 
        this.httpService.getData("./assets/profileData.JSON").subscribe(function (profileData) { return _this.profileData = profileData; });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _booker_booker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booker/booker.component */ "./src/app/main/booker/booker.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/main/booking/booking.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/main/landing/landing.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/main/tracker/tracker.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/main/reviews/reviews.component.ts");
/* harmony import */ var _in_flight_entertainment_in_flight_entertainment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./in-flight-entertainment/in-flight-entertainment.component */ "./src/app/main/in-flight-entertainment/in-flight-entertainment.component.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/main/payment/payment.component.ts");
/* harmony import */ var _pnr_confirmation_pnr_confirmation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pnr-confirmation/pnr-confirmation.component */ "./src/app/main/pnr-confirmation/pnr-confirmation.component.ts");
/* harmony import */ var _itinerary_details_itinerary_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./itinerary-details/itinerary-details.component */ "./src/app/main/itinerary-details/itinerary-details.component.ts");



















var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _booker_booker_component__WEBPACK_IMPORTED_MODULE_6__["BookerComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_8__["BookingComponent"],
                _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_11__["TrackerComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__["ReviewsComponent"],
                _in_flight_entertainment_in_flight_entertainment_component__WEBPACK_IMPORTED_MODULE_13__["InFlightEntertainmentComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                _main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__["PaymentComponent"],
                _pnr_confirmation_pnr_confirmation_component__WEBPACK_IMPORTED_MODULE_17__["PnrConfirmationComponent"],
                _itinerary_details_itinerary_details_component__WEBPACK_IMPORTED_MODULE_18__["ItineraryDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_14__["MainRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/payment/payment.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/payment/payment.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payForm label{\r\n    padding-left: 0;\r\n}\r\n.payForm input{\r\n    border-radius: 5px;\r\n    box-shadow: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n}\r\n.pB1{\r\n    padding-bottom: 2%;\r\n}\r\n.tc{\r\n    text-align: center\r\n}\r\n.mL2{\r\n    margin-left: 2%;\r\n}\r\n.dib{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXlGb3JtIGxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5wYXlGb3JtIGlucHV0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnBCMXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG4udGN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4ubUwye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbi5kaWJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/payment/payment.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/payment/payment.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"showPaymentPage\" class=\"payForm mT2\" (ngSubmit)=\"payment(payForm)\" #payForm=\"ngForm\">\n  <div class=\"pB1 col-sm-12 col-md-12 col-lg-12\">\n      <label class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12\">Name on Card</label>\n      <input  class=\"col-sm-4 col-xs-12 col-md-4 col-lg-4\" type=\"text\" required placeholder=\"username\" id=\"name\" name=\"name\" [(ngModel)]=\"paymentObj.name\">\n  </div> \n  <div class=\"pB1 col-sm-12 col-md-12 col-lg-12\">\n      <label class=\"col-sm-12 col-md-12 col-lg-12\">Card Number</label>\n      <input class=\"col-sm-4 col-xs-12 col-md-4 col-lg-4\" type=\"text\" id=\"number\" name=\"number\" [(ngModel)]=\"paymentObj.number\" required >\n  </div>  \n  <div class=\"pB1 col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"pB1\">\n        <label class=\"col-sm-12 col-md-12 col-lg-12\">CVC</label>\n        <input class=\"col-sm-4 col-xs-12 col-md-4 col-lg-4\" type=\"password\" id=\"cvc\" name=\"cvs\" [(ngModel)]=\"paymentObj.cvs\" required >\n    </div>\n    <div>\n        <label class=\"col-sm-12 col-md-12 col-lg-12\">Expiration</label>\n        <input class=\"col-sm-2 col-md-2 col-lg-2\" type=\"text\" id=\"expDateMon\" name=\"expDateMon\" [(ngModel)]=\"paymentObj.expDateMon\"  required>\n        <input  class=\"col-sm-2 col-md-2 col-lg-2\" type=\"text\" id=\"expDateYear\" name=\"expDateYear\" [(ngModel)]=\"paymentObj.expDateYear\" required>\n    </div>\n  </div>\n  <div class=\"tc col-sm-4 col-xs-12 col-md-4 col-lg-4\">\n    <input type=\"button\" class=\"btn btn-sm btn-warning btn-sm\" value=\"Back\"/>\n    <input type=\"button\" class=\"btn dib mL2 btn-sm btn-warning btn-sm\" value=\"Pay\"  (click)=\"payment()\" />\n  </div>\n</form>\n<div *ngIf=\"showPnrPage\" class=\"tc col-sm-12 col-md-12 col-lg-12\">\n  <p>Your payment successful.</p>\n  <p>Your ticket pnr is 132133 and ticket has been mailed to your mail ID.</p>\n</div>"

/***/ }),

/***/ "./src/app/main/payment/payment.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/payment/payment.component.ts ***!
  \***************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
        this.showPaymentPage = true;
        this.showPnrPage = false;
        this.paymentObj = { "name": "Jesse", "number": "2432143244", "cvs": "123", "expDateMon": "12", "expDateYear": "2021" };
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.payment = function () {
        this.showPaymentPage = false;
        this.showPnrPage = true;
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/main/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/main/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/main/pnr-confirmation/pnr-confirmation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/main/pnr-confirmation/pnr-confirmation.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcG5yLWNvbmZpcm1hdGlvbi9wbnItY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/pnr-confirmation/pnr-confirmation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/pnr-confirmation/pnr-confirmation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pnr-confirmation works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/pnr-confirmation/pnr-confirmation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/pnr-confirmation/pnr-confirmation.component.ts ***!
  \*********************************************************************/
/*! exports provided: PnrConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PnrConfirmationComponent", function() { return PnrConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PnrConfirmationComponent = /** @class */ (function () {
    function PnrConfirmationComponent() {
        this.hidePaymentPage = true;
    }
    PnrConfirmationComponent.prototype.ngOnInit = function () {
        this.hidePaymentPage = true;
    };
    PnrConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pnr-confirmation',
            template: __webpack_require__(/*! ./pnr-confirmation.component.html */ "./src/app/main/pnr-confirmation/pnr-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./pnr-confirmation.component.css */ "./src/app/main/pnr-confirmation/pnr-confirmation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PnrConfirmationComponent);
    return PnrConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/main/reviews/reviews.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/reviews/reviews.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".review ul li{\r\n    list-style:none;\r\n}\r\n.review ul{\r\n    padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3IHVsIGxpe1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG59XHJcbi5yZXZpZXcgdWx7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/reviews/reviews.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/reviews/reviews.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"review\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul>\n      <li>\n        <h4>Jesse</h4>\n        <p>✅ Trip Verified | I booked my flight from Coimbatore to Mumbai on 14th of April 2019. Some Airways rescheduled the flight by 20 hours. Again rescheduled for 22 00 hours. Couple of days back I got a notification that my flight is been canceled. It's really unfair part from Some Airways. For your internal issue you cancelled flight. But what about the customer? Very unfair and not at all satisfied with the service provided by Some Airways.\n          </p>\n      </li>\n      <li>\n        <h4>Rakesh</h4>\n        <p>✅ Trip Verified | I booked my flight from Coimbatore to Mumbai on 14th of April 2019. Some Airways rescheduled the flight by 20 hours. Again rescheduled for 22 00 hours. Couple of days back I got a notification that my flight is been canceled. It's really unfair part from Some Airways. For your internal issue you cancelled flight. But what about the customer? Very unfair and not at all satisfied with the service provided by Some Airways.\n          </p>\n      </li>\n      <li>\n          <h4>philip</h4>\n          <p>✅ Trip Verified | I booked my flight from Coimbatore to Mumbai on 14th of April 2019. Some Airways rescheduled the flight by 20 hours. Again rescheduled for 22 00 hours. Couple of days back I got a notification that my flight is been canceled. It's really unfair part from Some Airways. For your internal issue you cancelled flight. But what about the customer? Very unfair and not at all satisfied with the service provided by Some Airways.\n            </p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"submitReviewSec col-sm-12 col-md-12 col-lg-12\">\n    <form>\n      <div>\n        <label>Mail ID</label>\n        <input  type=\"text\" required >\n      </div>\n      <div>\n        <label>Enter Message</label>\n        <textarea></textarea>\n      </div>\n      <div>\n          <button type=\"submit\"  class=\"btn btn-warning btn-sm\">Submit</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/reviews/reviews.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/reviews/reviews.component.ts ***!
  \***************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/main/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/main/reviews/reviews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/main/tracker/tracker.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/tracker/tracker.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#googleMap {\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: -200px;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 0;\r\n }\r\n #container {\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n .mainContainer {\r\n  background-color:#1f1f1f;\r\n  z-index:1002!important;\r\n  position:fixed;\r\n  right: 56px;\r\n  bottom : 20px;\r\n  opacity: .8\r\n}\r\n .rightColumn {\r\n  font-size:15px;\r\n  color:#fff;\r\n  vertical-align:bottom;\r\n  width:170px;\r\n  min-width:65px\r\n}\r\n .flightTrackerImg{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n .tracketFlightDetails{\r\nbackground: #D3D3D3;\r\nwidth: 31rem;\r\nheight: 5rem;\r\nmargin-left: 20rem;\r\n}\r\n .flightReplayContainer{\r\n  display: none !important;\r\n}\r\n div#replayControl {\r\n  display: none !important;\r\n  visibility: hidden;\r\n  background-color:#1f1f1f;\r\n}\r\n .progress{\r\n  position: relative;\r\n  margin: 4px;\r\n  float:left;\r\n  text-align: center;\r\n}\r\n .barOverflow{ /* Wraps the rotating .bar */\r\n  position: relative;\r\n  overflow: hidden; /* Comment this line to understand the trick */\r\n  width: 90px; height: 45px; /* Half circle (overflow) */\r\n  margin-bottom: -14px; /* bring the numbers up */\r\n}\r\n .bar{\r\n  position: absolute;\r\n  top: 0; left: 0;\r\n  width: 90px; height: 90px; /* full circle! */\r\n  border-radius: 50%;\r\n  box-sizing: border-box;\r\n  border: 5px solid #eee;     /* half gray, */\r\n  border-bottom-color: #0bf;  /* half azure */\r\n  border-right-color: #0bf;\r\n}\r\n .datapanelfromto {\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  font-size: 3.28571em;\r\n  display: flex;\r\n  margin-top: 15px;\r\n  line-height: 1em;\r\n}\r\n .doneBg{\r\n  background-color:#228B22;\r\n  height: 3rem;\r\n  width: 9rem;\r\n}\r\n .kidsStatusDiv{\r\n  height: 20rem;\r\n}\r\n .progressBg{\r\n  background-color:#FFA500;\r\n  height: 3rem;\r\n  width: 9rem;\r\n}\r\n .blankBg{\r\n  border: 1px dotted #1f1f1f;\r\n  height: 3rem;\r\n  width: 9rem;\r\n}\r\n .trackerItinDetails{\r\n  background-color:none !important;\r\n}\r\n .flightIcin{\r\n  width:3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90cmFja2VyL3RyYWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7Q0FDYjtDQUNBO0VBQ0MsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtDQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYjtBQUNGO0NBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1g7QUFDRjtDQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtDQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCO0NBRUE7RUFDRSx3QkFBd0I7QUFDMUI7Q0FFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0NBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7Q0FDQSxjQUFjLDRCQUE0QjtFQUN4QyxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUUsOENBQThDO0VBQ2hFLFdBQVcsRUFBRSxZQUFZLEVBQUUsMkJBQTJCO0VBQ3RELG9CQUFvQixFQUFFLHlCQUF5QjtBQUNqRDtDQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU0sRUFBRSxPQUFPO0VBQ2YsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUI7RUFDNUMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0IsTUFBTSxlQUFlO0VBQzNDLHlCQUF5QixHQUFHLGVBQWU7RUFDM0Msd0JBQXdCO0FBQzFCO0NBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtDQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7Q0FDQTtFQUNFLGFBQWE7QUFDZjtDQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7Q0FFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osV0FBVztBQUNiO0NBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7Q0FDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21haW4vdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ29vZ2xlTWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogLTIwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxuIH1cclxuICNjb250YWluZXIge1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1haW5Db250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFmMWYxZjtcclxuICB6LWluZGV4OjEwMDIhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHJpZ2h0OiA1NnB4O1xyXG4gIGJvdHRvbSA6IDIwcHg7XHJcbiAgb3BhY2l0eTogLjhcclxufVxyXG4ucmlnaHRDb2x1bW4ge1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgdmVydGljYWwtYWxpZ246Ym90dG9tO1xyXG4gIHdpZHRoOjE3MHB4O1xyXG4gIG1pbi13aWR0aDo2NXB4XHJcbn1cclxuLmZsaWdodFRyYWNrZXJJbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLnRyYWNrZXRGbGlnaHREZXRhaWxze1xyXG5iYWNrZ3JvdW5kOiAjRDNEM0QzO1xyXG53aWR0aDogMzFyZW07XHJcbmhlaWdodDogNXJlbTtcclxubWFyZ2luLWxlZnQ6IDIwcmVtO1xyXG59XHJcblxyXG4uZmxpZ2h0UmVwbGF5Q29udGFpbmVye1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2I3JlcGxheUNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWYxZjFmO1xyXG59XHJcbi5wcm9ncmVzc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJhck92ZXJmbG93eyAvKiBXcmFwcyB0aGUgcm90YXRpbmcgLmJhciAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBDb21tZW50IHRoaXMgbGluZSB0byB1bmRlcnN0YW5kIHRoZSB0cmljayAqL1xyXG4gIHdpZHRoOiA5MHB4OyBoZWlnaHQ6IDQ1cHg7IC8qIEhhbGYgY2lyY2xlIChvdmVyZmxvdykgKi9cclxuICBtYXJnaW4tYm90dG9tOiAtMTRweDsgLyogYnJpbmcgdGhlIG51bWJlcnMgdXAgKi9cclxufVxyXG4uYmFye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7IGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDkwcHg7IGhlaWdodDogOTBweDsgLyogZnVsbCBjaXJjbGUhICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2VlZTsgICAgIC8qIGhhbGYgZ3JheSwgKi9cclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMGJmOyAgLyogaGFsZiBhenVyZSAqL1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzBiZjtcclxufVxyXG5cclxuLmRhdGFwYW5lbGZyb210byB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMy4yODU3MWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG4uZG9uZUJne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzIyOEIyMjtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDlyZW07XHJcbn1cclxuLmtpZHNTdGF0dXNEaXZ7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxufVxyXG4ucHJvZ3Jlc3NCZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkE1MDA7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiA5cmVtO1xyXG59XHJcblxyXG4uYmxhbmtCZ3tcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgIzFmMWYxZjtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDlyZW07XHJcbn1cclxuLnRyYWNrZXJJdGluRGV0YWlsc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uZmxpZ2h0SWNpbntcclxuICB3aWR0aDozcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main/tracker/tracker.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/tracker/tracker.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h2 class=\"tracker-page-title\">Track your Kids journey</h2>\r\n                \r\n              \r\n              </div>\r\n          </div>\r\n\t\t  <div class=\"row\">\r\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2\">\r\n               \r\n                <img src=\"assets/img/map.jpg\" >\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2\">\r\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"row row-align trackerItinDetails\">\r\n\t\t\t\t\t<div  class=\"\">\r\n\t\t\t\t\t<div><strong>Seattlle, Washington(SEA) to New York City,NY(JFK)</strong></div>\r\n\t\t\t\t\t<div>Reservation Code: H8XKLW</div><div>Departs: Mar 27, 2019</div><div>Travellers: John Smith</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<div  class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 imageSection\">\r\n\t\t\t\t\t<a id=\"notoficationBellIcon\" href=\"javascript:void(0);\">\r\n\t\t\t\t\tSend Alerts: <img src=\"assets/img/notificationIcon.JPG\" >\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div  class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 imageSection\">\r\n\t\t\t\t\t<a id=\"notoficationBellIcon\" href=\"javascript:void(0);\">\r\n\t\t\t\t\tKids Mood : <img src=\"assets/img/notificationIcon.JPG\" >\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t     <div class=\"row kidsStatusDiv\">\r\n    \r\n                <div class=\"progress doneBg\">\r\n                        <div class=\"barOverflow\">\r\n                          <div class=\"\"><span>Checked In</span></div>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      \r\n                      <div class=\"progress doneBg\">\r\n                        <div class=\"barOverflow\">\r\n                          <div class=\"\"><span>Security Checked</span></div>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      \r\n                      <div class=\"progress doneBg\">\r\n                        <div class=\"barOverflow\">\r\n                          <div class=\"\"><span>Arrived At Gate</span></div>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      \r\n                      <div class=\"progress doneBg\">\r\n                        <div class=\"barOverflow\">\r\n                          <div class=\"\"> <span>En-Route to JFK</span></div>\r\n                        </div>\r\n                       \r\n                      </div>\r\n\r\n                      <div class=\"progress blankBg\">\r\n                            <div class=\"barOverflow\">\r\n                              <div class=\"\"><img class=\"flightIcin\" src=\"assets/img/flight-icon-circle.svg\"></div>\r\n                            </div>\r\n                            <span></span>\r\n                          </div>\r\n                          <div class=\"progress progressBg\">\r\n                                <div class=\"barOverflow\">\r\n                                  <div class=\"\"><span>Landed</span></div>\r\n                                </div>\r\n                                \r\n                              </div>\r\n                              <div class=\"progress progressBg\">\r\n                                    <div class=\"barOverflow\">\r\n                                      <div class=\"\"><span>Arrived and Ready for pick up</span></div>\r\n                                    </div>\r\n                                    \r\n                                  </div>\r\n        </div>\r\n\t\t  </div>\r\n    "

/***/ }),

/***/ "./src/app/main/tracker/tracker.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/tracker/tracker.component.ts ***!
  \***************************************************/
/*! exports provided: TrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerComponent", function() { return TrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrackerComponent = /** @class */ (function () {
    function TrackerComponent() {
    }
    TrackerComponent.prototype.ngOnInit = function () {
        var trackerDetails = this.getDummyJson();
        var trackerRemoveDiv = document.querySelector('div#replayControl');
        console.log(trackerRemoveDiv);
        if (trackerRemoveDiv) {
            trackerRemoveDiv.remove();
        }
        console.log(trackerDetails);
    };
    TrackerComponent.prototype.getDummyJson = function () {
        console.log('inside dummy json');
        var trackerResponse = {
            "originCode": "SEA",
            "destinationCode": "JFK",
            "destinationCity": "New York City,NY(JFK)",
            "originCity": "Seattlle, Washington(SEA)",
            "dateRange": "April 27, 2019",
        };
        return trackerResponse;
    };
    TrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracker',
            template: __webpack_require__(/*! ./tracker.component.html */ "./src/app/main/tracker/tracker.component.html"),
            styles: [__webpack_require__(/*! ./tracker.component.css */ "./src/app/main/tracker/tracker.component.css")]
        })
    ], TrackerComponent);
    return TrackerComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color:rgba(31, 80, 132);\r\n}\r\nh2{\r\n    color:#ffc107;\r\n}\r\n.profileData div span:first-child{\r\n    width: 20%;\r\n    display: inline-block;\r\n}\r\n.profileData div{\r\n    padding: 0.5% 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjpyZ2JhKDMxLCA4MCwgMTMyKTtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiNmZmMxMDc7XHJcbn1cclxuLnByb2ZpbGVEYXRhIGRpdiBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucHJvZmlsZURhdGEgZGl2e1xyXG4gICAgcGFkZGluZzogMC41JSAxJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div  class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h1>{{profileData.Name}}</h1>\n      <div class=\"profileData\">\n        <div><span>Date of Birth:</span><span>{{profileData.DateOfBirth}}</span></div>\n        <div><span>Seat Preference:</span><span>{{profileData.SeatPreference}}</span></div>\n        <div><span>Food Preference:</span><span>{{profileData.FoodPreference}}</span></div>\n      </div>\n      <div *ngFor=\"let kidData of profileData!='' && profileData.kids;let i=index;\" class=\"profileData col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <h2><u>{{\"Kid\"+(i+1)}} details</u></h2>\n        <div><span>Name:</span><span>{{kidData.Name}}</span></div>\n        <div><span>Date of Birth:</span><span>{{kidData.DateOfBirth}}</span></div>\n        <div><span>Seat Preference:</span><span>{{kidData.SeatPreference}}</span></div>\n        <div><span>Food Preference:</span><span>{{kidData.FoodPreference}}</span></div>\n        <div><span>Hobbies:</span><span>{{kidData.Hobbies}}</span></div>\n        <div><span>Emergency Contact Number:</span><span>{{kidData.EmergencyContactNumber}}</span></div>\n      </div>\n  </div>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(httpService) {
        this.httpService = httpService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData("./assets/profileData.JSON").subscribe(function (profileData) { return _this.profileData = profileData; });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map