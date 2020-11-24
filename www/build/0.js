webpackJsonp([0],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_cidade_service__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_estado_service__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup__ = __webpack_require__(690);
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
                __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_domain_cidade_service__["a" /* CidadeService */],
                __WEBPACK_IMPORTED_MODULE_3__services_domain_estado_service__["a" /* EstadoService */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CidadeService = /** @class */ (function () {
    function CidadeService(http) {
        this.http = http;
    }
    /**
     * Método que busca todas as cidades de um estado
     * A crase `` permite colocar variaveis no string sem precisar ficar concatenando o operador +
     * ${} -> Permite colocar variaveis
     * Retorna o tipo de dados -> CidadeDTO[] Lista de CidadeDTO
     * get<CidadeDTO[]> -> get tipado = Lista de CidadeDTO
     *
     * OBS : A Requisição HTTP é assincrona( CHAMADA AJAX ) e necessario se inscrever para receber essa requisição
     * O Angular encapsula essa requisição assincrona por meio de um objeto chamado Observable.
     * O retorno do método então e do tipo Observable< CidadeDTO[] >
     */
    CidadeService.prototype.findAll = function (estado_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/estados/" + estado_id + "/cidades");
    };
    CidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])() // A Classe pode ser injetada em outras classes
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], CidadeService);
    return CidadeService;
    var _a;
}());

//# sourceMappingURL=cidade.service.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstadoService = /** @class */ (function () {
    function EstadoService(http) {
        this.http = http;
    }
    /**
     * Método que busca todas as cidades de um estado
     * A crase `` permite colocar variaveis no string sem precisar ficar concatenando o operador +
     * ${} -> Permite colocar variaveis
     * Retorna o tipo de dados -> EstadoDTO[] Lista de EstadoDTO
     * get<EstadoDTO[]> -> get tipado = Lista de EstadoDTO
     *
     * OBS : A Requisição HTTP é assincrona( CHAMADA AJAX ) e necessario se inscrever para receber essa requisição
     * O Angular encapsula essa requisição assincrona por meio de um objeto chamado Observable.
     * O retorno do método então e do tipo Observable< EstadoDTO[] >
     */
    EstadoService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/estados");
    };
    EstadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])() // A Classe pode ser injetada em outras classes
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], EstadoService);
    return EstadoService;
    var _a;
}());

//# sourceMappingURL=estado.service.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cidade_service__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_estado_service__ = __webpack_require__(686);
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
    function SignupPage(navCtrl, navParams, formBuilder, cidadeService, estadoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.cidadeService = cidadeService;
        this.estadoService = estadoService;
        /**
         * Instanciando um formGroup dentro do construtor.
         * group() -> responsavel por instanciar o formGroup.
         *
         * Todas as validações sintaticas e que não precisam ir no banco de dados serão as mesmas feitas no backend,
         * assim evita requisições no servidor desnecessarias.
         */
        this.formGroup = this.formBuilder.group({
            nome: ['waldir', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            email: ['wepjavamail@gmail.com', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            tipoCliente: ['1', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cpfOuCnpj: ['08180009700', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(14)]],
            senha: ['123', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            logradouro: ['Rua Santa Clara', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            numero: ['271', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            complemento: ['apto 207', []],
            bairro: ['Copacabana', []],
            cep: ['22041011', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            telefone1: ['990561880', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            telefone2: ['', []],
            telefone3: ['', []],
            estadoId: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cidadeId: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    /**
     * Método que inicia automaticamente quando a pagina e chamada
     */
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.estadoService.findAll().subscribe(function (response) {
            _this.estados = response;
            //Pega o primeiro elemento da lista e atribui na lista estadoId do formulario
            _this.formGroup.controls.estadoId.setValue(_this.estados[0].id);
            //console.log(this.estados);
            // Busca as cidades correspondente ao estado selecionado
            _this.updateCidades();
        }, function (error) { });
    };
    SignupPage.prototype.updateCidades = function () {
        var _this = this;
        // Variavel que pega o estado selecionado na lista do HTML do formulario
        var estado_id = this.formGroup.value.estadoId;
        this.cidadeService.findAll(estado_id).subscribe(function (response) {
            _this.cidades = response;
            /**
             * Desceleciona a cidade que estava selecionado no formulario, pq como acabou acabou de mudar de estado
             * não vai ficar nenhuma cidade selecionada
             */
            _this.formGroup.controls.cidadeId.setValue(null);
        }, function (error) { });
    };
    SignupPage.prototype.signupUser = function () {
        console.log('Enviou o form');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\pages\signup\signup.html"*/'<!--Pagina de cadastro para novos usuarios-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <!-- $event.preventDefault() -> Previne de a pagina ser enviada, o controle sera feito na mão -->\n  <!--Para fazer o binding dos elementos dos elementos do formGroup que esta no signup.ts e preciso fazer\n  a troca de onde tem name="" por formControlName="" -- e dentro da tag form fazer um binding de atributo\n  do formGroup criado em signup.ts -- [formGroup]="formGroup" -->\n  <form [formGroup]="formGroup" (ngSubmit)="signupUser(); $event.preventDefault()">\n\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input formControlName="nome" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email*</ion-label>\n      <ion-input formControlName="email" type="text"></ion-input>\n    </ion-item>\n\n      <ion-list radio-group formControlName="tipoCliente">\n        <ion-list-header>\n          Tipo de cliente\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Pessoa física</ion-label>\n          <ion-radio checked="true" value="1"></ion-radio>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Pessoa jurídica</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n    <ion-item>\n      <ion-label stacked>CPF ou CNPJ</ion-label>\n      <ion-input formControlName="cpfOuCnpj" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Senha*</ion-label>\n      <ion-input formControlName="senha" type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Logradouro*</ion-label>\n      <ion-input formControlName="logradouro" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Número*</ion-label>\n      <ion-input formControlName="numero" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Complemento</ion-label>\n      <ion-input formControlName="complemento" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Bairro</ion-label>\n      <ion-input formControlName="bairro" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>CEP*</ion-label>\n      <ion-input formControlName="cep" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefone 1*</ion-label>\n      <ion-input formControlName="telefone1" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefone 2</ion-label>\n      <ion-input formControlName="telefone2" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Telefone 3</ion-label>\n      <ion-input formControlName="telefone3" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Estado*</ion-label>\n\n      <!--(ionChange)="updateCidades()" -> Toda vez que um estado e selecionado ele carrega as cidades do estado -->\n      <ion-select formControlName="estadoId" (ionChange)="updateCidades()">\n\n        <!-- *ngFor="let estado of estados" = Diretiva que percorre a lista de estados(VARIAVEL CRIADA NO CONTROLADOR)\n        e cada elemento recebe o apelido de estado.\n        first as f -> Referencia para o primeiro estado da lista.\n        [value]="estado.id" -> Esse e o valor do ion-option.\n        [selected]="f" -> Mostra o primeiro estado na lista -->\n        <ion-option *ngFor="let estado of estados; first as f" \n                    [value]="estado.id" [selected]="f">{{estado.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Cidade*</ion-label>\n      <ion-select formControlName="cidadeId">\n        <ion-option *ngFor="let cidade of cidades" [value]="cidade.id">{{cidade.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <button ion-button block type="submit">Criar conta</button>\n    \n  </form>\n</ion-content>'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_domain_cidade_service__["a" /* CidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_domain_cidade_service__["a" /* CidadeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_domain_estado_service__["a" /* EstadoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_domain_estado_service__["a" /* EstadoService */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map