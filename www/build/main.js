webpackJsonp([3],{

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categorias/categorias.module": [
		681,
		2
	],
	"../pages/home/home.module": [
		682,
		1
	],
	"../pages/profile/profile.module": [
		683,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
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



var CategoriaService = /** @class */ (function () {
    function CategoriaService(http) {
        this.http = http;
    }
    /**
     * Método que busca todas as categorias
     * A crase `` permite colocar variaveis no string sem precisar ficar concatenando o operador +
     * ${} -> Permite colocar variaveis
     * Retorna o tipo de dados -> CategoriaDTO[] Lista de CategoriaDTO
     * get<CategoriaDTO[]> -> get tipado = Lista de CategoriaDTO
     *
     * OBS : A Requisição HTTP é assincrona( CHAMADA AJAX ) e necessario se inscrever para receber essa requisição
     * O Angular encapsula essa requisição assincrona por meio de um objeto chamado Observable.
     * O retorno do método então e do tipo Observable< CategoriaDTO[] >
     */
    CategoriaService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/categoriass");
    };
    CategoriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])() // A Classe pode ser injetada em outras classes
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], CategoriaService);
    return CategoriaService;
    var _a;
}());

//# sourceMappingURL=categoria.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_service__ = __webpack_require__(44);
/* Serviço de Autorização -- Esse serviço precisa ser chamado na home.ts */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    // O HttpClient faz a comunicação com o ENDPOINT login
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
        // Instalado atraves do npm install --save angular2-jwt
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
    }
    /**
     * Método que recebe as credencias do usuario para autenticação.
     *
     * o método recebe 3 argumentos: a URL, as credencias do usuario e um
     * Objeto que pega o header da resposta observe: 'response' e o responseType: 'text' que é do tipo text
     * e não um JSON pq o ENDPOINT de login retorna uma resposta de corpo vazio senão o framework tenta
     * fazer um parse e ocorre um erro ( Evita o erro de parse do JSON de um corpo vazio )
     * @param creds
     */
    AuthService.prototype.authenticate = function (creds) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_api_config__["a" /* API_CONFIG */].baseUrl + "/login", creds, {
            observe: 'response',
            responseType: 'text'
        });
    };
    /**
     * Metodo de sucesso ao realizar o login
     * authorizationValue -> Recebe o token
     */
    AuthService.prototype.successfulLogin = function (authorizationValue) {
        // Retira a palavra Bearer com espaço e pega somente o token
        var tok = authorizationValue.substring(7);
        var user = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub // pegando o email do token
        };
        this.storage.setLocalUser(user);
    };
    /**
     * Metodo de logout
     */
    AuthService.prototype.logout = function () {
        this.storage.setLocalUser(null); // Remove do localstorage o usuario
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__storage_service__["a" /* StorageService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteService = /** @class */ (function () {
    function ClienteService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    /**
     * Método que busca um usuario por email pogando por parametro o email digitado pelo usuario
     * @param email
     */
    ClienteService.prototype.findByEmail = function (email) {
        // let token = this.storage.getLocalUser().token; // let token -> variavel temporaria
        // Cabeçalho que sera enviado
        // let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/clientes/email?value=" + email);
        // {'headers': authHeader}); //passa o cabeçalho para a requisição
    };
    /**
     * Metodo que busca a imagem do Usuario no bucket da amazon.
     * Recebe um Id, Observable<any> -> any e um tipo do typeScript que aceita qq coisa(casa com todo mundo).
     * cp${id} -> cp e o prefixo da imagem e id do cliente
     * {responseType : 'blob'} -> resposta blob, é uma imagem e não um JSON
     * @param id
     */
    ClienteService.prototype.getImageFromBucket = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].bucketBaseUrl + "/cp" + id + ".jpg";
        return this.http.get(url, { responseType: 'blob' });
    };
    ClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]])
    ], ClienteService);
    return ClienteService;
}());

//# sourceMappingURL=cliente.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_domain_categoria_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interceptors_error_interceptor__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_storage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_domain_cliente_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__interceptors_auth_interceptor__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * TODAS AS CLASSES QUE SÃO UTILIZADAS NO CORPO DO SCRIPT PRECISAM ESTAR IMPORTADAS AQUI EMBAIXO
 */

 // Import do HTTPCLIENT











/**
 * Decorator -> é uma anotação que contém configurações para alterar a classe
 */
var AppModule = /** @class */ (function () {
    /**
     * Export -> permite que uma classe ou elemento import o AppModule( torna-se visivel em outros lugares )
     */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categorias/categorias.module#CategoriasPageModule', name: 'CategoriasPage', segment: 'categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                /** CategoriaService -> Registro do serviço no escopo global da aplicação,
                 * pois e um serviço que vai ser muito utilizado.
                 * Unica instancia servindo toda aplicação
                 */
                __WEBPACK_IMPORTED_MODULE_7__services_domain_categoria_service__["a" /* CategoriaService */],
                /**
                 * Colocar o cabeçalho na requisição( AuthInterceptorProvider ) tem que ser feito antes do tratamento de erro.
                 * Para controlar a ordem em que os interceptors serão executados é so colocar um antes do outro
                 * aqui no providers.
                 */
                __WEBPACK_IMPORTED_MODULE_12__interceptors_auth_interceptor__["a" /* AuthInterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_8__interceptors_error_interceptor__["a" /* ErrorInterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_11__services_domain_cliente_service__["a" /* ClienteService */]
            ]
        })
        /**
         * Export -> permite que uma classe ou elemento import o AppModule( torna-se visivel em outros lugares )
         */
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Serviço que salva e obtem o usuario logado
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    /**
     * Método que obtem o usuario logado
     */
    StorageService.prototype.getLocalUser = function () {
        var usr = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__["a" /* STORAGE_KEYS */].localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr); // O localstorage armazena string, por esse motivo o parse
        }
    };
    /**
     * Recebe o localUser e armazena no storage
     * @param obj
     */
    StorageService.prototype.setLocalUser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__["a" /* STORAGE_KEYS */].localUser);
        }
        else {
            /**Armazenando no localstorage que é convertido para string pois e o formato que ele aceita */
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__["a" /* STORAGE_KEYS */].localUser, JSON.stringify(obj));
        }
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_CONFIG; });
// ARQUIVO DE CONFIGURAÇÕES DA API COMO OBJETOS JSON
var API_CONFIG = {
    baseUrl: "http://localhost:8080",
    bucketBaseUrl: "https://spring-ionic-mc.s3-sa-east-1.amazonaws.com" // URL Amazon imagens
};
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORAGE_KEYS; });
// Local de armazenamento dos nomes das chaves do storage -- Acessa o usuario logado
var STORAGE_KEYS = {
    localUser: "localUser"
};
//# sourceMappingURL=storage_keys.config.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
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
 * Pagina controladora da pagina app.html ( TODAS AS PAGINAS HTML TEM UM CONTROLADOR )
 */
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'HomePage'; // Configuração da página inicial do aplicativo
        this.initializeApp();
        // Paginas que aparecem no menu
        this.pages = [
            { title: 'Profile', component: 'ProfilePage' },
            { title: 'Categorias', component: 'CategoriasPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\workspace ionic\ionic-spring-frontend\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\workspace ionic\ionic-spring-frontend\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(87);
// Classe de tratamento de erros global. Existe a possibilidade de tratamento pelo Controller
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // IMPORTANTE: IMPORT ATUALIZADO


var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(storage, alertCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    /**
     * Método que intercepta as requisições
     */
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // console.log("Passou no interceptor");
        return next.handle(req)
            .catch(function (error, caught) {
            var errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            /** Se a resposta não vier no formato JSON, ou seja, não tiver o campo status, vira no formato text,
             * então sera feita a conversão para JSON */
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }
            console.log("Erro detectado pelo interceptor:"); // A responsabilidade de imprimir na tela e aqui do interceptor
            console.log(errorObj);
            /**
             * Tratamento de erros especificos do status.
             * Tratamento do erro 403.
             *
             * Para testar, no console do navegador inserir um token invalido:
             * localStorage.setItem('localUser',
              '{"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuZWxpby5jdXJzb3NAZ21haWwuY29tIiwiZXhwIjoxNTEzNjkxMTE1fQ.
              Bg8nyUf5Hsw2CC3dQffZrip822eFB18jNLrsySe51Eb-SioUH-uq7CQ4dWoBixZmzT-PWdE1iZZ1uRhuaaaaa",
             "email":"nelio.cursos@gmail.com"}')
             */
            switch (errorObj.status) {
                case 401:
                    _this.handle401();
                    break;
                case 403:
                    _this.handle403();
                    break;
                default:
                    _this.handleDefaultError(errorObj);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    /**
     * Método que trata o 403.
     * Força a limpeza do localStorage(Um usuario que estava no storage esta invalido)
     */
    ErrorInterceptor.prototype.handle403 = function () {
        this.storage.setLocalUser(null);
    };
    ErrorInterceptor.prototype.handle401 = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro 401: falha de autenticação',
            message: 'Email ou senha incorretos',
            /**
             * Para sair do alert o usuatio precisa apertar no botão do alert, isso é opcional,
             * mas dessa forma pode ser feito um tratamento especial para ele
             */
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present(); // Mostra o botão
    };
    /**
     * Metodo de error
     * @param errorObj
     */
    ErrorInterceptor.prototype.handleDefaultError = function (errorObj) {
        var alert = this.alertCtrl.create({
            title: 'Erro ' + errorObj.status + ': ' + errorObj.error,
            message: errorObj.message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present(); // Mostra o botão
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], ErrorInterceptor);
    return ErrorInterceptor;
    var _a, _b;
}());

// Declaração do provider do interceptor
var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true,
};
//# sourceMappingURL=error-interceptor.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api_config__ = __webpack_require__(63);
// Classe que intercepta o token nas requisições
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(storage) {
        this.storage = storage;
    }
    /**
     * Método que intercepta as requisições
     *
     * Para inserir o cabeçalho na requisição e necessario fazer um clone(copia) dessa requisição.
     *
     * O cabeçalho(header Authorization) inserido na requisição so deve ser enviado para o BACKEND, ou seja
     * quando for uma requisição vinda de outro local não precisa ser enviado o cabeçalho, a lógica é
     * a comparar as URLs da requisição
     */
    AuthInterceptor.prototype.intercept = function (req, next) {
        // console.log("Passou no interceptor");
        var localUser = this.storage.getLocalUser();
        var N = __WEBPACK_IMPORTED_MODULE_3__config_api_config__["a" /* API_CONFIG */].baseUrl.length; //Pegando o tamanho da string da baseUrl para comparação
        // Recortando a string da url a partir do primeiro caracter ate o tamanho total da baseUrl
        var requestToAPI = req.url.substring(0, N) == __WEBPACK_IMPORTED_MODULE_3__config_api_config__["a" /* API_CONFIG */].baseUrl;
        if (localUser && requestToAPI) {
            var authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) });
            return next.handle(authReq);
        }
        else {
            return next.handle(req); // Se não existir o localUser ele propaga a requisição original.
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

// Declaração do provider do interceptor
var AuthInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: AuthInterceptor,
    multi: true,
};
//# sourceMappingURL=auth-interceptor.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map