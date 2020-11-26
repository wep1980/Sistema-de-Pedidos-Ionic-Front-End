webpackJsonp([3],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutosPageModule = /** @class */ (function () {
    function ProdutosPageModule() {
    }
    ProdutosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */]),
            ],
        })
    ], ProdutosPageModule);
    return ProdutosPageModule;
}());

//# sourceMappingURL=produtos.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_produto_service__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProdutosPage = /** @class */ (function () {
    function ProdutosPage(navCtrl, navParams, produtoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoService = produtoService;
        this.loadingCtrl = loadingCtrl;
    }
    // Dados estaticos para testar a pagina
    ProdutosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var categoria_id = this.navParams.get('categoria_id');
        var loader = this.presentLoading(); // Chamando o loading
        // Capturando o dado que foi passado na navegação = categorias.ts showProdutos()
        // A resposta que vem do backend e um endpoint paginado, entao vira uma resposta diferente. -- ['content'] e o atributo que vem que carrega as categorias. TESTAR NO POSTMAN URL http://localhost:8080/produtos?categorias=2
        this.produtoService.findByCategoria(categoria_id).subscribe(function (response) {
            _this.items = response['content'];
            loader.dismiss(); // fecha a janela do loading
            _this.loadImageUrls();
        }, function (error) {
            loader.dismiss(); // fecha a janela do loading
        });
    };
    /**
     *
     */
    ProdutosPage.prototype.loadImageUrls = function () {
        var _loop_1 = function () {
            var item = this_1.items[i];
            this_1.produtoService.getSmallImageFromBucket(item.id)
                .subscribe(function (response) {
                item.imageUrl = __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].bucketBaseUrl + "/prod" + item.id + "-small.jpg";
            }, function (error) { });
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_1();
        }
    };
    /**
     * Metodo que exibe os detalhes dos produtos
     */
    ProdutosPage.prototype.showDatail = function (produto_id) {
        this.navCtrl.push('ProdutoDetailPage', { produto_id: produto_id });
    };
    /**
     * Metodo que aparece o loading ao carregar a pagina
     */
    ProdutosPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    ProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-produtos',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\produtos\produtos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!--Botão flutante do carrinho de compras. navPush="CartPage"-> Navega para a pagina de carrinho -->\n  <ion-fab top right edge>\n    <button navPush="CartPage" ion-fab mini><ion-icon name="cart"></ion-icon></button>\n  </ion-fab>\n  \n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="showDatail(item.id)">\n      <ion-thumbnail item-start>\n        <!--assets/imgs/prod.jpg -> Imagem padrão, quando o produto não tem foto-->\n        <img [src]="item.imageUrl || \'assets/imgs/prod.jpg\'">\n      </ion-thumbnail>\n      <h2>{{item.nome}}</h2>\n      <!--currency -> é um pipe para formatar o número ao estile de moeda-->\n      <p>{{item.preco | currency}}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\produtos\produtos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_domain_produto_service__["a" /* ProdutoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_domain_produto_service__["a" /* ProdutoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object])
    ], ProdutosPage);
    return ProdutosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=produtos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map