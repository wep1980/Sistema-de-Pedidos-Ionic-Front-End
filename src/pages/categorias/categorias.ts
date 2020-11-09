import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

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
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

}
