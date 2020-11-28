webpackJsonp([3],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos__ = __webpack_require__(705);
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

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_produto_service__ = __webpack_require__(352);
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
        /**
         * Iniciando a lista vazia. Sempre que for buscado uma nova pagina ela sera concatenada com uma lista que ja existe(Concatenação de listas), Na busca da primeira pag sera concatenada a lista vazia com a primeira pag,
         * quando for buscado a segunda pag sera concatenada a primeira pag com a segunda pag, e assim por diante
         */
        this.items = [];
        this.page = 0;
    }
    ProdutosPage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    ProdutosPage.prototype.loadData = function () {
        var _this = this;
        var categoria_id = this.navParams.get('categoria_id');
        var loader = this.presentLoading(); // Chamando o loading
        // Capturando o dado que foi passado na navegação = categorias.ts showProdutos()
        // A resposta que vem do backend e um endpoint paginado, entao vira uma resposta diferente. -- ['content'] e o atributo que vem que carrega as categorias. TESTAR NO POSTMAN URL http://localhost:8080/produtos?categorias=2
        this.produtoService.findByCategoria(categoria_id, this.page, 10).subscribe(function (response) {
            var start = _this.items.length; // Pegando o tamanho da lista
            _this.items = _this.items.concat(response['content']); // Concatenando a nova resposta com o que ja tinha antes
            var end = _this.items.length - 1; // Depois de concatenar salva o novo tamanho da lista
            loader.dismiss(); // fecha a janela do loading
            console.log(_this.page); // verifica se a pagina esta correta 
            console.log(_this.items); // verifica se a lista esta correta
            _this.loadImageUrls(start, end);
        }, function (error) {
            loader.dismiss(); // fecha a janela do loading
        });
    };
    /**
     * Metodo que carrega as imagens de acordo com o tamanho de elementos que vem por pagina
     * @param start
     * @param end
     */
    ProdutosPage.prototype.loadImageUrls = function (start, end) {
        var _loop_1 = function () {
            var item = this_1.items[i];
            this_1.produtoService.getSmallImageFromBucket(item.id)
                .subscribe(function (response) {
                item.imageUrl = __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].bucketBaseUrl + "/prod" + item.id + "-small.jpg";
            }, function (error) { });
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
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
    /**
     * Metodo que da refresh na pagina ao puxar ela para baixo
     * @param refresher
     */
    ProdutosPage.prototype.doRefresh = function (refresher) {
        this.page = 0; // Ao fazer o refresh carrega apenas os 10 primeiros (Resolve o problema de paginação)
        this.items = []; //  // Ao fazer o refresh carrega apenas os 10 primeiros (Resolve o problema de paginação)
        this.loadData(); // recarrega os dados
        setTimeout(function () {
            refresher.complete(); // depois de 1 segundo fecha o refresher que aparece no canto da tela
        }, 1000);
    };
    /**
     * Metodo que chama as as paginas de produtos atraves do infinity scroll, ao chegar no final da pagina ele carrega a proxima
     * @param infiniteScroll
     */
    ProdutosPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++; // Incrementa a pagina
        this.loadData(); // carrega mais dados
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    ProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-produtos',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\produtos\produtos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!--Botão flutante do carrinho de compras. navPush="CartPage"-> Navega para a pagina de carrinho -->\n  <ion-fab top right edge>\n    <button navPush="CartPage" ion-fab mini><ion-icon name="cart"></ion-icon></button>\n  </ion-fab>\n  \n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="showDatail(item.id)">\n      <ion-thumbnail item-start>\n        <!--assets/imgs/prod.jpg -> Imagem padrão, quando o produto não tem foto-->\n        <img [src]="item.imageUrl || \'assets/imgs/prod.jpg\'">\n      </ion-thumbnail>\n      <h2>{{item.nome}}</h2>\n      <!--currency -> é um pipe para formatar o número ao estile de moeda-->\n      <p>{{item.preco | currency}}</p>\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)"> <!--Elemento do infinity scroll, que carrega todos os produtos da pagina -->\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>  \n\n</ion-content>\n'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\produtos\produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_produto_service__["a" /* ProdutoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProdutosPage);
    return ProdutosPage;
}());

//# sourceMappingURL=produtos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map