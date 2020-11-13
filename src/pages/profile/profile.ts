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
    if(localUser && localUser.email){
     // this.email = localUser.email; // Codigo provisorio
     this.clienteService.findByEmail(localUser.email).subscribe(response => {
       this.cliente = response;
       this.getImageIfExists();
     },
     error =>{});

    }
  }


  /**
   * Método que verifica se a imagem que vem do bucket da amazon existe
   */
  getImageIfExists(){
    this.clienteService.getImageFromBucket(this.cliente.id).subscribe(response => {
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
    },
    error =>{});
  }

}
