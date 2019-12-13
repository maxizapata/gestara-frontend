webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(51);
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
            selector: 'page-categories',template:/*ion-inline-start:"/home/maxi/apps/gestara/frontend/src/pages/categories/categories.html"*/'<!--\n  Generated template for the CategoriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title class="font-moserrat">Categorías</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let category of categories" \n    (click)="goHome(category)" class="font-moserrat">\n      <p>{{ category.name_pretty }}</p>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/apps/gestara/frontend/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__["a" /* CoopProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        this.twitter = this.navParams.get('twitter');
        this.email = this.navParams.get('email');
        this.skype = this.navParams.get('skype');
        this.whatsapp = this.navParams.get('whatsapp');
        this.latitude = this.navParams.get('map_latitude');
        this.longitude = this.navParams.get('map_longitude');
        this.address = this.navParams.get('address');
        this.off = this.navParams.get('off');
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
            selector: 'page-detail',template:/*ion-inline-start:"/home/maxi/apps/gestara/frontend/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="blue">\n    <ion-title class="title">{{ name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="descriptiongeneral">\n  <div>\n    <img src="{{ picture }}" class="picture">\n  </div>\n  <div>\n    <h4 class="description">{{ description }}</h4>\n  </div>\n\n  <ion-grid >\n  <ion-row justify-content-center  style="height: 100%">        \n    <ion-col  col-2 *ngIf="phone">\n      <a href="tel:{{ phone }}"><button class="btn"><img src="../../assets/imgs/phone.png" ></button></a>\n    </ion-col>\n\n    <ion-col  col-2 *ngIf="web">\n      <a href="http://{{ web }}"><button class="btn"><img src="../../assets/imgs/www.png" ></button></a>\n    </ion-col>\n\n    <ion-col  col-2 *ngIf="facebook">\n      <a href="http://facebook.com/{{ facebook }}"><button class="btn"><img src="../../assets/imgs/facebook.png" ></button></a>\n    </ion-col>\n\n    <ion-col  col-2 *ngIf="instagram">\n      <a href="http://instagram.com/{{ instagram }}"><button class="btn"><img src="../../assets/imgs/ig.png" ></button></a>\n    </ion-col>\n\n    <ion-col  col-2 *ngIf="twitter">\n      <a href="http://twitter.com/{{ twitter }}"><button class="btn"><img src="../../assets/imgs/twitter.jpg"></button></a>\n    </ion-col>\n\n    <ion-col  col-2 *ngIf="email">\n      <a href="mailto:{{ email }}"><button class="btn"><img src="../../assets/imgs/mail.png" ></button></a>\n    </ion-col>\n\n    <ion-col  col-2 *ngIf="skype">\n      <a href="skype:{{ skype }}"><button class="btn"><img src="../../assets/imgs/skype.png" ></button></a>\n    </ion-col>\n\n    <ion-col  col-2 *ngIf="whatsapp">\n      <a href="https://api.whatsapp.com/send?phone={{ whatsapp }}"><button class="btn"><img src="../../assets/imgs/whatsapp.png" ></button></a>\n    </ion-col>\n\n       \n    <ion-col  col-2 *ngIf="latitude!=0">\n      <button class="btn" (click)="goMap()"><img src="../../assets/imgs/map.png" ></button>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <div padding *ngIf="commonDiscount()">\n    <p class="off" padding>{{ off }}% de descuento para asociados</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/apps/gestara/frontend/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], DetailPage);
    return DetailPage;
    var _a, _b;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
            selector: 'page-map',template:/*ion-inline-start:"/home/maxi/apps/gestara/frontend/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title class="font-moserrat">\n      {{ this.address }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/maxi/apps/gestara/frontend/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
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
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    LandingPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
            set_categ: 'todas'
        });
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"/home/maxi/apps/gestara/frontend/src/pages/landing/landing.html"*/'<ion-header no-border>\n</ion-header>\n<ion-content class="landing"> \n  <div>\n    <img class="logo" src="../../assets/imgs/gestara-logo.png">\n    <ion-slides pager="true" autoplay="5000">\n      <ion-slide class="slides">\n        <p>Somos una organización de un amplio y heterogéneo sector económico y un fiel canal de expresión de la Economía Social Popular y Solidaria.</p>\n      </ion-slide>\n      <ion-slide class="slides">\n        <p>Estamos en constante generación de ámbitos de discusión y búsqueda de soluciones para los sectores del trabajo y la producción.</p>\n      </ion-slide>\n      <ion-slide class="slides">\n        <p>Estamos conformados por cooperativas, monotributistas, microemprendedores y diversos agrupamientos y manifestaciones del trabajo autogestionado.</p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <ion-footer padding no-border>\n    <button ion-button block full class="button" (click)="goHome()">Explora nuestro catálogo</button>\n  </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/apps/gestara/frontend/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categories/categories.module": [
		280,
		4
	],
	"../pages/detail/detail.module": [
		282,
		3
	],
	"../pages/home/home.module": [
		281,
		2
	],
	"../pages/landing/landing.module": [
		284,
		1
	],
	"../pages/map/map.module": [
		283,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_coop_coop__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                /* ONLY FOR DEV*/
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__["a" /* CategoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] }
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
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_coop_coop__["a" /* CoopProvider */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_coop_coop__ = __webpack_require__(46);
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
    function MyApp(platform, statusBar, splashScreen, app, alertCrtl, coopProv) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCrtl = alertCrtl;
        this.coopProv = coopProv;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/maxi/apps/gestara/frontend/src/app/app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/maxi/apps/gestara/frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_coop_coop__["a" /* CoopProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoopProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(102);
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
            twitter: cooperative.twitter,
            email: cooperative.email,
            skype: cooperative.skype,
            address: cooperative.address,
            map_latitude: cooperative.map_latitude,
            map_longitude: cooperative.map_longitude,
            whatsapp: cooperative.whatsapp,
            off: cooperative.off,
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
            selector: 'page-home',template:/*ion-inline-start:"/home/maxi/apps/gestara/frontend/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar color="blue">\n      <h2 class="gestara">\n          GESTARA\n      </h2>\n      <p class="gestarasub">Nuestro candidato es el trabajo</p>      \n  </ion-navbar>\n  <ion-navbar *ngIf="category_selected===\'todas\'">\n      <ion-searchbar  placeholder="Buscar" (ionInput)="filterCoops($event.target.value)" \n      background="primary" [showCancelButton]="false" cancelButtonText="Cancel"></ion-searchbar>\n  </ion-navbar>\n  <ion-navbar *ngIf="category_selected!==\'todas\'" class="categ_class" color="blue">\n    <p> {{ category_selected | uppercase}}</p>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="catalogue">\n  <ion-spinner *ngIf="enableLoad" name="dots" class="loading"></ion-spinner>\n  <ion-list>\n    <button ion-item *ngFor="let cooperative of cooperatives_filter" (click)="goDetail(cooperative)">\n      <ion-thumbnail item-start>\n        <img class="picture" src="{{cooperative.logo}}">\n      </ion-thumbnail>\n      <h2>{{cooperative.name}}</h2>\n      <p>{{cooperative.short_description}}</p>\n    </button>\n  </ion-list>\n\n\n  <ion-fab right bottom>\n    <button *ngIf="category_selected!==\'todas\'" ion-fab color="danger" (click)="resetCategories();"><ion-icon name="refresh"></ion-icon></button>\n    <button ion-fab color="blue" (click)="goCategories();"><ion-icon name="options"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/maxi/apps/gestara/frontend/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__["a" /* CoopProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_coop_coop__["a" /* CoopProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map