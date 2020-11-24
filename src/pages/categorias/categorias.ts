import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/domain/categoria.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl; // Variavel que recebe bucketBaseUrl criado no API_CONFIG
  items: CategoriaDTO[]; // Variavel -> do Tipo lista CategoriaDTO, sera usada pelo HTML para ler os dados

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
  }

  /**
   * A Chamada do metodo por padrão é assincrona, é preciso se inscrever para fazer algo quando a resposta chegar.
   * subscribe() -> Assim vc se inscreve(FUNÇÃO CALLBACK). 
   * Dentro dele se coloca uma função para executar a resposta
   * 
   * Função anonima(Arrow function) -> Função dentro de uma função, pode ter mais de uma função,
   * que pode receber mais de um argumento,
   * nesse caso so recebe o response que o console.log() pega e mostra no Navegador
   * subscribe(response =>{
   * console.log(response)
   * }
   * E em caso de erro sera chamada a outra funcão 
   *  error => {
      console.log(error);
    }
   */
  ionViewDidLoad() {

    this.categoriaService.findAll().subscribe(response => {
      this.items = response; // A variavel items recebe a resposta
      //console.log(response);
    },
    /**
     * A responsabilidade de mostrar o erro no console esta sendo do inteceptor.
     * É necessario ter error => {}); para que o erro não ocorra aqui, ja que o interceptor propaga o erro
     */
    error => {}); // Se for necessario fazer algo a mais do que imprimir na tela, sera feito aqui
  }


  showProdutos(){
     this.navCtrl.push('ProdutosPage');
  }

}
