webpackJsonp([4],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAddressPageModule", function() { return PickAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_address__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PickAddressPageModule = /** @class */ (function () {
    function PickAddressPageModule() {
    }
    PickAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pick_address__["a" /* PickAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pick_address__["a" /* PickAddressPage */]),
            ],
        })
    ], PickAddressPageModule);
    return PickAddressPageModule;
}());

//# sourceMappingURL=pick-address.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cliente_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Controlador da pagina de endereços do cliente, armazena os dados do pedido





var PickAddressPage = /** @class */ (function () {
    function PickAddressPage(navCtrl, navParams, storage, clienteService, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.clienteService = clienteService;
        this.cartService = cartService;
    }
    PickAddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser(); // pega o usario que esta logado no localStorage
        if (localUser && localUser.email) {
            this.clienteService.findByEmail(localUser.email) // Faz a busca por email
                .subscribe(function (response) {
                _this.items = response['enderecos']; // E pega os endereços do cliente. Esta entre ['enderecos'] pq assim fica livre de erro do compilador e essa resposta que vem do backend
                var cart = _this.cartService.getCart(); // Variavel que recebe o carrinho
                /**
                 * Estrutura que precisa ser montada para armazenar os dados de um pedido
       * {
      "cliente" : {"id" : 1},           // PARTE 1
      "enderecoDeEntrega" : {"id" : 1},
      "pagamento" : {
      "numeroDeParcelas" : 10,
      "@type": "pagamentoComCartao"
      },
      "itens" : [
      {
      "quantidade" : 2,       // PARTE 4
      "produto" : {"id" : 3}  // PARTE 4
      },
      {
      "quantidade" : 1,       // PARTE 4
      "produto" : {"id" : 1}  // PARTE 4
      }
      ]
      }
      */
                _this.pedido = {
                    cliente: { id: response['id'] },
                    enderecoDeEntrega: null,
                    pagamento: null,
                    /**
                     * Os itens do pedido são os itens do carrinho que precisam ser transformados em outro formato.
                     * Percorre a lista de itens do carrinho convertendo cada objeto para o novo objeto do tipo item pedido - PARTE 4
                     *
                     */
                    itens: cart.items.map(function (x) { return { quantidade: x.quantidade, produto: { id: x.produto.id } }; }) // PARTE 4
                };
            }, function (error) {
                if (error.status == 403) {
                    _this.navCtrl.setRoot('HomePage');
                }
            });
        }
        else {
            this.navCtrl.setRoot('HomePage');
        }
    };
    /**
     * Metodo que redireciona a pagina depois de ter selecionado o endereço passando como parametro o objeto pedido
     * @param item
     */
    PickAddressPage.prototype.nextPage = function (item) {
        this.pedido.enderecoDeEntrega = { id: item.id };
        //console.log(this.pedido);
        this.navCtrl.push('PaymentPage', { pedido: this.pedido });
    };
    PickAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pick-address',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\pick-address\pick-address.html"*/'<!--Pagina de endereços do Cliente-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Fechamento de pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n          Selecione um endereço\n        </ion-list-header>\n        <!--(click)="nextPage(item)"-> Passa o endereço clicado como argumento -->\n        <button ion-item *ngFor="let item of items" (click)="nextPage(item)">\n            <h2>{{item.logradouro}}, {{item.numero}}</h2>\n            <p>{{item.complemento}} {{item.bairro}} CEP {{item.cep}}</p>\n            <p>{{item.cidade.nome}}, {{item.cidade.estado.nome}}</p>\n        </button>\n      </ion-list>\n</ion-content>'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\pick-address\pick-address.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_domain_cliente_service__["a" /* ClienteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_domain_cliente_service__["a" /* ClienteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__["a" /* CartService */]) === "function" && _e || Object])
    ], PickAddressPage);
    return PickAddressPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=pick-address.js.map

/***/ })

});
//# sourceMappingURL=4.js.map