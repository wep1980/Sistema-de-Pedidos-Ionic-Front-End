// Classe de tratamento de erros global. Existe a possibilidade de tratamento pelo Controller

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO
import { StorageService } from '../../services/storage.service';
import { AlertController } from 'ionic-angular';
import { FieldMessage } from '../../models/fieldmessage';




@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, public alertCtrl: AlertController) {
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
                        this.handle401();
                        break;
                    case 403:
                        this.handle403();
                        break;
                    case 422:
                        this.handle422(errorObj);
                        break;

                    default:
                        this.handleDefaultError(errorObj);
                }
                return Observable.throw(error);
            }) as any;
    }

    /**
     * Método que trata o 403.
     * Força a limpeza do localStorage(Um usuario que estava no storage esta invalido)
     */
    handle403() {
        this.storage.setLocalUser(null);
    }

    handle401() {
        let alert = this.alertCtrl.create({
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
    }


    handle422(errorObj){
        let alert = this.alertCtrl.create({
            title: 'Erro 422: Validação',
            message: this.listErrors(errorObj.errors), // Função que monta a lista de erros de acordo com backend classe ValidationError variavel = private List<FieldMessage> errors = new ArrayList<>();
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.present(); // Mostra o botão
    }

    /**
     * Metodo de error
     * @param errorObj 
     */
    handleDefaultError(errorObj) {
        let alert = this.alertCtrl.create({
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
    }

    // Recebe uma lista de FieldMessage[]
    listErrors(messages: FieldMessage[]) : string {
        let s : string = '';
        /*Percorre todos os elementos da lista de mesagem acrescentando um <p>paragrafo destacando o nome do campo<strong> mais a descrição da mesagem*/
        for(var i = 0; i < messages.length; i++){
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message
        }
        return s;
    }
}



// Declaração do provider do interceptor
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};