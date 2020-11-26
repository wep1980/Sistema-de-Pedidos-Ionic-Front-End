webpackJsonp([6],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Controlador da pagina de escolha de pagamentos



var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.parcelas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Ao selecionar o numero de parcelas, sera armazenado aqui 
        this.pedido = this.navParams.get('pedido'); // Pega o objeto pedido que vem de outra pagina
        // console.log(this.pedido);
        // foi feito tambem na pagina de signup
        this.formGroup = this.formBuilder.group({
            numeroDeParcelas: [1, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            // pagamentoComCartao -> igual esta no backend
            "@type": ["pagamentoComCartao", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    PaymentPage.prototype.nextPage = function () {
        this.pedido.pagamento = this.formGroup.value; // Pegando a forma de pagamento do formulario
        //console.log(this.pedido);
        // setRoot()-> É utilizado pq essa mesma pagina sera utilizada para mostrar(SEU PEDIDO FOI REGISTRADO, CODIDO TAL) então se tiver a seta para voltar vai ficar inconsistente pq o pedido ja vai ter sido registrado
        this.navCtrl.setRoot('OrderConfirmationPage', { pedido: this.pedido });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\payment\payment.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Forma de pagamento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="nextPage(); $event.preventDefault()">\n    <ion-list radio-group formControlName="@type">\n      <ion-list-header>\n        Tipo de pagamento\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Pagamento com cartão</ion-label>\n        <ion-radio checked="true" value="pagamentoComCartao"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pagamento com boleto</ion-label>\n        <ion-radio value="pagamentoComBoleto"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="formGroup.value[\'@type\'] == \'pagamentoComCartao\'">\n      <ion-label stacked>Parcelas no boleto</ion-label>\n      <ion-select formControlName="numeroDeParcelas">\n        <ion-option *ngFor="let n of parcelas; first as f" [value]="n" [selected]="f">{{n}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Próximo</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=6.js.map