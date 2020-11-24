
/* Serviço de Autorização -- Esse serviço precisa ser chamado na home.ts */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credencias.dto";
import { LocalUser } from "../models/local_user";
import { CartService } from "./domain/cart.service";
import { StorageService } from "./storage.service";


@Injectable()
export class AuthService {

    // Instalado atraves do npm install --save angular2-jwt
    jwtHelper: JwtHelper = new JwtHelper();

    // O HttpClient faz a comunicação com o ENDPOINT login
    constructor(
        public http: HttpClient,
        public storage: StorageService,
        public cartService: CartService) {

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
    authenticate(creds: CredenciaisDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    /**
     * Metodo de sucesso ao realizar o login
     * authorizationValue -> Recebe o token
     */
    successfulLogin(authorizationValue: string) {
        // Retira a palavra Bearer com espaço e pega somente o token
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub // pegando o email do token
        };
        this.storage.setLocalUser(user);
        this.cartService.createOrClearCart(); // Limpa o carrinho quando um cliente faz o login
    }

    /**
     * Metodo de logout
     */
    logout() {
        this.storage.setLocalUser(null); // Remove do localstorage o usuario
    }

    /**
     * Metodo que atualiza o token quando esta proximo de expirar.
     * Quando o usuario utilizar o app nao vai precisar logar caso o token ainda esteja valido.
     * 
     * OBS: O token e incluido automaticamente na requisição.
     * 
     * responseType: 'text' -> O response type e do tipo text pq a resposta vem em um corpo vazio e para o framework
     * não dar erro de parse achando que e JSON.
     */
    refreshToken() {
        return this.http.post(`${API_CONFIG.baseUrl}/auth/refresh_token`,
            {}, // Os dados que serão enviados nesse requisição e um objeto vazio(Não tem nada para ser enviado)
            {
                observe: 'response',
                responseType: 'text'
            });
    }

}