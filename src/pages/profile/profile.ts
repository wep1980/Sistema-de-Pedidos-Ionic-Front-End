import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { StorageService } from '../../services/storage.service';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  //email: string; //Criado provisioriamente

  cliente: ClienteDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser(); // Codigo temporario apenas para mostrar o email na tela
    //console.log(localUser);
    if (localUser && localUser.email) {
      // this.email = localUser.email; // Codigo provisorio
      this.clienteService.findByEmail(localUser.email).subscribe(response => {

        // Como houve alteração no cliente.service.ts onde e retornado um cliente completo do backend e necessario colocar um casting afirmando para o compilador que a resposta vai casar com os dados do cliente
        this.cliente = response as ClienteDTO;
        this.getImageIfExists();
      },
        error => { // Tratamento do erro 403 caso ocorra, e redirecionamento para a pagina HomePage
          if (error.status == 403) {
            this.navCtrl.setRoot('HomePage');
          }
        });

    }
    else { // Caso de algum problemna no token a pagina tb sera redirecionada para HomePage
      this.navCtrl.setRoot('HomePage');
    }
  }


  /**
   * Método que verifica se a imagem que vem do bucket da amazon existe
   */
  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id).subscribe(response => {
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
    },
      error => { });
  }

}
