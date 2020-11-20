import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx"; // IMPORTAÇÃO CORRETA DO Observable
import { EstadoDTO } from "../../models/estado.dto";

@Injectable() // A Classe pode ser injetada em outras classes
export class EstadoService {

    constructor(public http: HttpClient) {

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
    findAll() : Observable <EstadoDTO[]> {

        return this.http.get<EstadoDTO[]> (`${API_CONFIG.baseUrl}/estados`);
    }

}