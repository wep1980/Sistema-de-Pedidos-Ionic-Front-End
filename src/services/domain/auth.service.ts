/* Serviço de Autorização -- Esse serviço precisa ser chamado na home.ts */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { CredenciaisDTO } from "../../models/credencias.dto";


@Injectable()
export class AuthService {

    // O HttpClient faz a comunicação com o ENDPOINT login
    constructor(public http: HttpClient){

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
    authenticate(creds : CredenciaisDTO){
       return this.http.post(`${API_CONFIG.baseUrl}/login`, 
                          creds, 
                          {
                              observe: 'response',
                              responseType: 'text'
                          });

    }

}