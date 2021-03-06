/**
 * TODAS AS CLASSES QUE SÃO UTILIZADAS NO CORPO DO SCRIPT PRECISAM ESTAR IMPORTADAS AQUI EMBAIXO
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import do HTTPCLIENT
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ClienteService } from '../services/domain/cliente.service';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { ProdutoService } from '../services/domain/produto.service';
import { CartService } from '../services/domain/cart.service';
import { ImageUtilService } from '../services/image-util.service';

/**
 * Decorator -> é uma anotação que contém configurações para alterar a classe
 */
@NgModule({
  declarations: [ // Aqui ficam a lista de componentes ou paginas que fazem parte deste modulo
    MyApp
  ],
  imports: [ // Lista de modulos que são importados por este modulo
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp], // Bootstrap -> tem a indicação de como a aplicação vai iniciar
  entryComponents: [  // Quando o declaration for uma pagina e não um componente, essa pagina precisa ser declarada aqui também
    MyApp
  ],
  providers: [ // Aqui se declara as classes que os objetos injetaveis sejam uma instancia unica para este modulo
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
    /** CategoriaService -> Registro do serviço no escopo global da aplicação, 
     * pois e um serviço que vai ser muito utilizado.
     * Unica instancia servindo toda aplicação
     */
    CategoriaService,
    /**
     * Colocar o cabeçalho na requisição( AuthInterceptorProvider ) tem que ser feito antes do tratamento de erro.
     * Para controlar a ordem em que os interceptors serão executados é so colocar um antes do outro 
     * aqui no providers.
     */
    AuthInterceptorProvider, 
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService,
    ProdutoService,
    CartService,
    ImageUtilService
  ]
})
/**
 * Export -> permite que uma classe ou elemento import o AppModule( torna-se visivel em outros lugares )
 */
export class AppModule {} 
