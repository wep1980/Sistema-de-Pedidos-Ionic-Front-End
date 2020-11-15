webpackJsonp([2],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorias__ = __webpack_require__(684);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoriasPageModule = /** @class */ (function () {
    function CategoriasPageModule() {
    }
    CategoriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */]),
            ],
        })
    ], CategoriasPageModule);
    return CategoriasPageModule;
}());

//# sourceMappingURL=categorias.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_categoria_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(navCtrl, navParams, categoriaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoriaService = categoriaService;
        this.bucketUrl = __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].bucketBaseUrl; // Variavel que recebe bucketBaseUrl criado no API_CONFIG
    }
    /**
     * A Chamada do metodo por padrão é assincrona, é preciso se inscrever para fazer algo quando a resposta chegar.
     * subscribe() -> Assim vc se inscreve(FUNÇÃO CALLBACK).
     * Dentro dele se coloca uma função para executar a resposta
     *
     * Função anonima(Arrow function) -> Função dentro de uma função, pode ter mais de uma função,
     * que pode receber mais de um argumento,
     * nesse caso so recebe o response que o console.log() pega e mostra no Navegador
     * subscribe(response =>{
     * console.log(response)
     * }
     * E em caso de erro sera chamada a outra funcão
     *  error => {
        console.log(error);
      }
     */
    CategoriasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.categoriaService.findAll().subscribe(function (response) {
            _this.items = response; // A variavel items recebe a resposta
            //console.log(response);
        }, 
        /**
         * A responsabilidade de mostrar o erro no console esta sendo do inteceptor.
         * É necessario ter error => {}); para que o erro não ocorra aqui, ja que o interceptor propaga o erro
         */
        function (error) { }); // Se for necessario fazer algo a mais do que imprimir na tela, sera feito aqui
    };
    CategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categorias',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\categorias\categorias.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle> <!--Colocando botão iniciar na pagina inicial -->\n       <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categorias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n<!-- button ion-item -> Todo item fica clicavel -- Diretiva do Angular *ngFor = lê uma coleção e repetir o numero de vezes da coleção \n     *ngFor="let item of items" = Percorre a lista de items( VARIAVEL CRIADA NO CONTROLADOR ) e cada elemento recebe o apelido de item-->\n    <button ion-item *ngFor="let item of items">\n      <ion-thumbnail item-start>\n        <img src="{{bucketUrl}}/cat{{item.id}}.jpg" alt=""> <!-- {{}} INTERPOLAÇÃO bucketUrl(variavel criada no controlador) com concatenação /cat que referencia o nome das imagens de categoria e busca o id de cada uma das imagens -->\n      </ion-thumbnail>  \n        <h2>{{ item.nome }}</h2> <!-- {{}} INTERPOLAÇÃO = Interpola o conteudo do HTML com o DADO que veio do controlador  -->\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\categorias\categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_categoria_service__["a" /* CategoriaService */]])
    ], CategoriasPage);
    return CategoriasPage;
}());

//# sourceMappingURL=categorias.js.map

/***/ })

});
//# sourceMappingURL=2.js.map