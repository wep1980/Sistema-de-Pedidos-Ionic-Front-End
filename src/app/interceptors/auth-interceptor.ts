// Classe que intercepta o token nas requisições

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO
import { StorageService } from '../../services/storage.service';
import { API_CONFIG } from '../../config/api.config';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService) {
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
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log("Passou no interceptor");

        let localUser = this.storage.getLocalUser();

        let N = API_CONFIG.baseUrl.length; //Pegando o tamanho da string da baseUrl para comparação

        // Recortando a string da url a partir do primeiro caracter ate o tamanho total da baseUrl
        let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseUrl;

        if (localUser && requestToAPI) {
            const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) });
            return next.handle(authReq);
        } else {
            return next.handle(req); // Se não existir o localUser ele propaga a requisição original.
        }

    }
}

// Declaração do provider do interceptor
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};