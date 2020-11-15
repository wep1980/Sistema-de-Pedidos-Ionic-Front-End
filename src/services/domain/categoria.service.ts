import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx"; // IMPORTAÇÃO CORRETA DO Observable
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable() // A Classe pode ser injetada em outras classes
export class CategoriaService {

    constructor(public http: HttpClient) {

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
    findAll() : Observable <CategoriaDTO[]> {

        return this.http.get<CategoriaDTO[]> (`${API_CONFIG.baseUrl}/categorias`);
    }

}