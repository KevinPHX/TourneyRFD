webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-bottom: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class='container'>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { DataService } from "./data.service";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bar_rating__ = __webpack_require__("../../../../ngx-bar-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_modal__ = __webpack_require__("../../../../ngx-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_update_update_component__ = __webpack_require__("../../../../../src/app/components/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/components/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_reset_reset_component__ = __webpack_require__("../../../../../src/app/components/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tournament_tournament_component__ = __webpack_require__("../../../../../src/app/components/tournament/tournament.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_addtournament_addtournament_component__ = __webpack_require__("../../../../../src/app/components/addtournament/addtournament.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_addreview_addreview_component__ = __webpack_require__("../../../../../src/app/components/addreview/addreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_edittournament_edittournament_component__ = __webpack_require__("../../../../../src/app/components/edittournament/edittournament.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_image_image_component__ = __webpack_require__("../../../../../src/app/components/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_map_map_component__ = __webpack_require__("../../../../../src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_review_review_component__ = __webpack_require__("../../../../../src/app/components/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_report_report_component__ = __webpack_require__("../../../../../src/app/components/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_editreview_editreview_component__ = __webpack_require__("../../../../../src/app/components/editreview/editreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_termsandconditions_termsandconditions_component__ = __webpack_require__("../../../../../src/app/components/termsandconditions/termsandconditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { ModalModule } from 'ngx-modialog';
// import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';





























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'update/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_update_update_component__["a" /* UpdateComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_24__components_forgot_forgot_component__["a" /* ForgotComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_25__components_reset_reset_component__["a" /* ResetComponent */] },
    { path: 'tournament/:id', component: __WEBPACK_IMPORTED_MODULE_26__components_tournament_tournament_component__["a" /* TournamentComponent */] },
    { path: 'addreview/:id', component: __WEBPACK_IMPORTED_MODULE_28__components_addreview_addreview_component__["a" /* AddreviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addtournament', component: __WEBPACK_IMPORTED_MODULE_27__components_addtournament_addtournament_component__["a" /* AddtournamentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edittournament/:id', component: __WEBPACK_IMPORTED_MODULE_29__components_edittournament_edittournament_component__["a" /* EdittournamentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'image/:id', component: __WEBPACK_IMPORTED_MODULE_30__components_image_image_component__["a" /* ImageComponent */] },
    { path: 'map/:id', component: __WEBPACK_IMPORTED_MODULE_31__components_map_map_component__["a" /* MapComponent */] },
    { path: 'review/:id', component: __WEBPACK_IMPORTED_MODULE_32__components_review_review_component__["a" /* ReviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'report/:id', component: __WEBPACK_IMPORTED_MODULE_33__components_report_report_component__["a" /* ReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'editreview/:id', component: __WEBPACK_IMPORTED_MODULE_34__components_editreview_editreview_component__["a" /* EditreviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'email-verification/:url', component: __WEBPACK_IMPORTED_MODULE_35__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'termsandconditions', component: __WEBPACK_IMPORTED_MODULE_36__components_termsandconditions_termsandconditions_component__["a" /* TermsandconditionsComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_37__components_aboutus_aboutus_component__["a" /* AboutusComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_update_update_component__["a" /* UpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_tournament_tournament_component__["a" /* TournamentComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_addtournament_addtournament_component__["a" /* AddtournamentComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_addreview_addreview_component__["a" /* AddreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_edittournament_edittournament_component__["a" /* EdittournamentComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_image_image_component__["a" /* ImageComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_review_review_component__["a" /* ReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_editreview_editreview_component__["a" /* EditreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_termsandconditions_termsandconditions_component__["a" /* TermsandconditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD_psTAXcXV9eR4FzF_BFe59jDFMAbVM5k'
                }),
                __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bar_rating__["a" /* BarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                // ModalModule.forRoot(),
                // BootstrapModalModule,
                __WEBPACK_IMPORTED_MODULE_10_ngx_modal__["ModalModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/aboutus.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/addreview/addreview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addreview/addreview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let docs of documents\">\n<h2 >{{docs.name}}</h2><br><br><br>\n<!-- <h4>Judging Pool: {{docs.judgingpool}}</h4>\n<h4>Accomodations: {{docs.accomodations}}</h4>\n<h4>Location: {{docs.location}}</h4>\n<h4>Scheduling: {{docs.scheduling}}</h4>\n<h4>Overall: {{docs.overall}}</h4> -->\n\n\n</div>\n<form (submit)='onReviewSubmit()'>\n  <div class=\"col-xs-2\">\n  <div class='form-group'>\n    <label>Judging Pool</label><br>\n    <bar-rating name='judgingpool' [(ngModel)]='judgingpool' [max]=\"5\" [readOnly]='false'></bar-rating>\n\n  </div>\n  <div class='form-group'>\n    <label>Accomodations</label><br>\n    <bar-rating name='accomodations' [(ngModel)]='accomodations' [max]=\"5\" [readOnly]='false'></bar-rating>\n  </div>\n  <div class='form-group'>\n    <label>Location</label><br>\n    <bar-rating name='location' [(ngModel)]='location' [max]=\"5\" [readOnly]='false'></bar-rating>\n  </div>\n  <div class='form-group'>\n    <label>Scheduling</label><br>\n    <bar-rating name='scheduling' [(ngModel)]='scheduling' [max]=\"5\" [readOnly]='false'></bar-rating>\n  </div>\n  </div>\n  <div class=\"col-xs-10\">\n  <div class='form-group'>\n    <label>Comments</label><br>\n    <textarea name=\"content\" [(ngModel)]='content' rows=\"8\" cols=\"80\" class=\"form-control\"></textarea>\n    <!-- <input type='text' [(ngModel)]='content' name='content' class=\"form-control\"> -->\n  </div>\n  <input type='submit' class = 'btn btn-primary' value='Submit'>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/addreview/addreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddreviewComponent = /** @class */ (function () {
    function AddreviewComponent(validateService, flashMessages, authService, router, dataService) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
    }
    AddreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(11);
        console.log(this.id);
        this.dataService.getTournament(this.id).subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    };
    AddreviewComponent.prototype.onReviewSubmit = function () {
        var _this = this;
        var review = {
            judgingpool: this.judgingpool,
            accomodations: this.accomodations,
            location: this.location,
            scheduling: this.scheduling,
            content: this.content,
        };
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(11);
        console.log(this.id);
        if (review.judgingpool == undefined || review.accomodations == undefined || review.location == undefined || review.scheduling == undefined || review.content == undefined || review.content == "") {
            this.flashMessages.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.dataService.getUserReviews().subscribe(function (reviews) {
            for (var i = 0; i < reviews.length; i++) {
                if (reviews[i].tournament == _this.id) {
                    _this.flashMessages.show("You may not review a tournament more than once. You may edit your previous review for this tournament", { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            }
            _this.dataService.addReview(review, _this.id).subscribe(function (data) {
                if (data) {
                    _this.flashMessages.show("Successfully added review", { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/tournament/', _this.id]).then(function () {
                        window.location.reload();
                    });
                }
                else {
                    _this.flashMessages.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        });
    };
    AddreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addreview',
            template: __webpack_require__("../../../../../src/app/components/addreview/addreview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/addreview/addreview.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _e || Object])
    ], AddreviewComponent);
    return AddreviewComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/addreview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/addtournament/addtournament.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addtournament/addtournament.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Add Tournament</h2>\n<form>\n  <div class = \"col-xs-6\">\n  <div class='form-group'>\n    <label>Tournament Name</label><br>\n    <input type='text' [(ngModel)]='name' name='name' class=\"form-control\">\n  </div>\n  </div>\n  <div class = \"col-xs-3\">\n  <div class='form-group'>\n    <label>Start Date</label><br>\n    <input type=\"date\" name=\"startdate\" [(ngModel)]='startdate' class=\"form-control\">\n  </div>\n  </div>\n  <div class = \"col-xs-3\">\n  <div class='form-group'>\n    <label>End Date</label><br>\n    <input type=\"date\" name=\"enddate\" [(ngModel)]='enddate' class=\"form-control\">\n  </div>\n  </div>\n    <div class='form-group'>\n     <div class= \"col-xs-4\">\n      <label>Events with Bids</label>\n      <form #formRef=\"ngForm\">\n         <div *ngFor=\"let eventwithbid of eventswithbids; let in=index\">\n\n             <div class=\"form-group\">\n               <div class= \"col-xs-2\">\n                 <button  class = 'btn btn-default'  (click)=\"remove(in)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n               </div>\n               <div class= \"col-xs-10\">\n                 <input  type=\"text\" [(ngModel)]=\"eventswithbids[in].value\" name=\"name{{in}}\" class=\"form-control\" #name=\"ngModel\" value = \"eventswithbids[in].value\" required />\n               </div>\n               <br />\n\n\n               <!--<p [hidden]=\"words2[in].value\">Field is required</p>\n               {{formRef.form.name1}}-->\n             </div>\n             <!-- <br /> -->\n\n         </div>\n       </form>\n    </div>\n    <div class= \"col-xs-4\">\n     <label>Bid Rounds</label>\n     <form #formRef=\"ngForm\">\n       <div *ngFor=\"let bidround of bidrounds; let in=index\" >\n\n           <div class=\"form-group\">\n             <div class= \"col-xs-12\">\n             <input type=\"text\" [(ngModel)]=\"bidrounds[in].value\" name=\"name{{in}}\" class=\"form-control\" #name=\"ngModel\" required/>\n             </div>\n             <br />\n           </div>\n       </div>\n      </form>\n        <br>\n        <br>\n        <!-- <button style=\"float: right;\" [disabled]=\"!formRef.form.valid\" (click)=\"addbidrounds()\"(click)=\"add()\" class = 'btn btn-default'>Add Event</button> -->\n        <button style=\"float: right;\" (click)=\"addbidrounds()\"(click)=\"add()\" class = 'btn btn-default'>Add Event</button>\n\n       <!-- {{eventswithbids | json}}\n       {{bidrounds | json}} -->\n       <br />\n       <br />\n       <br />\n       <br />\n   </div>\n   <div class= \"col-xs-4\">\n    <label>Events without Bids</label>\n    <form #formRef1=\"ngForm\" >\n       <div *ngFor=\"let eventwithoutbid of eventswithoutbids; let in=index\">\n\n           <div class=\"form-group\">\n             <div class = \"col-xs-2\">\n               <button class = 'btn btn-default'  (click)=\"removeWithoutBid(in)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n             </div>\n             <div class = \"col-xs-10\">\n             <input type=\"text\" [(ngModel)]=\"eventswithoutbids[in].value\" name=\"name{{in}}\" class=\"form-control\" #name=\"ngModel\" required />\n\n             </div>\n                         <br />\n           </div>\n         </div>\n     </form>\n     <br>\n     <br>\n      <button style=\"float: right;\" class = 'btn btn-default'  (click)=\"addwithoutbids()\">Add Event</button>\n      <br />\n      <br />\n      <br />\n      <br />\n  </div>\n </div>\n <br />\n <br />\n <br />\n <br />\n <div class = \"col-xs-12\">\n\n  <div class='form-group'>\n    <label>Screws</label>\n    <input type='text' [(ngModel)]='screws' name='screws' class=\"form-control\">\n  </div>\n  </div>\n  <div class = \"col-xs-12\">\n    <div class='form-group'>\n      <label>Tournament Website Link</label>\n      <input type= 'text' [(ngModel)]='link' name='link' class='form-control'>\n    </div>\n  </div>\n\n  <div class = \"col-xs-12\">\n    <div class='form-group'>\n      <label>Address</label>\n      <input type= 'text' [(ngModel)]='address' name='address' class='form-control'>\n    </div>\n  </div>\n\n<div class = \"col-xs-12\">\n  <input type='submit' class = 'btn btn-primary' value='Submit' (click)=onTournamentSubmit()>\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/addtournament/addtournament.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtournamentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddtournamentComponent = /** @class */ (function () {
    function AddtournamentComponent(validateService, flashMessages, authService, router, dataService) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.eventswithbids = [{ value: '' }];
        this.bidrounds = [{ value: '' }];
        this.eventswithoutbids = [{ value: '' }];
    }
    AddtournamentComponent.prototype.ngOnInit = function () { };
    AddtournamentComponent.prototype.onTournamentSubmit = function () {
        //var eventswithbids = []
        // for (var i = 0; i < this.eventswithbids.length; i++){
        //   eventswithbids.push(this.eventswithbids[i].value)
        // }
        //var eventswithoutbids = []
        // for (var i = 0; i < this.eventswithoutbids.length; i++){
        //   eventswithoutbids.push(this.eventswithoutbids[i].value)
        // }
        //var bidrounds = []
        // for (var i = 0; i < this.bidrounds.length; i++){
        //   bidrounds.push(this.bidrounds[i].value)
        // }
        var _this = this;
        var tournament = {
            name: this.name,
            startdate: this.startdate,
            enddate: this.enddate,
            eventswithbids: this.eventswithbids,
            bidrounds: this.bidrounds,
            eventswithoutbids: this.eventswithoutbids,
            screws: this.screws,
            link: this.link,
            address: this.address,
        };
        if (!this.validateService.validateTournament(tournament)) {
            this.flashMessages.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (this.link.substring(0, 23) != "https://www.tabroom.com") {
            this.flashMessages.show("Please use the Tabroom link", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        for (var i = 0; i < tournament.eventswithbids.length; i++) {
            if (tournament.eventswithbids[i].value == "" || tournament.bidrounds[i].value == "") {
                this.flashMessages.show("Please fill in Events with Bids and Bid Rounds or remove empty fields", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }
        for (var i = 0; i < tournament.eventswithoutbids.length; i++) {
            if (tournament.eventswithoutbids[i].value == "") {
                this.flashMessages.show("Please fill in Events without Bids or remove empty fields", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }
        this.dataService.addTournament(tournament).subscribe(function (data) {
            if (data) {
                _this.flashMessages.show("Successfully added tournament", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessages.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/addtournament']);
            }
        });
    };
    AddtournamentComponent.prototype.add = function () {
        for (var i = 0; i < this.eventswithbids.length; i++) {
            var event = this.eventswithbids[i].value;
            this.eventswithbids.splice(i, 1, { value: event });
        }
        this.eventswithbids.splice(this.eventswithbids.length, 1, { value: "" });
        console.log(this.eventswithbids);
    };
    AddtournamentComponent.prototype.addbidrounds = function () {
        for (var i = 0; i < this.bidrounds.length; i++) {
            var round = this.bidrounds[i].value;
            this.bidrounds.splice(i, 1, { value: round });
        }
        this.bidrounds.splice(this.bidrounds.length, 1, { value: '' });
    };
    AddtournamentComponent.prototype.addwithoutbids = function () {
        for (var i = 0; i < this.eventswithoutbids.length; i++) {
            var withoutbid = this.eventswithoutbids[i].value;
            this.eventswithoutbids.splice(i, 1, { value: withoutbid });
        }
        this.eventswithoutbids.splice(this.eventswithoutbids.length, 1, { value: '' });
    };
    AddtournamentComponent.prototype.remove = function (index) {
        console.log("REMOVE INDEX" + index);
        this.eventswithbids.splice(index, 1);
        this.bidrounds.splice(index, 1);
        console.log("REMOVE LENGTH" + this.eventswithbids.length);
    };
    AddtournamentComponent.prototype.removeWithoutBid = function (index) {
        this.eventswithoutbids.splice(index, 1);
    };
    AddtournamentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addtournament',
            template: __webpack_require__("../../../../../src/app/components/addtournament/addtournament.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/addtournament/addtournament.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _e || Object])
    ], AddtournamentComponent);
    return AddtournamentComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/addtournament.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n      height: 800px;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Dashboard</h2>\n<div *ngIf='user'>\n<div class=\"data-list\">\n  <!-- <h3>Add a Tournament</h3>\n    <a class='btn btn-primary' [routerLink]=\"['/addtournament']\" value = \"addTournament\" style = \"width = 100%\" >Add Tournament</a> -->\n\n    <h3>My Reviews</h3>\n      <div *ngFor=\"let docs of documents\">\n        <div class =\"col-xs-12\">\n          <br>\n        <h4>{{docs.tournamentname}}</h4>\n        </div>\n\n        <div class = \"col-xs-2\">\n          <b>Judging Pool: </b><bar-rating [rate]=docs.judgingpool [max]=\"5\" [readOnly]='true'></bar-rating>\n          <b>Accomodations: </b><bar-rating [rate]=docs.accomodations [max]=\"5\" [readOnly]='true'></bar-rating>\n          <b>Location: </b><bar-rating [rate]=docs.location [max]=\"5\" [readOnly]='true'></bar-rating>\n          <b>Scheduling: </b><bar-rating [rate]=docs.scheduling [max]=\"5\" [readOnly]='true'></bar-rating>\n        </div>\n        <div class = \"col-xs-10\">\n          <h4><b>{{docs.firstname}} {{docs.lastname}}</b></h4> <h5>{{docs.role}} | {{docs.affiliation}}</h5>\n          <b>{{docs.date}}</b> <br><br>\n          {{docs.content}}<br><br>\n          <p *ngIf=\"docs.rating > 0\"> {{docs.rating}} people found this review helpful</p>\n          <a class='btn btn-primary' [routerLink]=\"['/editreview/', docs._id]\" value = \"editReview\" >Edit Review</a> &nbsp;&nbsp;&nbsp; <a class='link' [routerLink]=\"['/review/', docs._id]\" value = \"review\" >View Replies</a>\n\n        </div>\n\n    </div>\n        <br><br>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, authService, http, router) {
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            _this.id = profile.user._id;
            console.log(_this.id);
        }, function (err) {
            console.log(err);
            return false;
        });
        this.dataService.getUserReviews()
            .subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editreview/editreview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editreview/editreview.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{tournamentname}}</h2>\n\n<form (submit)='editReview()'>\n  <div class=\"col-xs-2\">\n  <div class='form-group'>\n    <label>Judging Pool</label><br>\n    <bar-rating name='judgingpool' [(ngModel)]='judgingpool' [max]=\"5\" [readOnly]='false'></bar-rating>\n\n  </div>\n  <div class='form-group'>\n    <label>Accomodations</label><br>\n    <bar-rating name='accomodations' [(ngModel)]='accomodations' [max]=\"5\" [readOnly]='false'></bar-rating>\n  </div>\n  <div class='form-group'>\n    <label>Location</label><br>\n    <bar-rating name='location' [(ngModel)]='location' [max]=\"5\" [readOnly]='false'></bar-rating>\n  </div>\n  <div class='form-group'>\n    <label>Scheduling</label><br>\n    <bar-rating name='scheduling' [(ngModel)]='scheduling' [max]=\"5\" [readOnly]='false'></bar-rating>\n  </div>\n  </div>\n  <div class=\"col-xs-10\">\n  <div class='form-group'>\n    <label>Comments</label><br>\n    <textarea name=\"content\" [(ngModel)]='content' rows=\"8\" cols=\"80\" class=\"form-control\"></textarea>\n    <!-- <input type='text' [(ngModel)]='content' name='content' class=\"form-control\"> -->\n  </div>\n  <input type='submit' class = 'btn btn-primary' value='Submit'>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/editreview/editreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditreviewComponent = /** @class */ (function () {
    function EditreviewComponent(dataService, authService, validateService, router, flashMessage, http) {
        this.dataService = dataService;
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    EditreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(12);
        console.log(this.id);
        this.dataService.getReview(this.id).subscribe(function (review) {
            console.log(review);
            _this.judgingpool = review[0].judgingpool;
            _this.accomodations = review[0].accomodations;
            _this.location = review[0].location;
            _this.scheduling = review[0].scheduling;
            _this.content = review[0].content;
            _this.tournamentname = review[0].tournamentname;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditreviewComponent.prototype.editReview = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(12);
        console.log(this.id);
        var review = {
            judgingpool: this.judgingpool,
            accomodations: this.accomodations,
            location: this.location,
            scheduling: this.scheduling,
            content: this.content
        };
        console.log(review.judgingpool);
        if (review.judgingpool == undefined || review.accomodations == undefined || review.location == undefined || review.scheduling == undefined || review.content == '') {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        console.log(review);
        this.dataService.editReview(review, this.id).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show("Successfully edited review", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.router.navigate(['/dashboard']);
    };
    EditreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editreview',
            template: __webpack_require__("../../../../../src/app/components/editreview/editreview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editreview/editreview.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], EditreviewComponent);
    return EditreviewComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/editreview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edittournament/edittournament.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edittournament/edittournament.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Edit Tournament Information</h2>\n<form>\n  <div class = \"col-xs-6\">\n  <div class='form-group'>\n    <label>Tournament Name</label><br>\n    <input type='text' [(ngModel)]='name' name='name' class=\"form-control\">\n  </div>\n  </div>\n  <div class = \"col-xs-3\">\n  <div class='form-group'>\n    <label>Start Date</label><br>\n    <input type=\"date\" name=\"startdate\" [(ngModel)]='startdate' class=\"form-control\">\n  </div>\n  </div>\n  <div class = \"col-xs-3\">\n  <div class='form-group'>\n    <label>End Date</label><br>\n    <input type=\"date\" name=\"enddate\" [(ngModel)]='enddate' class=\"form-control\">\n  </div>\n  </div>\n    <div class='form-group'>\n     <div class= \"col-xs-4\">\n      <label>Events with Bids</label>\n      <form #formRef=\"ngForm\">\n         <div *ngFor=\"let eventwithbid of eventswithbids; let in=index\">\n\n             <div class=\"form-group\">\n               <div class= \"col-xs-2\">\n                 <button  class = 'btn btn-default'  (click)=\"remove(in)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n               </div>\n               <div class= \"col-xs-10\">\n                 <input  type=\"text\" [(ngModel)]=\"eventswithbids[in].value\" name=\"name{{in}}\" class=\"form-control\" #name=\"ngModel\" value = \"eventswithbids[in].value\" required />\n               </div>\n               <br />\n\n\n               <!--<p [hidden]=\"words2[in].value\">Field is required</p>\n               {{formRef.form.name1}}-->\n             </div>\n             <!-- <br /> -->\n\n         </div>\n       </form>\n    </div>\n    <div class= \"col-xs-4\">\n     <label>Bid Rounds</label>\n     <form #formRef=\"ngForm\">\n       <div *ngFor=\"let bidround of bidrounds; let in=index\" >\n\n           <div class=\"form-group\">\n             <div class= \"col-xs-12\">\n             <input type=\"text\" [(ngModel)]=\"bidrounds[in].value\" name=\"name{{in}}\" class=\"form-control\" #name=\"ngModel\" value = \"bidrounds[in].value\" required/>\n             </div>\n             <br />\n           </div>\n       </div>\n      </form>\n        <br>\n        <br>\n        <button style=\"float: right;\"  (click)=\"addbidrounds()\"(click)=\"add()\" class = 'btn btn-default'>Add Event</button>\n       <!-- {{eventswithbids | json}}\n       {{bidrounds | json}} -->\n       <br />\n       <br />\n       <br />\n       <br />\n   </div>\n   <div class= \"col-xs-4\">\n    <label>Events without Bids</label>\n    <form #formRef1=\"ngForm\" >\n       <div *ngFor=\"let eventwithoutbid of eventswithoutbids; let in=index\">\n\n           <div class=\"form-group\">\n             <div class = \"col-xs-2\">\n               <button class = 'btn btn-default'  (click)=\"removeWithoutBid(in)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n             </div>\n             <div class = \"col-xs-10\">\n             <input type=\"text\" [(ngModel)]=\"eventswithoutbids[in].value\" name=\"name{{in}}\" class=\"form-control\" #name=\"ngModel\" value = \"eventswithoutbids[in].value\" required />\n\n             </div>\n             <br />\n           </div>\n         </div>\n     </form>\n     <br>\n     <br>\n      <button style=\"float: right;\" class = 'btn btn-default'  (click)=\"addwithoutbids()\">Add Event</button>\n      <br />\n      <br />\n      <br />\n      <br />\n  </div>\n </div>\n <br />\n <br />\n <br />\n <br />\n <div class = \"col-xs-12\">\n\n  <div class='form-group'>\n    <label>Screws</label>\n    <input type='text' [(ngModel)]='screws' name='screws' class=\"form-control\">\n  </div>\n  </div>\n  <div class = \"col-xs-12\">\n    <div class='form-group'>\n      <label>Tournament Website Link</label>\n      <input type= 'text' [(ngModel)]='link' name='link' class='form-control'>\n    </div>\n  </div>\n\n  <div class = \"col-xs-12\">\n    <div class='form-group'>\n      <label>Address</label>\n      <input type= 'text' [(ngModel)]='address' name='address' class='form-control'>\n    </div>\n  </div>\n\n<div class = \"col-xs-12\">\n  <input type='button' class = 'btn btn-primary' value='Submit' (click)=editTournament() ><a class='btn btn-default' [routerLink]=\"['/tournament/', this.id]\" value = \"Cancel\">Cancel</a>\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/edittournament/edittournament.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdittournamentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EdittournamentComponent = /** @class */ (function () {
    function EdittournamentComponent(validateService, flashMessages, authService, router, dataService, http) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
    }
    EdittournamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(16);
        console.log(this.id);
        this.dataService.getTournament(this.id).subscribe(function (tournament) {
            console.log(tournament);
            _this.name = tournament[0].name;
            _this.startdate = tournament[0].startdate;
            _this.enddate = tournament[0].enddate;
            _this.eventswithbids = tournament[0].eventswithbids;
            _this.bidrounds = tournament[0].bidrounds;
            _this.eventswithoutbids = tournament[0].eventswithoutbids;
            _this.screws = tournament[0].screws;
            _this.link = tournament[0].link;
            _this.address = tournament[0].address;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EdittournamentComponent.prototype.refresh = function () {
        window.location.reload();
    };
    EdittournamentComponent.prototype.editTournament = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(16);
        console.log(this.id);
        var tournament = {
            name: this.name,
            startdate: this.startdate,
            enddate: this.enddate,
            eventswithbids: this.eventswithbids,
            bidrounds: this.bidrounds,
            eventswithoutbids: this.eventswithoutbids,
            screws: this.screws,
            link: this.link,
            address: this.address,
        };
        if (!this.validateService.validateTournament(tournament)) {
            this.flashMessages.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (this.link.substring(0, 23) != "https://www.tabroom.com") {
            this.flashMessages.show("Please use the Tabroom link", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        for (var i = 0; i < tournament.eventswithbids.length; i++) {
            if (tournament.eventswithbids[i].value == "" || tournament.bidrounds[i].value == "") {
                this.flashMessages.show("Please fill in Events with Bids and Bid Rounds or remove empty fields", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }
        for (var i = 0; i < tournament.eventswithoutbids.length; i++) {
            if (tournament.eventswithoutbids[i].value == "") {
                this.flashMessages.show("Please fill in Events without Bids or remove empty fields", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }
        this.dataService.editTournament(this.id, tournament).subscribe(function (data) {
            console.log("editTournament");
            console.log(data);
            if (data) {
                _this.flashMessages.show("Successfully edited tournament", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessages.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/edittournament/' + _this.id]);
            }
        });
        this.router.navigate(['/tournament/', this.id])
            .then(function () {
            window.location.reload();
        });
    };
    EdittournamentComponent.prototype.add = function () {
        for (var i = 0; i < this.eventswithbids.length; i++) {
            var event = this.eventswithbids[i].value;
            this.eventswithbids.splice(i, 1, { value: event });
        }
        this.eventswithbids.splice(this.eventswithbids.length, 1, { value: "" });
        console.log(this.eventswithbids);
    };
    EdittournamentComponent.prototype.addbidrounds = function () {
        for (var i = 0; i < this.bidrounds.length; i++) {
            var round = this.bidrounds[i].value;
            this.bidrounds.splice(i, 1, { value: round });
        }
        this.bidrounds.splice(this.bidrounds.length, 1, { value: '' });
    };
    EdittournamentComponent.prototype.addwithoutbids = function () {
        for (var i = 0; i < this.eventswithoutbids.length; i++) {
            var withoutbid = this.eventswithoutbids[i].value;
            this.eventswithoutbids.splice(i, 1, { value: withoutbid });
        }
        this.eventswithoutbids.splice(this.eventswithoutbids.length, 1, { value: '' });
    };
    EdittournamentComponent.prototype.remove = function (index) {
        console.log("REMOVE INDEX" + index);
        this.eventswithbids.splice(index, 1);
        this.bidrounds.splice(index, 1);
        console.log("REMOVE LENGTH" + this.eventswithbids.length);
    };
    EdittournamentComponent.prototype.removeWithoutBid = function (index) {
        this.eventswithoutbids.splice(index, 1);
    };
    EdittournamentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edittournament',
            template: __webpack_require__("../../../../../src/app/components/edittournament/edittournament.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edittournament/edittournament.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], EdittournamentComponent);
    return EdittournamentComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/edittournament.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/email-verification/email-verification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/email-verification/email-verification.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style = \"text-align: center;\" >Your Account Has Been Verified</h1>\n<h3 style = \"text-align:center;\">You may now log in. Please proceed to the login page</h3>\n"

/***/ }),

/***/ "../../../../../src/app/components/email-verification/email-verification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailVerificationComponent = /** @class */ (function () {
    function EmailVerificationComponent(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    EmailVerificationComponent.prototype.ngOnInit = function () {
        this.href = this.router.url;
        console.log(this.href);
        this.url = this.href.substring(20);
        this.authService.emailValidation(this.url).subscribe(function (data) {
            if (data) {
                console.log("success");
            }
            else {
                console.log("failure");
            }
        });
    };
    EmailVerificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-verification',
            template: __webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/email-verification/email-verification.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _c || Object])
    ], EmailVerificationComponent);
    return EmailVerificationComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/email-verification.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  position: fixed;\n    left: 0;\n    bottom: 0;\n    margin-top: auto;\n    background-color: #40abe9;\n    width: 100%;\n    color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small pt-4\">\n\n  <!-- Footer Links -->\n  <div class=\"container-fluid text-center text-md-left\">\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-6 mt-md-0 mt-3\">\n\n        <!-- Content -->\n        <h3 style=\"color:white;\">[Company Name]</h3>\n        <h5 style = \"color:white\">Contact Us</h5>\n        <p style = \"color:white\">Email: kyin20@brophybroncos.org</p>\n        <p style = \"color:white\">Phone Number: (602) 737 9976</p>\n      </div>\n      <!-- Grid column -->\n\n      <br>\n      <br>\n      <!-- Grid column -->\n      <div class=\"col-md-6 mb-md-0 mb-6\">\n\n        <ul class=\"list-unstyled\">\n          <li>\n            <a [routerLink]=\"['/termsandconditions']\"><h4 style = \"color:white\">Terms and Conditions</h4></a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/aboutus']\"><h4 style = \"color:white\">About Us</h4></a>\n          </li>\n\n        </ul>\n\n      </div>\n      <!-- Grid column -->\n\n\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright\" style = \"text-align: center\">© 2019 Copyright [Company Name]\n    <a href=\"https://mdbootstrap.com/education/bootstrap/\"> MDBootstrap.com</a>\n  </div>\n  <!-- Copyright -->\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Forgot</h2>\n<form (submit)='onForgotSubmit()'>\n  <div class='form-group'>\n    <label>Email</label>\n    <input type='text' class='form-control' [(ngModel)]='email' name='email'>\n  </div>\n  <input type='submit' class='btn btn-primary' value='Submit'>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(authService, validateService, router, flashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.authService.findUsers().subscribe(function (Data) {
            for (var i = 0; i < Data.length; i++) {
                //if (user.email !== Data[i].email){
                console.log(Data[i].email);
            }
        });
    };
    ForgotComponent.prototype.onForgotSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.findUsers().subscribe(function (Data) {
            for (var i = 0; i < Data.length; i++) {
                if (user.email == Data[i].email) {
                    _this.authService.forgotUser(user).subscribe(function (data) {
                        if (data) {
                            _this.flashMessage.show("An email has been sent to your account", {
                                cssClass: "alert-success",
                                timeout: 5000
                            });
                            _this.router.navigate(['/login']);
                        }
                    });
                }
                else {
                    _this.flashMessage.show("Please enter the email you registered with", { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            }
        });
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/components/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
    ], ForgotComponent);
    return ForgotComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  max-height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  background-size:100% 100%;\n  background-repeat: no-repeat;\n  background-color: #3aa9e7;\n}\n.jumbotron {\n  margin:0;\n  height: 259px;\n  width: 1140px;\n  background-color: #007fc2;\n  /* background-color:#3aa9e7; */\n  /* background-image: url(\"https://png.pngtree.com/thumb_back/fh260/back_pic/03/83/11/2157c84a65827a8.jpg\"); */\n  background-size: cover;\n}\nh1 {\n  text-align: center;\n  color:#EEEEEE;\n}\n.searchbar {\n  text-align:center;\n}\ninput{\n   width:70%;\n   margin-left: auto;\n   margin-right: auto;\n\n}\n:host {\n  display: block;\n}\n.open-close-container {\n\n  height: auto;\n  width:100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\">\n  <h1>[Company Name]</h1>\n  <br>\n  <div class=\"searchbar\">\n  <input type=\"text\" [(ngModel)]=\"term\" name=\"term\" class=\"form-control\"  placeholder=\"Search\">\n  </div>\n</div>\n<h2>Tournaments</h2>\n  <div *ngFor=\"let docs of documents | filter:term\">\n    <ul class='list-group'>\n      <li class='list-group-item'>\n        <div class=\"col-xs-4\">\n        <a [routerLink]=\"['/tournament/', docs._id]\"><h4>{{docs.name}}</h4></a>\n         <!-- (click)=\"onLinkClick(docs._id)\" -->\n        </div>\n        <div class=\"col-xs-2\">\n          <b><h5>Tournament Dates</h5></b>\n          <b>Start Date: {{docs.startdate}}</b> <br>\n          <b>End Date: {{docs.enddate}}</b>\n        </div>\n        <div class=\"col-xs-2\">\n          <b><h5>Tournament Address</h5></b>\n          <b>{{docs.address}}</b>\n        </div>\n        <b><h5>Overall Rating</h5></b> <bar-rating [rate]=docs.overall [max]=\"5\" [readOnly]='true'></bar-rating>\n      </li>\n    </ul>\n</div>\n    <br><br>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllTournaments()
            .subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.dataService.averageReviews(data[i]._id).subscribe(function (data) {
                    if (data) {
                        console.log("averaged data");
                    }
                    else {
                        console.log("Something went wrong");
                    }
                });
            }
            _this.documents = data;
        });
    };
    HomeComponent.prototype.refresh = function () {
        window.location.reload();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/image/image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#photos {\n  /* Prevent vertical gaps */\n  line-height: 0;\n\n  -webkit-column-count: 5;\n  -webkit-column-gap:   0px;\n  -moz-column-count:    5;\n  -moz-column-gap:      0px;\n  -webkit-column-count:         3;\n          column-count:         3;\n  column-gap:           0px;\n  /* background-color: #555; */\n}\n\n#photos img {\n  /* Just in case there are inline attributes */\n  width: 100% !important;\n  height: auto !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let docs of documents\">\n<h2 >{{docs.name}} Photo Gallery</h2>\n<image-upload url=\"http://localhost:3000/users/photo/{{docs._id}}\" [style]=\"customStyle\" [disabled]=\"isDisabled\" (click)=\"showMessage()\"></image-upload>\n<section id=\"photos\">\n<div *ngFor=\"let photo of photos; let i=index\">\n<img [src]=\"photo.imageData\" class=\"img-thumbnail\" (click)=\"myModal.open()\">\n<modal #myModal>\n        <modal-content>\n            <img [src]=\"photo.imageData\">\n        </modal-content>\n        <!-- <modal-footer>\n            <button class=\"btn btn-primary\" (click)=\"myModal.close()\">close</button>\n        </modal-footer> -->\n    </modal>\n</div>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImageComponent = /** @class */ (function () {
    function ImageComponent(dataService, authService, validateService, router, flashMessage, http) {
        this.dataService = dataService;
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.isDisabled = true;
        this.customStyle = {
            selectButton: {
                "background-color": "#3aa9e7",
                "color": "white"
            },
            clearButton: {
                "background-color": "#FFF",
                "color": "#000",
                "margin-left": "10px"
            },
        };
    }
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(7);
        console.log(this.id);
        this.dataService.getPhotos(this.id).subscribe(function (photos) {
            _this.photos = photos;
            console.log(photos);
            for (var _i = 0, _a = _this.photos; _i < _a.length; _i++) {
                var photo = _a[_i];
                photo.imageData = 'data:image/png;base64,' + photo.img.data;
            }
        });
        this.dataService.getTournament(this.id).subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
        if (this.authService.loggedIn()) {
            this.isDisabled = false;
        }
    };
    ImageComponent.prototype.showMessage = function () {
        if (!this.authService.loggedIn()) {
            this.flashMessage.show("You must be logged in", {
                cssClass: "alert-danger",
                timeout: 5000
            });
        }
        else {
            // this.flashMessage.show("Your picture has been uploaded",{
            //   cssClass: "alert-success",
            //   timeout:5000
            // });
            // window.location.reload();
        }
    };
    ImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image',
            template: __webpack_require__("../../../../../src/app/components/image/image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/image/image.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], ImageComponent);
    return ImageComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Login</h2>\n<form (submit)='onLoginSubmit()'>\n  <div class='form-group'>\n    <label>Username</label>\n    <input type='text' class='form-control' [(ngModel)]='username' name='username'>\n  </div>\n  <div class='form-group'>\n    <label>Password</label>\n    <input type='password' class='form-control' [(ngModel)]='password' name='password'>\n  </div>\n  First Time?&nbsp;<a class='' [routerLink]=\"['/register']\">Click Here</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='' [routerLink]=\"['/forgot']\">Forgot Password?</a>\n  <br/>\n  <br/>\n  <input type='submit' class='btn btn-primary' value='Login'>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("You are now logged in", {
                    cssClass: "alert-success",
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n      height: 600px;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let docs of documents\">\n  <a [routerLink]=\"['/tournament/', docs._id]\" ><h2 class='page-header'>{{docs.name}}</h2></a>\n  <br>\n  <agm-map [latitude]=\"docs.latitude\" [longitude]=\"docs.longitude\" [zoom]=\"9\">\n        <agm-marker [latitude]=\"docs.latitude\" [longitude]=\"docs.longitude\" >\n          <agm-info-window #infoWindow>\n\t\t          <a [routerLink]=\"['/tournament/', docs._id]\" ><h4>{{docs.name}}</h4></a>\n\t        </agm-info-window>\n        </agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapComponent = /** @class */ (function () {
    function MapComponent(validateService, flashMessages, authService, router, dataService) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(5);
        console.log(this.id);
        this.dataService.getTournament(this.id).subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/components/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _e || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a class=\"navbar-brand\" [routerLink]=\"['/']\"><b>[Company Name Here]</b></a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n\n            <li *ngIf='authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/addtournament']\">Add a Tournament</a></li>\n            <li *ngIf='authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf='authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n            <li *ngIf='!authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf='authService.loggedIn()'><a (click)='onLogoutClick()' href='#'>Logout</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", { cssClass: "alert-success", timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='user'>\n  <h2 class='page-header'>{{user.firstname}} {{user.lastname}}</h2>\n  <ul class='list-group'>\n    <li class='list-group-item'>Role: {{user.role}}</li>\n    <li class='list-group-item'>Affiliation: {{user.affiliation}}</li>\n    <li class='list-group-item'>Username: {{user.username}}</li>\n    <li class='list-group-item'>Email: {{user.email}}</li>\n  </ul>\n\n  <a class='btn btn-primary' [routerLink]=\"['/update/', user._id]\" value = \"Update\">Update</a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            _this.id = profile.user._id;
            console.log(_this.id);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 lass='page-header'>Register</h2>\n<form (submit)='onRegisterSubmit()'>\n  <div class='form-group'>\n    <label>Student or Coach</label><br>\n    <input type='radio' [(ngModel)]='role' name='student' value='Student' class=\"form-check\">   Student\n    <input type='radio' [(ngModel)]='role' name='coach' value='Coach' class=\"form-check\">   Coach\n  </div>\n  <div class='form-group'>\n    <label>Affiliation</label><br>\n    <input type='text' [(ngModel)]='affiliation' name='affiliation' class=\"form-control\">\n  </div>\n  <div class='form-group'>\n    <label>First Name</label>\n    <input type='text' [(ngModel)]='firstname' name='firstname' class=\"form-control\">\n  </div>\n  <div class='form-group'>\n    <label>Last Name</label>\n    <input type='text' [(ngModel)]='lastname' name='lastname' class=\"form-control\">\n  </div>\n\n  <div class='form-group'>\n    <label>Email</label>\n    <input type= 'text' [(ngModel)]='email' name='email' class='form-control'>\n  </div>\n  <div class='form-group'>\n    <label>Username</label>\n    <input type= 'text' [(ngModel)]='username' name='username' class='form-control'>\n  </div>\n  <div class='form-group'>\n    <label>Password</label>\n    <input type= 'password' [(ngModel)]='password' name='password' class='form-control'>\n  </div>\n  <div class=\"checkbox\">\n    <label><input type=\"checkbox\" [(ngModel)]='agreement' name='agreement' value=\"\">I accept the Terms and Conditions</label>\n  </div>\n\n  <input type='submit' class = 'btn btn-primary' value='Submit' >\n\n\n  <div class=\"modal\" id=\"myModal\" role=\"dialog\" >\n      <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <h3>Congratulations on making your account!</h3>\n            <p> A confirmation email has been sent to your email account with further instructions.</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" [routerLink]=\"['/login']\">Ok</button>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>\n\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_modal__ = __webpack_require__("../../../../ngx-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessages, authService, router, modal) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.modal = modal;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            role: this.role,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            username: this.username,
            password: this.password,
            affiliation: this.affiliation,
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessages.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessages.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.agreement.checked) {
            this.flashMessages.show("Please indicate that you accept the Terms and Conditions", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // this.flashMessages.show("Check your email to verify account", {cssClass:'alert-success', timeout:10000});
        // this.router.navigate(['/login'])
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data) {
                _this.flashMessages.show("Check your email to verify account", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessages.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
        document.getElementById("openModalButton").click();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_modal__["ModalModule"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_modal__["ModalModule"]) === "function" && _e || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let docs of documents\">\n  <h2 class = \"page-header\">Review</h2>\n  <div class =\"col-xs-12\">\n    <br>\n  <h4>{{docs.tournamentname}}</h4>\n  </div>\n  <div class = \"col-xs-2\">\n    <b>Judging Pool: </b><bar-rating [rate]=docs.judgingpool [max]=\"5\" [readOnly]='true'></bar-rating>\n    <b>Accomodations: </b><bar-rating [rate]=docs.accomodations [max]=\"5\" [readOnly]='true'></bar-rating>\n    <b>Location: </b><bar-rating [rate]=docs.location [max]=\"5\" [readOnly]='true'></bar-rating>\n    <b>Scheduling: </b><bar-rating [rate]=docs.scheduling [max]=\"5\" [readOnly]='true'></bar-rating>\n  </div>\n  <div class = \"col-xs-10\">\n    <h4><b>{{docs.firstname}} {{docs.lastname}}</b></h4> <h5>{{docs.role}} | {{docs.affiliation}}</h5>\n    <b>{{docs.date}}</b> <br><br>\n    {{docs.content}}<br><br>\n    <p *ngIf=\"docs.rating > 0\"> {{docs.rating}} people found this review helpful</p>\n  </div>\n</div>\n<form (submit)='onReportSubmit()'>\n\n<div class='form-group'>\n  <div class =\"col-xs-12\">\n    <br><h4>Reason for Reporting this Review</h4>\n  </div>\n\n  <textarea name=\"reportcontent\" [(ngModel)]='reportcontent' rows=\"4\" cols=\"80\" class=\"form-control\"></textarea>\n  <!-- <input type='text' [(ngModel)]='content' name='content' class=\"form-control\"> -->\n</div>\n<input type='submit' class = 'btn btn-primary' value='Submit'>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportComponent = /** @class */ (function () {
    function ReportComponent(dataService, authService, validateService, router, flashMessage, http) {
        this.dataService = dataService;
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(8);
        console.log(this.id);
        this.dataService.getReview(this.id).subscribe(function (review) {
            console.log(review);
            _this.documents = review;
        });
    };
    ReportComponent.prototype.onReportSubmit = function () {
        var _this = this;
        var report = {
            reportcontent: this.reportcontent,
        };
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(8);
        console.log(this.id);
        if (report.reportcontent == undefined || report.reportcontent == '') {
            this.flashMessage.show("Please provide your reason for reporting this review", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.dataService.reportReview(report, this.id).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show("Your report has been sent", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/review/' + _this.id]);
            }
            else {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/components/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], ReportComponent);
    return ReportComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/report.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Reset</h2>\n<form (submit)='onResetSubmit()'>\n  <div class='form-group'>\n    <label>Password</label>\n    <input type='text' class='form-control' [(ngModel)]='password' name='password'>\n  </div>\n  <input type='submit' class='btn btn-primary' value='Submit'>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetComponent = /** @class */ (function () {
    function ResetComponent(authService, validateService, router, flashMessage, http) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.token = this.href.substring(7, 47);
        console.log(this.token);
        this.authService.findUsers().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (_this.token == data[i].resetPasswordToken) {
                    console.log(data[i]);
                }
            }
        });
    };
    ResetComponent.prototype.onResetSubmit = function () {
        var _this = this;
        this.authService.findUsers().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (_this.token == data[i].resetPasswordToken) {
                    var user = {
                        password: _this.password
                    };
                    _this.href = _this.router.url;
                    console.log(_this.href);
                    _this.token = _this.href.substring(7, 47);
                    console.log(_this.token);
                    _this.authService.resetUser(_this.token, user).subscribe(function (data) {
                        if (data) {
                            _this.flashMessage.show("Your password has been changed", {
                                cssClass: "alert-success",
                                timeout: 5000
                            });
                            _this.router.navigate(['/login']);
                        }
                        else {
                            _this.flashMessage.show("Failure to change password", {
                                cssClass: "alert-success",
                                timeout: 5000
                            });
                            _this.router.navigate(['/reset/' + _this.token]);
                        }
                    });
                }
            }
        });
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("../../../../../src/app/components/reset/reset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reset/reset.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _e || Object])
    ], ResetComponent);
    return ResetComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let docs of documents\">\n  <h2 class = \"page-header\">Review</h2>\n  <div class =\"col-xs-12\">\n    <br>\n  <h4>{{docs.tournamentname}}</h4>\n  </div>\n  <div class = \"col-xs-2\">\n    <b>Judging Pool: </b><bar-rating [rate]=docs.judgingpool [max]=\"5\" [readOnly]='true'></bar-rating>\n    <b>Accomodations: </b><bar-rating [rate]=docs.accomodations [max]=\"5\" [readOnly]='true'></bar-rating>\n    <b>Location: </b><bar-rating [rate]=docs.location [max]=\"5\" [readOnly]='true'></bar-rating>\n    <b>Scheduling: </b><bar-rating [rate]=docs.scheduling [max]=\"5\" [readOnly]='true'></bar-rating>\n  </div>\n  <div class = \"col-xs-10\">\n    <h4><b>{{docs.firstname}} {{docs.lastname}}</b></h4> <h5>{{docs.role}} | {{docs.affiliation}}</h5>\n    <b>{{docs.date}}</b> <br><br>\n    {{docs.content}}<br><br>\n    <p *ngIf=\"docs.rating > 0\"> {{docs.rating}} people found this review helpful</p>\n  </div>\n</div>\n<form (submit)='onReplySubmit()'>\n\n<div class='form-group'>\n  <div class =\"col-xs-12\">\n    <br><h4>Write a Reply</h4>\n  </div>\n\n  <textarea name=\"content\" [(ngModel)]='content' rows=\"4\" cols=\"80\" class=\"form-control\"></textarea>\n  <!-- <input type='text' [(ngModel)]='content' name='content' class=\"form-control\"> -->\n</div>\n<input type='submit' class = 'btn btn-primary' value='Submit'>\n</form>\n\n\n\n\n\n\n<div class =\"col-xs-12\">\n  <br><h3>Replies</h3>\n</div>\n<div *ngFor=\"let reply of replies\">\n  <div class =\"col-xs-12\">\n      <h4><b>{{reply.firstname}} {{reply.lastname}}</b></h4> <h5>{{reply.role}} | {{reply.affiliation}}</h5>\n      <b>{{reply.date}}</b> <br><br>\n    {{reply.content}}<br><br>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(dataService, authService, validateService, router, flashMessage, http) {
        this.dataService = dataService;
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(8);
        console.log(this.id);
        this.dataService.getReview(this.id).subscribe(function (review) {
            console.log(review);
            _this.documents = review;
        });
        this.dataService.getReplies(this.id).subscribe(function (data) {
            console.log(data);
            _this.replies = data;
        });
    };
    ReviewComponent.prototype.refresh = function () {
        window.location.reload();
    };
    ReviewComponent.prototype.onReplySubmit = function () {
        var _this = this;
        var reply = {
            content: this.content,
        };
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(8);
        console.log(this.id);
        if (reply.content == undefined || reply.content == "") {
            this.flashMessage.show("If you would like to reply, please fill in the field", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.dataService.addReply(reply, this.id).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show("Reply Added", { cssClass: 'alert-success', timeout: 3000 });
                window.location.reload();
            }
            else {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review',
            template: __webpack_require__("../../../../../src/app/components/review/review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], ReviewComponent);
    return ReviewComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/review.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/termsandconditions/termsandconditions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/termsandconditions/termsandconditions.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  termsandconditions works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/termsandconditions/termsandconditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandconditionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsandconditionsComponent = /** @class */ (function () {
    function TermsandconditionsComponent() {
    }
    TermsandconditionsComponent.prototype.ngOnInit = function () {
    };
    TermsandconditionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-termsandconditions',
            template: __webpack_require__("../../../../../src/app/components/termsandconditions/termsandconditions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/termsandconditions/termsandconditions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsandconditionsComponent);
    return TermsandconditionsComponent;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/termsandconditions.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tournament/tournament.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tournament/tournament.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div *ngFor=\"let docs of documents\">\n      <h2 class='page-header'>{{docs.name}}</h2>\n      <br>\n      <div class=\"col-xs-3\">\n      <h3>Overall:</h3> <bar-rating [rate]=docs.overall [max]=\"5\" [readOnly]='true'></bar-rating>\n      <h4>Judging Pool:</h4> <bar-rating [rate]=docs.judgingpool [max]=\"5\" [readOnly]='true'></bar-rating>\n      <h4>Accomodations:</h4> <bar-rating [rate]=docs.accomodations [max]=\"5\" [readOnly]='true'></bar-rating>\n      <h4>Location:</h4> <bar-rating [rate]=docs.location [max]=\"5\" [readOnly]='true'></bar-rating>\n      <h4>Scheduling:</h4> <bar-rating [rate]=docs.scheduling [max]=\"5\" [readOnly]='true'></bar-rating><br>\n      <a class='link' [routerLink]=\"['/edittournament/', docs._id]\" value = \"Edit\">Edit Tournament Info</a><br><br>\n      </div>\n      <div class =\"col-xs-3\">\n      <a class='btn btn-primary' [routerLink]=\"['/image/', docs._id]\" value = \"Image\" style=\"width:100%;font-size:24px;\">Image Gallery</a>\n      </div>\n      <div class =\"col-xs-3\">\n      <a class='btn btn-primary'   [routerLink]=\"['/map/', docs._id]\" value = \"Map\" style=\"width:100%;font-size:24px\">Find on Map</a>\n      <!-- (click)=\"onLinkClick(docs._id)\" -->\n      </div>\n      <div class =\"col-xs-3\">\n      <a class='btn btn-primary' [routerLink]=\"['/addreview/', docs._id]\" value = \"Review\" style=\"width:100%;font-size:24px\">Add a Review</a>\n      </div>\n      <div class=\"col-xs-3\">\n        <h3>Tournament Dates</h3>\n        <b>Start Date: {{docs.startdate}}</b> <br>\n        <b>End Date: {{docs.enddate}}</b>\n      </div>\n      <div class=\"col-xs-3\">\n        <h3>Tournament Address</h3>\n        <b>{{docs.address}}</b>\n      </div>\n      <div class=\"col-xs-3\">\n        <h3>Debate Screws</h3>\n        <b>{{docs.screws}}</b><br><br>\n      </div>\n      <div class=\"col-xs-3\">\n        <h3>Events Without Bids</h3>\n        <div *ngFor=\"let eventswithoutbids of docs.eventswithoutbids\">\n          <b>{{eventswithoutbids.value}}</b>\n        </div>\n        <br><br><br>\n      </div>\n      <div class=\"col-xs-6\">\n        <h3>Tournament Website</h3>\n        <a href={{docs.link}}><h5><b>{{docs.link}}</b></h5></a>\n      </div>\n      <div class=\"col-xs-3\">\n        <h3>Events With Bids</h3>\n        <div *ngFor=\"let eventswithbids of docs.eventswithbids\">\n           <b>{{eventswithbids.value}}</b>\n           <br>\n        </div>\n      </div>\n      <div class=\"col-xs-3\">\n        <h3>Bid Rounds</h3>\n        <div *ngFor=\"let bidround of docs.bidrounds\">\n          <b>{{bidround.value}}</b>\n        </div>\n      </div>\n\n    </div>\n\n\n\n\n    <div class=\"col-xs-12\">\n    <h3 class='page-header'>Reviews</h3><br><br>\n    <div *ngFor=\"let review of reviews\">\n      <div class = \"col-xs-3\">\n        <b>Judging Pool: </b><bar-rating [rate]=review.judgingpool [max]=\"5\" [readOnly]='true'></bar-rating>\n        <b>Accomodations: </b><bar-rating [rate]=review.accomodations [max]=\"5\" [readOnly]='true'></bar-rating>\n        <b>Location: </b><bar-rating [rate]=review.location [max]=\"5\" [readOnly]='true'></bar-rating>\n        <b>Scheduling: </b><bar-rating [rate]=review.scheduling [max]=\"5\" [readOnly]='true'></bar-rating>\n      </div>\n      <div class = \"col-xs-9\">\n        <h4><b>{{review.firstname}} {{review.lastname}}</b></h4> <h5>{{review.role}} | {{review.affiliation}}</h5>\n        <b>{{review.date}}</b> <br><br>\n        {{review.content}}<br><br>\n        <p *ngIf=\"review.rating > 0\"> <b>{{review.rating}} people found this review helpful</b></p>\n        <button class='btn btn-default' value = \"Helpful\" (click)=\"rateReview(review._id)\"  >Helpful</button> |  <a class='link' value = \"Reply\" [routerLink]=\"['/review/', review._id]\">Reply</a> | <a class='link' value = \"Report\" [routerLink]=\"['/report/', review._id]\"><span class=\"glyphicon glyphicon-flag\"></span> Report Review</a>\n      </div>\n      <div class=\"col-xs-12\">\n        <br><br><br>\n      </div>\n  </div>\n  </div>\n        <br><br>\n"

/***/ }),

/***/ "../../../../../src/app/components/tournament/tournament.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TournamentComponent = /** @class */ (function () {
    function TournamentComponent(dataService, authService, validateService, router, flashMessage, http) {
        this.dataService = dataService;
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.isDisabled = false;
    }
    TournamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(12);
        console.log(this.id);
        this.dataService.averageReviews(this.id).subscribe(function (data) {
            if (data) {
                console.log("averaged data");
            }
            else {
                console.log("Something went wrong");
            }
        });
        this.dataService.getTournament(this.id).subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
        this.dataService.getReviews(this.id).subscribe(function (data) {
            console.log(data);
            _this.reviews = data;
        });
    };
    TournamentComponent.prototype.toggleDisabled = function () {
        this.isDisabled = true;
    };
    // onLinkClick(id){
    //   this.dataService.addCoordinates(id).subscribe(data => {
    //     if (data) {
    //       console.log("coordinates added")
    //     } else {
    //       console.log("something went wrong")
    //     }
    //   })
    // }
    TournamentComponent.prototype.refresh = function () {
        window.location.reload();
    };
    TournamentComponent.prototype.rateReview = function (id) {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            _this.id = profile.user._id;
            console.log(_this.id);
            _this.dataService.getReview(id).subscribe(function (review) {
                console.log(review[0].raters.length);
                if (review[0].raters.length > 0) {
                    for (var i = 0; i < review[0].raters.length; i++) {
                        if (_this.id == review[0].raters[i]) {
                            console.log(review[0].raters[i]);
                            _this.flashMessage.show("You may only rate a review once", {
                                cssClass: "alert-danger",
                                timeout: 3000
                            });
                            return false;
                        }
                        else {
                            _this.dataService.rateReview(id).subscribe(function (rating) {
                                if (rating) {
                                    console.log('review rated');
                                    window.location.reload();
                                }
                                else {
                                    console.log("something went wrongs");
                                }
                            });
                        }
                    }
                }
                else {
                    _this.dataService.rateReview(id).subscribe(function (rating) {
                        if (rating) {
                            console.log('review rated');
                            window.location.reload();
                        }
                        else {
                            console.log("something went wrongs");
                        }
                    });
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TournamentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tournament',
            template: __webpack_require__("../../../../../src/app/components/tournament/tournament.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tournament/tournament.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], TournamentComponent);
    return TournamentComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/tournament.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"ngOnInit\">\n<div *ngIf='user'>\n<h2 class='page-header'>Update</h2>\n<form (submit)='onUpdateSubmit()'>\n  <div class='form-group'>\n    <label>Student or Coach</label><br>\n    <input type='radio' [(ngModel)]='role' name='student' value='Student' class=\"form-check\">   Student\n    <input type='radio' [(ngModel)]='role' name='coach' value='Coach' class=\"form-check\">   Coach\n  </div>\n  <div class='form-group'>\n    <label>Affiliation</label><br>\n    <input type='text' [(ngModel)]='affiliation' name='affiliation' class=\"form-control\">\n  </div>\n  <div class='form-group'>\n    <label>First Name</label>\n    <input type='text' [(ngModel)]='firstname' name='firstname' class=\"form-control\">\n  </div>\n  <div class='form-group'>\n    <label>Last Name</label>\n    <input type='text' [(ngModel)]='lastname' name='lastname' class=\"form-control\">\n  </div>\n  <div class='form-group'>\n    <label>Email</label>\n    <input type= 'text' [(ngModel)]='email' name='email' class='form-control'>\n  </div>\n  <div class='form-group'>\n    <label>Username</label>\n    <input type= 'text' [(ngModel)]='username' name='username' class='form-control'>\n  </div>\n\n\n  <input type='submit' class = 'btn btn-primary' value='Submit' > <a class='btn' [routerLink]=\"['/profile']\" value = \"Cancel\">Cancel</a>\n"

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(validateService, flashMessages, authService, router, http) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.role = profile.user.role;
            _this.affiliation = profile.user.affiliation;
            _this.firstname = profile.user.firstname;
            _this.lastname = profile.user.lastname;
            _this.username = profile.user.username;
            _this.email = profile.user.email;
            _this.password = profile.user.password;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    UpdateComponent.prototype.refresh = function () {
        window.location.reload();
    };
    // deleteUser(id){
    //   var user = this.user;
    //   this.authService.deleteUser(id).subscribe(data => {
    //   if(data.n == 1){
    //       for(var i = 0;i < user.length;i++){
    //           if(user[i].id == id){
    //               user.splice(i, 1);
    //           }
    //       }
    //   }
    // })
    // }
    UpdateComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(8);
        console.log(this.id);
        var user = {
            role: this.role,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            username: this.username,
            affiliation: this.affiliation,
        };
        if (!this.validateService.validateUpdate(user)) {
            this.flashMessages.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessages.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.flashMessages.show("You are now updated", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/profile'])
            .then(function () {
            window.location.reload();
        });
        //Register New User
        this.authService.updateUser(this.id, user).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.flashMessages.show("You are now updated", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessages.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/update']);
            }
        });
    };
    UpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update',
            template: __webpack_require__("../../../../../src/app/components/update/update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _e || Object])
    ], UpdateComponent);
    return UpdateComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/update.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        console.log('Data Service Initialized...');
        this.user;
    }
    DataService.prototype.getPhotos = function (tournamentid) {
        return this.http.get("http://localhost:3000/users//photo/" + tournamentid)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.addTournament = function (tournament) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/addtournament', tournament, { headers: headers }).map(function (res) { return res.json(); });
    };
    // addCoordinates(tournamentid){
    //     let headers = new Headers();
    //     headers.append("Content-Type", 'application/json');
    //     return this.http.post('http://localhost:3000/users/addcoordinates/' + tournamentid, {headers:headers}).map(res => res.json());
    // }
    DataService.prototype.editTournament = function (tournamentid, tournament) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/edittournament/' + tournamentid, tournament, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteTournament = function (tournamentid) {
        return this.http.post('http://localhost:3000/users/deletetournament/' + tournamentid).map(function (res) { return res.json(); });
    };
    DataService.prototype.addReview = function (review, tournamentid) {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.id = profile.user._id;
            console.log(_this.user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append("Content-Type", 'application/json');
            return _this.http.post('http://localhost:3000/users/addreview/' + tournamentid + '/' + _this.id, review, { headers: headers }).map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.editReview = function (review, reviewid) {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.id = profile.user._id;
            console.log(_this.user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append("Content-Type", 'application/json');
            return _this.http.post('http://localhost:3000/users/editreview/' + reviewid + '/' + _this.id, review, { headers: headers }).map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.averageReviews = function (tournamentid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/averagereviews/' + tournamentid, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.addReply = function (reply, reviewid) {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.id = profile.user._id;
            console.log(_this.user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append("Content-Type", 'application/json');
            return _this.http.post('http://localhost:3000/users/addreply/' + reviewid + '/' + _this.id, reply, { headers: headers }).map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.rateReview = function (reviewid) {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.id = profile.user._id;
            console.log(_this.user);
            return _this.http.post("http://localhost:3000/users/helpful/" + reviewid + "/" + _this.id).map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.reportReview = function (report, reviewid) {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.id = profile.user._id;
            console.log(_this.user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append("Content-Type", 'application/json');
            return _this.http.post('http://localhost:3000/users/reportreview/' + reviewid + '/' + _this.id, report, { headers: headers }).map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.getAllTournaments = function () {
        return this.http.get("http://localhost:3000/users/getalltournaments")
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getTournament = function (tournamentid) {
        return this.http.get("http://localhost:3000/users/gettournament/" + tournamentid)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getReview = function (reviewid) {
        return this.http.get("http://localhost:3000/users/getreview/" + reviewid)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getReviews = function (tournamentid) {
        return this.http.get("http://localhost:3000/users/getreviews/" + tournamentid)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getUserReviews = function () {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.id = profile.user._id;
            console.log(_this.user);
            return _this.http.get('http://localhost:3000/users/getuserreviews/' + _this.id).map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.getReplies = function (reviewid) {
        return this.http.get("http://localhost:3000/users/getreplies/" + reviewid)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.ngOnInit = function () {
        this.addReview().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.editReview().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.addReply().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.getUserReviews().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.rateReview().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object])
    ], DataService);
    return DataService;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/data.service.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.emailValidation = function (url) {
        return this.http.get("http://localhost:3000/users/email-verification/" + url)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUser = function (id, user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/update/' + id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        return this.http.delete('http://localhost:3000/users/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgotUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/forgot', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetUser = function (token, user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/reset/' + token, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.findUsers = function () {
        return this.http.get("http://localhost:3000/users/contacts")
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append("Authorization", this.authToken);
        headers.append("Content-Type", 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
        console.log(token);
    };
    AuthService.prototype.loggedIn = function () {
        //console.log(tokenNotExpired());
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.role == undefined || user.firstname == undefined || user.lastname == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.affiliation == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateUpdate = function (user) {
        if (user.role == undefined || user.firstname == undefined || user.lastname == undefined || user.email == undefined || user.username == undefined || user.affiliation == undefined || user.affiliation == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateTournament = function (tournament) {
        if (tournament.name == undefined || tournament.startdate == undefined || tournament.enddate == undefined || tournament.screws == undefined || tournament.link == undefined || tournament.address == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/kevinyin/Documents/Programming/tourneyreview/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map