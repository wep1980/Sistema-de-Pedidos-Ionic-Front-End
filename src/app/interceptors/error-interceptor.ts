// Classe de tratamento de erros global. Existe a possibilidade de tratamento pelo Controller

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO
import { StorageService } from '../../services/storage.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService) {
    }

    /**
     * Método que intercepta as requisições
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log("Passou no interceptor");
        return next.handle(req)
            .catch((error, caught) => {

                let errorObj = error;
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

                switch (errorObj.status) {
                    case 403:
                        this.handle403();
                        break;

                }

                return Observable.throw(error);
            }) as any;
    }

    handle403() {
        this.storage.setLocalUser(null);
    }
}



// Declaração do provider do interceptor
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};