webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
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
 * Pagina controladora da home.html
 * OBS : Toda pagina HTML tem uma pagina controladora correspondente
 */
// Permite referenciar esta classe pelo nome dela atravez de String 'HomePage' flexibilizando o uso do lazy mode (CAREEGAMENTO TARDIO)
var HomePage = /** @class */ (function () {
    /**Para declarar injeção de dependencia em uma classe
     * basta declarar o objeto como parametro no construtor
     *
     * navCtrl: NavController -> injeção do objeto que controla a navegação entre as paginas
     */
    function HomePage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    /**
     * Método que desabilita o menu ao entrar na pagina de login
     */
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    /**
     * Método que habilita o menu ao sair da pagina de login
     */
    HomePage.prototype.ionViewDidLeave = function () {
        this.menu.swipeEnable(true);
    };
    /**
     * Metodo que faz a navegação da pagina homePage para CategoriasPage
     *
     * this.navCtrl -> Para acessar qualquer elemento de uma classe e necessario chamar o this. antes
     * push() -> Método que chama outra pagina -- Empilha uma pagina em cima da outra
     */
    HomePage.prototype.login = function () {
        // this.navCtrl.push('CategoriasPage'); // Navegação com empilhamento
        this.navCtrl.setRoot('CategoriasPage'); // Navegação sem empilhamento
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\home\home.html"*/'<ion-content padding>\n\n  <h3>Sistema de pedidos</h3>\n\n  <img src="assets/imgs/logo2.png" alt="logo">\n\n  <form action="">\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Senha</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n    <button ion-button block (click)="login()">Entrar</button> <!-- (click)="login()" -> Método login associado ao click do botão -->\n  </form>\n  <button ion-button block outline>Registrar</button>\n\n\n</ion-content>'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map