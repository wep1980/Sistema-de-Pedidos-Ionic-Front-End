webpackJsonp([0],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
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
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.signupUser = function () {
        console.log('Enviou o form');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\signup\signup.html"*/'<!--Pagina de cadastro para novos usuarios-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <!-- $event.preventDefault() -> Previne de a pagina ser enviada, o controle sera feito na mão -->\n  <form (ngSubmit)="signupUser(); $event.preventDefault()">\n\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input name="nome" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email*</ion-label>\n      <ion-input name="email" type="text"></ion-input>\n    </ion-item>\n\n      <ion-list radio-group name="tipo">\n        <ion-list-header>\n          Tipo de cliente\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Pessoa física</ion-label>\n          <ion-radio checked="true" value="1"></ion-radio>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Pessoa jurídica</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n    <ion-item>\n      <ion-label stacked>CPF ou CNPJ</ion-label>\n      <ion-input name="cpfOuCnpj" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Senha*</ion-label>\n      <ion-input name="senha" type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Logradouro*</ion-label>\n      <ion-input name="logradouro" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Número*</ion-label>\n      <ion-input name="numero" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Complemento</ion-label>\n      <ion-input name="complemento" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Bairro</ion-label>\n      <ion-input name="bairro" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>CEP*</ion-label>\n      <ion-input name="cep" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefone 1*</ion-label>\n      <ion-input name="telefone1" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefone 2</ion-label>\n      <ion-input name="telefone2" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefone 3</ion-label>\n      <ion-input name="telefone3" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Estado*</ion-label>\n      <ion-select name="estadoId" (ionChange)="updateCidades()">\n        <ion-option value="1">Minas Gerais</ion-option>\n        <ion-option value="2">São Paulo</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Cidade*</ion-label>\n      <ion-select name="cidadeId">\n        <ion-option value="1">Uberlândia</ion-option>\n        <ion-option value="2">Campinas</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <button ion-button block type="submit">Criar conta</button>\n    \n  </form>\n</ion-content>'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map