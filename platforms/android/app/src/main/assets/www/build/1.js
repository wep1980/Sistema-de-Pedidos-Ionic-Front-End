webpackJsonp([1],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageModule", function() { return OrderConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_pedido_service__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_confirmation__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderConfirmationPageModule = /** @class */ (function () {
    function OrderConfirmationPageModule() {
    }
    OrderConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__order_confirmation__["a" /* OrderConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__order_confirmation__["a" /* OrderConfirmationPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_domain_pedido_service__["a" /* PedidoService */]
            ]
        })
    ], OrderConfirmationPageModule);
    return OrderConfirmationPageModule;
}());

//# sourceMappingURL=order-confirmation.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PedidoService = /** @class */ (function () {
    function PedidoService(http) {
        this.http = http;
    }
    /**
     * Metodo que insere um pedido
     * @param obj
     */
    PedidoService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/pedidos", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PedidoService);
    return PedidoService;
}());

//# sourceMappingURL=pedido.service.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_cliente_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cart_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_pedido_service__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderConfirmationPage = /** @class */ (function () {
    function OrderConfirmationPage(navCtrl, navParams, clienteService, cartService, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteService = clienteService;
        this.cartService = cartService;
        this.pedidoService = pedidoService;
        // Carregando o pedido no construtor - Passa o pedido como parametro de uma pagina para outra  
        this.pedido = this.navParams.get('pedido');
    }
    OrderConfirmationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cartItems = this.cartService.getCart().items; // Carrega os itens do carrinho
        this.clienteService.findById(this.pedido.cliente.id) // Busca o id do cliente que esta no objeto pedido
            .subscribe(function (response) {
            _this.cliente = response;
            // No objeto de pedido tem somente o id, para pegar os dados e chamada a funcao que busca os endereços atraves do id do endereço de entrega na lista dos endereços do cliente
            _this.endereco = _this.findEndereco(_this.pedido.enderecoDeEntrega.id, response['enderecos']);
        }, function (error) {
            _this.navCtrl.setRoot('HomePage'); // se acontecer algum erro e redirecionado para pagina inicial
        });
    };
    /**
     * Função que procura os endereços
     * @param id
     * @param list
     */
    OrderConfirmationPage.prototype.findEndereco = function (id, list) {
        var position = list.findIndex(function (x) { return x.id == id; }); // Encontra a posição do objeto x tal que x.id seja igual ao id passado por parametro
        return list[position];
    };
    // Mostra o valor total do pedido
    OrderConfirmationPage.prototype.total = function () {
        return this.cartService.total();
    };
    OrderConfirmationPage.prototype.checkout = function () {
        var _this = this;
        this.pedidoService.insert(this.pedido)
            .subscribe(function (response) {
            _this.cartService.createOrClearCart(); // Limpa o carrinho depois de salvar o pedido no BD 
            //console.log(response.headers.get('location')); // Pegando o location do headers do novo recurso salvo(Postman) -- Para o location funcionar no angular, no cap.8 aula 95 é ensinado como expor o location
            _this.codpedido = _this.extractId(response.headers.get('location')); // Extrai o id da URL que esta contida em location do novo pedido salvo
        }, function (error) {
            if (error.status == 403) {
                _this.navCtrl.setRoot('HomePage');
            }
        });
    };
    /**
     * Metodo para voltar a pagina de carrinho
     */
    OrderConfirmationPage.prototype.back = function () {
        this.navCtrl.setRoot('CartPage');
    };
    /**
     * Metodo que pega o id da URL contida no location
     * @param location
     */
    OrderConfirmationPage.prototype.extractId = function (location) {
        var position = location.lastIndexOf('/'); // achando a ultima posição do subString informado no ('/')
        return location.substring(position + 1, location.length); // recorta o caracter que estiver na frente da /
    };
    /**
     * Retorna para a pagina de categorias
     */
    OrderConfirmationPage.prototype.home = function () {
        this.navCtrl.setRoot('CategoriasPage');
    };
    OrderConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-confirmation',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\order-confirmation\order-confirmation.html"*/'<!--Tela de confirmação de pedido-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="codpedido">Pedido registrado!</ion-title> <!--Se tiver o codigo do pedido sera mostrado -->\n    <ion-title *ngIf="!codpedido">Confira seu pedido</ion-title> <!--Se não tiver o codigo do pedido ainda sera mostrado -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="!codpedido"> <!--Esse bloco sera mostrado antes de confirmar o pedido -->\n\n  <ion-card>\n    <ion-card-header>\n      Itens do pedido\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item *ngFor="let item of cartItems">\n        <ion-thumbnail item-start>\n          <img [src]="item.produto.imageUrl || \'assets/imgs/prod.jpg\'">\n        </ion-thumbnail>\n        <h2>{{item.produto.nome}}</h2>\n        <p>{{item.produto.preco | currency}}</p>\n        <p class="nolinebreak">{{item.quantidade}}</p>\n        <p item-end>{{item.produto.preco * item.quantidade | currency}}</p>\n      </ion-item> \n\n      <ion-item>\n        <h2>Total</h2>\n        <h2 item-end>{{total() | currency}}</h2>\n      </ion-item>\n    </ion-list> \n  </ion-card>\n\n  <ion-card>\n      <ion-card-header>\n        Cliente\n      </ion-card-header>\n      <ion-item>\n        <h2>{{cliente?.nome}}</h2>\n        <p>{{cliente?.email}}</p>\n      </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Endereço de entrega\n    </ion-card-header>\n\n    <ion-item>\n      <h2>{{endereco?.logradouro}}, {{endereco?.numero}}</h2>\n      <p>{{endereco?.complemento}} {{endereco?.bairro}} CEP {{endereco?.cep}}</p>\n      <p>{{endereco?.cidade.nome}}, {{endereco?.cidade.estado.nome}}</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Pagamento\n    </ion-card-header>\n\n    <ion-item *ngIf="pedido.pagamento[\'@type\']==\'pagamentoComCartao\'">\n      <h3>Pagamento com cartão</h3>\n      <p>Parcelas: {{pedido.pagamento.numeroDeParcelas}}</p>\n    </ion-item>\n    <ion-item *ngIf="pedido.pagamento[\'@type\']==\'pagamentoComBoleto\'">\n      <h3>Pagamento com boleto</h3>\n    </ion-item>\n  </ion-card>\n\n  <!--block-> Ocupa toda a largura-->\n  <button ion-button block (click)="checkout()">Confirmar pedido</button>\n  <button ion-button block outline (click)="back()">Voltar</button>\n\n  </div>\n\n  <div *ngIf="codpedido"> <!--Depois de confirmar o pedido o bloco aparece -->\n    <ion-card>\n        <ion-card-header>\n          Seu pedido foi registrado!\n        </ion-card-header>\n        <ion-item>\n          <h2>Código do pedido: {{codpedido}}</h2>\n          <p>Verifique seu email</p>\n        </ion-item>\n    </ion-card>\n    <button ion-button block outline (click)="home()">Voltar</button> <!-- retorna para a pagina de categorias -->\n  </div>\n  </ion-content>\n\n'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\order-confirmation\order-confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_pedido_service__["a" /* PedidoService */]])
    ], OrderConfirmationPage);
    return OrderConfirmationPage;
}());

//# sourceMappingURL=order-confirmation.js.map

/***/ })

});
//# sourceMappingURL=1.js.map