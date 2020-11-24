webpackJsonp([4],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(694);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(152);
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
     * menu: MenuController -> Injeção do objeto que controla o menu da aplicação
     * auth: AuthService -> injeção do objeto que conbtrola a autenticação
     */
    function HomePage(navCtrl, menu, auth) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.auth = auth;
        /**Sera feito o binding desse objeto, ou seja sera capturado os dados da tela de login */
        this.creds = {
            email: "",
            senha: ""
        };
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
     * Método de ciclo de vida do token que permite o usuario entrar no app sem logar caso o token ainda esteja valido
     */
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.refreshToken().subscribe(function (response) {
            _this.auth.successfulLogin(response.headers.get('Authorization'));
            _this.navCtrl.setRoot('CategoriasPage');
        }, function (error) { });
    };
    /**
     * Metodo que faz a navegação da pagina homePage para CategoriasPage
     *
     * this.navCtrl -> Para acessar qualquer elemento de uma classe e necessario chamar o this. antes
     * push() -> Método que chama outra pagina -- Empilha uma pagina em cima da outra
     */
    HomePage.prototype.login = function () {
        var _this = this;
        this.auth.authenticate(this.creds).subscribe(function (response) {
            _this.auth.successfulLogin(response.headers.get('Authorization'));
            //console.log(response.headers.get('Authorization')); // Confirma se o cabeçalho veio na resposta
            _this.navCtrl.setRoot('CategoriasPage'); // Navegação sem empilhamento
            // this.navCtrl.push('CategoriasPage'); // Navegação com empilhamento
        }, function (error) { });
        //console.log(this.creds);
    };
    HomePage.prototype.signup = function () {
        // push() -> metodo que empilha a pagina e possui o botao de voltar
        this.navCtrl.push('SignupPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\home\home.html"*/'<!-- PRIMEIRA PAGINA, PAGINA INICIAL DE LOGIN OU REGISTRO-->\n<ion-content padding>\n\n  <h3>Sistema de pedidos</h3>\n\n  <img src="assets/imgs/logo3.png" alt="logo">\n\n  <form action="">\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <!-- Binding de atributo de elemento HTML [] com o de evento () -->\n      <ion-input [(ngModel)]="creds.email" name="email" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Senha</ion-label>\n      <ion-input [(ngModel)]="creds.senha" name="senha" type="password"></ion-input>\n    </ion-item>\n    <!-- (click)="login()" -> Método login associado ao click do botão -->\n    <button ion-button block (click)="login()">Entrar</button> \n  </form>\n  <button ion-button block outline (click)="signup()">Registrar</button>\n\n\n</ion-content>'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map