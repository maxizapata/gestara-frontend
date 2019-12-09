webpackJsonp([8],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, navParams, coopProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coopProv = coopProv;
        this.categories = [];
        this.categories = coopProv.categories;
    }
    CategoriesPage.prototype.goHome = function (category) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
            set_categ: category.name
        });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/categories/categories.html"*/'\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title class="font-moserrat">Categorías</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let category of categories" \n    (click)="goHome(category)" class="font-moserrat">\n      <p>{{ category.name_pretty }}</p>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__["a" /* CoopProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.count = 0;
        this.picture = this.navParams.get('logo');
        this.name = this.navParams.get('name');
        this.description = this.navParams.get('description');
        this.phone = this.navParams.get('phone');
        this.web = this.navParams.get('web');
        this.facebook = this.navParams.get('facebook');
        this.instagram = this.navParams.get('instagram');
        this.email = this.navParams.get('email');
        this.skype = this.navParams.get('skype');
        this.whatsapp = this.navParams.get('whatsapp');
        this.latitude = this.navParams.get('map_latitude');
        this.longitude = this.navParams.get('map_longitude');
        this.address = this.navParams.get('address');
    }
    DetailPage.prototype.goMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */], {
            name: this.name,
            address: this.address,
            latitude: this.latitude,
            longitude: this.longitude,
        });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title class="title">{{ name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="descriptiongeneral">\n  <div>\n    <img src="{{ picture }}" class="picture">\n  </div>\n  <!--<div>\n    <h1 class="title">{{ name }}</h1>\n  </div>-->\n  <div>\n    <h4 class="description">{{ description }}</h4>\n  </div>\n\n  <ion-grid >\n  <ion-row justify-content-center  style="height: 100%">\n        \n   \n          <ion-col  col-2 *ngIf="phone">\n            <a href="tel:{{ phone }}"><button class="btn"><img src="../../assets/imgs/phone.png" ></button></a>\n          </ion-col>\n\n          <ion-col  col-2 *ngIf="web">\n            <a href="http://{{ web }}"><button class="btn"><img src="../../assets/imgs/www.png" ></button></a>\n          </ion-col>\n\n          <ion-col  col-2 *ngIf="facebook">\n            <a href="http://facebook.com/{{ facebook }}"><button class="btn"><img src="../../assets/imgs/facebook.png" ></button></a>\n          </ion-col>\n\n\n          <ion-col  col-2 *ngIf="instagram">\n            \n            <a href="http://instagram.com/{{ instagram }}"><button class="btn"><img src="../../assets/imgs/ig.png" ></button></a>\n          </ion-col>\n\n          <ion-col  col-2 *ngIf="email">\n            <a href="mailto:{{ email }}"><button class="btn"><img src="../../assets/imgs/mail.png" ></button></a>\n          </ion-col>\n\n          <ion-col  col-2 *ngIf="skype">\n            <a href="skype:{{ skype }}"><button class="btn"><img src="../../assets/imgs/skype.png" ></button></a>\n          </ion-col>\n\n          <ion-col  col-2 *ngIf="whatsapp">\n            <a href="https://api.whatsapp.com/send?phone={{ whatsapp }}"><button class="btn"><img src="../../assets/imgs/whatsapp.png" ></button></a>\n          </ion-col>\n\n       \n          <ion-col  col-2 *ngIf="latitude!=0">\n            <button class="btn" (click)="goMap()"><img src="../../assets/imgs/map.png" ></button>\n          </ion-col>\n\n   </ion-row>\n  </ion-grid>\n\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = /** @class */ (function () {
    function MapPage(navParams) {
        this.navParams = navParams;
        this.lat = Number(this.navParams.get('latitude'));
        this.lng = Number(this.navParams.get('longitude'));
        this.address = this.navParams.get('address');
        this.name = this.navParams.get('name');
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var latitude = this.lat;
        var longitude = this.lng;
        // create a new map by passing HTMLElement
        var mapEle = document.getElementById('map');
        // create LatLng object
        var myLatLng = { lat: latitude, lng: longitude };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: _this.map,
                title: _this.navParams.get('name')
            });
            mapEle.classList.add('show-map');
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title class="font-moserrat">\n      {{ this.address }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, request, controller) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = request;
        this.controller = controller;
        this.regData = { username: '',
            password1: '',
            password2: '',
            email: '',
            first_name: '',
            last_name: '',
            mobile: '',
            group: '',
        };
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        this.regData.username = this.regData.email;
        this.controller.presentLoading('Registrando datos, por favor espere');
        var headers = { 'Content-Type': 'application/json' };
        this.request.requestsPost('signup', headers, this.regData).then(function (result) {
            _this.controller.dismissLoading();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (err) {
            _this.controller.dismissLoading();
            _this.controller.presentAlert('Error', 'Verifique los datos y vuelva a intentar.');
        });
    };
    SignupPage.prototype.goLanding = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__landing_landing__["a" /* LandingPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/signup/signup.html"*/'<ion-content padding class="background">\n  <div>\n    <img class="header_logo" src="../../assets/imgs/gestara-logo.png">  \n  </div>\n  <form (submit)="doSignup()">\n    <ion-item class="form">\n      <ion-label floating>Email</ion-label>\n      <ion-input [(ngModel)]="regData.email" name="email" type="email"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n      <ion-label floating>Nombre</ion-label>\n      <ion-input [(ngModel)]="regData.first_name" name="firts_name" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n        <ion-label floating>Apellido</ion-label>\n        <ion-input [(ngModel)]="regData.last_name" name="last_name" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n      <ion-label floating>Número Telefónico</ion-label>\n      <ion-input [(ngModel)]="regData.mobile" name="mobile" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input [(ngModel)]="regData.password1" name="password1" type="password"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n      <ion-label floating>Repite tu contraseña</ion-label>\n      <ion-input [(ngModel)]="regData.password2" name="password2" type="password"></ion-input>\n    </ion-item>  \n    <br>\n    <button ion-button block type="Enviar">\n      Completar registro\n    </button>\n  </form>\n  <button ion-button block type="Cancelar" color="gestara-red" (click)="goLanding()">\n    Cancelar\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_controller_controller__["a" /* ControllerProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categories/categories.module": [
		287,
		7
	],
	"../pages/detail/detail.module": [
		288,
		6
	],
	"../pages/home/home.module": [
		289,
		5
	],
	"../pages/landing/landing.module": [
		290,
		4
	],
	"../pages/login/login.module": [
		291,
		3
	],
	"../pages/map/map.module": [
		292,
		2
	],
	"../pages/select-login/select-login.module": [
		293,
		1
	],
	"../pages/signup/signup.module": [
		294,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_request_request__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_controller_controller__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_user__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_coop_coop__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_select_login_select_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pages





// Providers







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                /* ONLY FOR DEV
                */
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_select_login_select_login__["a" /* SelectLoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-login/select-login.module#SelectLoginPageModule', name: 'SelectLoginPage', segment: 'select-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_select_login_select_login__["a" /* SelectLoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_coop_coop__["a" /* CoopProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_request_request__["a" /* RequestProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_controller_controller__["a" /* ControllerProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_coop_coop__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, alertCrtl, coopProv, user) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCrtl = alertCrtl;
        this.coopProv = coopProv;
        this.user = user;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__["a" /* LandingPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
            statusBar.styleDefault();
            coopProv.inicializeCategoies();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/app/app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_coop_coop__["a" /* CoopProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_login_select_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams, alert, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.user = user;
    }
    LandingPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
            set_categ: 'todas'
        });
    };
    LandingPage.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_login_select_login__["a" /* SelectLoginPage */]);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/landing/landing.html"*/'<ion-content class="background">\n  <div>\n  <img class="header_logo" src="../../assets/imgs/gestara-logo.png">\n\n  \n  <ion-slides pager autoplay="5000" loop="true" class="white_simple_text">\n    <!--\n    <ion-slide class="white_simple_text" *ngIf="this.user.isAuthenticated()">\n      <p class="hi" >Hola</p>\n      <p class="white_simple_text" class="name">{{ name }}</p>      \n    </ion-slide>\n    -->\n    <ion-slide class="white_simple_text">\n      <p>Somos una organización de un amplio y heterogéneo sector económico y un fiel canal de expresión de la Economía Social Popular y Solidaria.</p>\n    </ion-slide>\n    <ion-slide class="white_simple_text">\n      <p>Estamos en constante generación de ámbitos de discusión y búsqueda de soluciones para los sectores del trabajo y la producción.</p>\n    </ion-slide>\n    <ion-slide class="white_simple_text">\n      <p>Estamos conformados por cooperativas, monotributistas, microemprendedores y diversos agrupamientos y manifestaciones del trabajo autogestionado.</p>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n  <ion-footer no-shadow no-border padding>\n    <button ion-button block color="gestara-dark" (click)="goHome()" class="login_button">CATÁLOGO</button>\n    <button ion-button block color="gestara-blue" (click)="goHome()" class="login_button">EVENTOS</button>\n    <button ion-button block color="gestara-blue2" (click)="goHome()" class="login_button">RESERVAS</button>\n    <button ion-button outline block color="white" (click)="goLogin()" class="login_button" *ngIf="this.user.isAuthenticated()===false">INICIAR SESION</button>\n    <button ion-button outline block color="white" (click)="user.logout()" class="login_button" *ngIf="this.user.isAuthenticated()">CERRAR SESIÓN</button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoopProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CoopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CoopProvider = /** @class */ (function () {
    function CoopProvider(http) {
        this.http = http;
        this.categories = [];
        this.urlApi = 'http://16887.l.time4vps.cloud:8000/';
    }
    CoopProvider.prototype.getCoops = function () {
        return this.http.get(this.urlApi + 'api/v1/cooperatives/');
    };
    CoopProvider.prototype.getCategories = function () {
        return this.http.get(this.urlApi + 'api/v1/categories/');
    };
    CoopProvider.prototype.inicializeCategoies = function () {
        var _this = this;
        this.getCategories()
            .subscribe(function (data) {
            _this.categories = data;
        }, function (error) {
            console.error(error);
        });
    };
    CoopProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CoopProvider);
    return CoopProvider;
}());

//# sourceMappingURL=coop.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestProvider = /** @class */ (function () {
    function RequestProvider(http) {
        this.http = http;
        this.domain = '192.168.0.78:8000';
    }
    RequestProvider.prototype.set_url = function (action, vehicle) {
        var http = "http://";
        var ws = "ws://";
        var url;
        if (action === 'login') {
            url = http + this.domain + "/accounts/login/";
        }
        else if (action === 'signup') {
            url = http + this.domain + "/accounts/signup/";
        }
        else if (action === 'user_info') {
            url = http + this.domain + "/accounts/user_info/";
        }
        return url;
    };
    RequestProvider.prototype.requestsPost = function (action, headers, data) {
        var _this = this;
        var url = this.set_url(action);
        console.log(url);
        return new Promise(function (resolve, reject) {
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](headers)
            };
            _this.http.post(url, JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RequestProvider.prototype.resquestGet = function (action, headers) {
        var url = this.set_url(action);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](headers)
        };
        return this.http.get(url, httpOptions);
    };
    RequestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RequestProvider);
    return RequestProvider;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_request__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, requestProvider) {
        this.http = http;
        this.requestProvider = requestProvider;
    }
    UserProvider.prototype.getUserInfo = function () {
        var _this = this;
        if (this.isAuthenticated()) {
            console.log('Running getUserInfo');
            var token_1 = window.localStorage.getItem('token');
            var headers = { 'Content-Type': 'application/json', 'Authorization': 'Token ' + token_1 };
            this.requestProvider.resquestGet('user_info', headers)
                .subscribe(function (data) {
                console.log('Datos de usuario...');
                _this.id = data['id'];
                _this.email = data['email'];
                _this.first_name = data['first_name'];
                _this.last_name = data['last_name'];
                _this.group = data['group'];
                _this.photo = data['photo'];
                _this.token = token_1;
            }, function (error) {
                console.log(error);
            });
        }
        else
            (console.log('No set token'));
    };
    UserProvider.prototype.isAuthenticated = function () {
        if (window.localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    };
    UserProvider.prototype.logout = function () {
        localStorage.clear();
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__request_request__["a" /* RequestProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    //constructor(public navCtrl: NavController) {}
    function HomePage(navCtrl, navParams, coopProv, alertCtrl, loadCrtl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coopProv = coopProv;
        this.alertCtrl = alertCtrl;
        this.loadCrtl = loadCrtl;
        this.platform = platform;
        this.cooperatives = [];
        this.cooperatives_filter = [];
        this.category_selected = this.navParams.get('set_categ');
        this.enableLoad = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.inicializeCoops();
    };
    HomePage.prototype.inicializeCoops = function () {
        var _this = this;
        //this.showLoader()
        this.enableLoad = true;
        this.coopProv.getCoops()
            .subscribe(function (data) {
            //this.loading.dismiss()
            _this.enableLoad = false;
            _this.cooperatives = data;
            _this.cooperatives_filter = data;
            _this.onFilter(_this.category_selected);
        }, function (error) {
            console.error(_this.showAlert());
        });
    };
    HomePage.prototype.goDetail = function (cooperative) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            name: cooperative.name,
            short_description: cooperative.short_description,
            description: cooperative.description,
            logo: cooperative.logo,
            web: cooperative.web,
            phone: cooperative.phone,
            facebook: cooperative.facebook,
            instagram: cooperative.instagram,
            email: cooperative.email,
            skype: cooperative.skype,
            address: cooperative.address,
            map_latitude: cooperative.map_latitude,
            map_longitude: cooperative.map_longitude,
            whatsapp: cooperative.whatsapp,
            category: cooperative.category[0]
        });
    };
    HomePage.prototype.filterCoops = function (param) {
        var val = param;
        if (val.trim() !== '') {
            this.cooperatives_filter = this.cooperatives.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.short_description.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        if (val.trim() === '') {
            this.inicializeCoops();
        }
    };
    HomePage.prototype.onFilter = function (varcategory) {
        // Only filter the technologies array IF the selection is NOT equal to value of all
        if (varcategory.trim() !== 'todas') {
            this.cooperatives_filter = this.cooperatives.filter(function (item) {
                if (Object.keys(item.category).length == 1) {
                    return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;
                }
                if (Object.keys(item.category).length == 2) {
                    return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
                        item.category[1].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;
                }
                if (Object.keys(item.category).length == 3) {
                    return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
                        item.category[1].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
                        item.category[2].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;
                }
                if (Object.keys(item.category).length == 4) {
                    return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
                        item.category[1].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
                        item.category[2].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
                        item.category[3].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;
                }
            });
        }
        /*else if (varcategory.trim() == 'todas')
        {
          this.inicializeCoops();
    
        }*/
    };
    HomePage.prototype.goCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadCrtl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    HomePage.prototype.resetCategories = function () {
        this.category_selected = 'todas';
        this.inicializeCoops();
    };
    HomePage.prototype.showAlert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Error de conexión',
            message: 'No se puede establecer conexión con el servidor. Revisa tu conexión a internet y vuelve a intentar.',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar color="blue">\n      <h2 class="gestara">\n          GESTARA\n      </h2>\n      <p class="gestarasub">Nuestro candidato es el trabajo</p>      \n  </ion-navbar>\n  <ion-navbar *ngIf="category_selected===\'todas\'">\n      <ion-searchbar  placeholder="Buscar" (ionInput)="filterCoops($event.target.value)" \n      background="primary" [showCancelButton]="false" cancelButtonText="Cancel"></ion-searchbar>\n  </ion-navbar>\n  <ion-navbar *ngIf="category_selected!==\'todas\'" class="categ_class" color="blue">\n    <p> {{ category_selected | uppercase}}</p>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="catalogue">\n  <ion-spinner *ngIf="enableLoad" name="dots" class="loading"></ion-spinner>\n  <ion-list>\n    <button ion-item *ngFor="let cooperative of cooperatives_filter" (click)="goDetail(cooperative)">\n      <ion-thumbnail item-start>\n        <img class="picture" src="{{cooperative.logo}}">\n      </ion-thumbnail>\n      <h2>{{cooperative.name}}</h2>\n      <p>{{cooperative.short_description}}</p>\n    </button>\n  </ion-list>\n\n\n  <ion-fab right bottom>\n    <button *ngIf="category_selected!==\'todas\'" ion-fab color="danger" (click)="resetCategories();"><ion-icon name="refresh"></ion-icon></button>\n    <button ion-fab color="blue" (click)="goCategories();"><ion-icon name="options"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__["a" /* CoopProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectLoginPage = /** @class */ (function () {
    function SelectLoginPage(navCtrl, navParams, facebook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
    }
    SelectLoginPage.prototype.goLanding = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
    };
    SelectLoginPage.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SelectLoginPage.prototype.onClickFacebook = function () {
        var _this = this;
        this.facebook.login(['public_profile', 'email'])
            .then(function (res) { return _this.getUserInfo(res.authResponse.userID); })
            .catch(function (e) { return console.log('hola'); });
    };
    SelectLoginPage.prototype.getUserInfo = function (userId) {
        var _this = this;
        console.log(this.facebook.getAccessToken());
        this.facebook.api('me?fields=' + ['name', 'email', 'first_name', 'last_name', 'picture.type(large)'].join(), null)
            .then(function (res) { return _this.setFacebookUserInfo(res); })
            .catch(function (e) { return _this.loginFacebookError(e); });
    };
    SelectLoginPage.prototype.setFacebookUserInfo = function (user) {
        this.user = user;
        console.log(this.user);
    };
    SelectLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-login',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/select-login/select-login.html"*/'<ion-content class="background">\n  <div>\n    <img class="header_logo" src="../../assets/imgs/gestara-logo.png">  \n  </div>\n  <div padding class="div_login">\n    <p class="white_simple_text">Iniciar sesión con:</p>\n    <button ion-button block color="gestara-dark" (click)="goLogin()">EMAIL</button>\n    <button ion-button block color="facebook-blue" (click)="onClickFacebook()">FACEBOOK</button>\n    <button ion-button clear block color="white" (click)="goLanding()" class="login_button">Volver</button>\n  </div>\n  <!--\n  <ion-footer no-shadow no-border padding>\n      <button ion-button outline block color="white" (click)="goLanding()" class="login_button">Volver</button>\n    </ion-footer>\n  -->\n</ion-content>\n'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/select-login/select-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
    ], SelectLoginPage);
    return SelectLoginPage;
}());

//# sourceMappingURL=select-login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_login_select_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_request_request__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_controller_controller__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Pages



// Providers



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, requestProvider, controllerProvider, user) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.requestProvider = requestProvider;
        this.controllerProvider = controllerProvider;
        this.user = user;
        this.loginData = { username: '', password: '' };
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var headers = { 'Content-Type': 'application/json' };
        this.controllerProvider.presentLoading('Cargando, por favor espere');
        this.requestProvider.requestsPost('login', headers, this.loginData).then(function (result) {
            _this.data = result;
            localStorage.setItem('token', _this.data.token);
            _this.user.getUserInfo();
            _this.controllerProvider.dismissLoading();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
        }, function (err) {
            _this.controllerProvider.dismissLoading();
            _this.controllerProvider.presentToast('Error de credenciales');
        });
    };
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.user.logout();
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__select_login_select_login__["a" /* SelectLoginPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/maxi/Apps/gestara/frontend/src/pages/login/login.html"*/'<ion-content padding class="background">\n  <div>\n    <img class="header_logo" src="../../assets/imgs/gestara-logo.png">  \n  </div>\n  <form (submit)="doLogin()">\n    <ion-item class="form">\n      <ion-label floating>Correo electrónico</ion-label>\n      <ion-input [(ngModel)]="loginData.username" name="username" type="email"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input [(ngModel)]="loginData.password" name="password" type="password"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button block type="submit">\n      Iniciar sesión\n    </button>\n  </form>\n  <button ion-button outline block color="white" (click)="goSignup()" class="login_button">Registrate</button>\n  <button ion-button clear block color="white" (click)="goBack()" class="login_button">Volver</button>\n</ion-content>'/*ion-inline-end:"/home/maxi/Apps/gestara/frontend/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_controller_controller__["a" /* ControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControllerProvider = /** @class */ (function () {
    function ControllerProvider(http, loadingCtrl, toastCtrl, alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    ControllerProvider.prototype.presentLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    ControllerProvider.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    ControllerProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ControllerProvider.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ControllerProvider);
    return ControllerProvider;
}());

//# sourceMappingURL=controller.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map