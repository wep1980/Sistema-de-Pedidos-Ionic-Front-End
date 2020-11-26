import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";
import { ImageUtilService } from "../image-util.service";
import { StorageService } from "../storage.service";


@Injectable()
export class ClienteService {

    constructor(
        public http: HttpClient, 
        public storage: StorageService,
        public imageUtilService: ImageUtilService) {
    }


    /**
     * Método que busca um usuario por email pogando por parametro o email digitado pelo usuario.
     * 
     * Observable<ClienteDTO> -> A tipagem do metodo esta sendo retirada -> <ClienteDTO>
     * COM ISSO SERA RETORNADO EXTAMANETO O OBJETO QUE VEM DO BACKEND
     * @param email 
     */
    findByEmail(email: string) /*: Observable<ClienteDTO>*/ {

       // let token = this.storage.getLocalUser().token; // let token -> variavel temporaria

        // Cabeçalho que sera enviado
       // let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});

        return this.http.get /*<ClienteDTO>*/(
            `${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
           // {'headers': authHeader}); //passa o cabeçalho para a requisição
    }


    // Busca um cliente pelo ID
    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/${id}`);
    }


    /**
     * Metodo que busca a imagem do Usuario no bucket da amazon.
     * Recebe um Id, Observable<any> -> any e um tipo do typeScript que aceita qq coisa(casa com todo mundo).
     * cp${id} -> cp e o prefixo da imagem e id do cliente
     * {responseType : 'blob'} -> resposta blob, é uma imagem e não um JSON
     * @param id 
     */
    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg` 
        return this.http.get(url, {responseType : 'blob'});
    }


    /**
     * Método para inserir cliente
     * @param obj 
     */
    insert(obj : ClienteDTO){
       return this.http.post(`${API_CONFIG.baseUrl}/clientes`, obj, 
       {
          observe: 'response',
          responseType: 'text' // Como o corpo vem vazio isso evita o erro de parse do JSON
       }
       );
    }


    /**
     * Metodo que faz upload da foto
     * @param picture 
     */
    uploadPicture(picture) {
        let pictureBlob = this.imageUtilService.dataUriToBlob(picture); // Convertendo imagem de base64 para blob
        let formData : FormData = new FormData(); // Instanciado um objeto do tipo FormData(). Quando e feita a requisição o parametro e enviado no tipo formData
        formData.set('file', pictureBlob, 'file.png'); // Passando os parametros da imagem. 'file'-> nome do atributo. pictureBlob-> valor do atributo(arquivo). 'file.png'-> nome do arquivo
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes/picture`, 
            formData, // Objeto que sera enviado
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }

}