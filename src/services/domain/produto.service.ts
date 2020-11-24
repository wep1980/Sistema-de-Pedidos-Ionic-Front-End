import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO
import { ProdutoDTO } from '../../models/produto.dto';

@Injectable()
export class ProdutoService {

  constructor(public http: HttpClient) {
  }

  findById(produto_id : string) {
    return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produto_id}`);
  }

  findByCategoria(categoria_id : string) {
    return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}`);
  }


  /**
   * Metodo que busca as fotos miniatura das categorias do tipo Observable<any>
   * responseType : 'blob' -> Resposta para imagem
   * @param id 
   */
  getSmallImageFromBucket(id : string) : Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`
    return this.http.get(url, {responseType : 'blob'});
  }  


  /**
   * Metodo que busca as fotos das categorias do tipo Observable<any>
   * responseType : 'blob' -> Resposta para imagem
   * @param id 
   */
  getImageFromBucket(id : string) : Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`
    return this.http.get(url, {responseType : 'blob'});
  }  
}