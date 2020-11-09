import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Pagina controladora da home.html
 * OBS : Toda pagina HTML tem uma pagina controladora correspondente
 */
@IonicPage() // Permite referenciar esta classe pelo nome dela atravez de String 'HomePage' flexibilizando o uso do lazy mode (CAREEGAMENTO TARDIO)
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**Para declarar injeção de dependencia em uma classe 
   * basta declarar o objeto como parametro no construtor
   * 
   * navCtrl: NavController -> injeção do objeto que controla a navegação entre as paginas
   */
  constructor(public navCtrl: NavController) {

  }

  /**
   * Metodo que faz a navegação da pagina homePage para CategoriasPage
   *  
   * this.navCtrl -> Para acessar qualquer elemento de uma classe e necessario chamar o this. antes
   * push() -> Método que chama outra pagina -- Empilha uma pagina em cima da outra
   */
  login() {
   // this.navCtrl.push('CategoriasPage'); // Navegação com empilhamento
   this.navCtrl.setRoot('CategoriasPage'); // Navegação sem empilhamento
  }

}
