import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';



/**
 * Pagina controladora da pagina app.html ( TODAS AS PAGINAS HTML TEM UM CONTROLADOR )
 */
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: String = 'HomePage'; // Configuração da página inicial do aplicativo

  pages: Array<{ title: string, component: String }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthService) {
    this.initializeApp();

    // Paginas que aparecem no menu
    this.pages = [
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Categorias', component: 'CategoriasPage' },
      { title: 'Logout', component: '' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Tipando o page que vai ser um objeto que tera titulo e um componente, com isso pode ser acessado os atributos.
   * @param page 
   */
  openPage(page: { title: string, component: string }) {
    switch (page.title) {
      case 'Logout':
        this.auth.logout(); // retira o token do usuario do armazenamento(LocalStorage)
        this.nav.setRoot('HomePage'); // Redireciona para pagina de login
        break;

      default:
        this.nav.setRoot(page.component);
    }
  }
}
