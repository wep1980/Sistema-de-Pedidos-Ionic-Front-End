import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  /**
   * Método que desabilita o menu ao entrar na pagina de login
   */
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  /**
   * Método que habilita o menu ao sair da pagina de login
   */
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
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

  /** Executando ação ao entrar e sair da pagina */

}
