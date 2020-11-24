import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";
import { Observable } from "rxjs/Rx"; // IMPORTAÇÃO CORRETA DO Observable

@Injectable() // A Classe pode ser injetada em outras classes
export class CidadeService {

    constructor(public http: HttpClient) {

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
    findAll(estado_id : string) : Observable<CidadeDTO[]>  {
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }

}