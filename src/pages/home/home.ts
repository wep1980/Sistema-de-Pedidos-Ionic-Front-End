import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credencias.dto';
import { AuthService } from '../../services/auth.service';


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

  /**Sera feito o binding desse objeto, ou seja sera capturado os dados da tela de login */
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  /**Para declarar injeção de dependencia em uma classe 
   * basta declarar o objeto como parametro no construtor
   * 
   * navCtrl: NavController -> injeção do objeto que controla a navegação entre as paginas
   * menu: MenuController -> Injeção do objeto que controla o menu da aplicação
   * auth: AuthService -> injeção do objeto que conbtrola a autenticação
   */
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

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
   * Método de ciclo de vida do token que permite o usuario entrar no app sem logar caso o token ainda esteja valido
   */
  ionViewDidEnter() {
    this.auth.refreshToken().subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
      error => { });
  }


  /**
   * Metodo que faz a navegação da pagina homePage para CategoriasPage
   *  
   * this.navCtrl -> Para acessar qualquer elemento de uma classe e necessario chamar o this. antes
   * push() -> Método que chama outra pagina -- Empilha uma pagina em cima da outra
   */
  login() {
    this.auth.authenticate(this.creds).subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      //console.log(response.headers.get('Authorization')); // Confirma se o cabeçalho veio na resposta
      this.navCtrl.setRoot('CategoriasPage'); // Navegação sem empilhamento
      // this.navCtrl.push('CategoriasPage'); // Navegação com empilhamento
    },
      error => { });
    //console.log(this.creds);
  }

  /** Executando ação ao entrar e sair da pagina */

}
