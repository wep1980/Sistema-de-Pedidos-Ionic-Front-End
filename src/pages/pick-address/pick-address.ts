import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser(); // pega o usario que esta logado no localStorage
    if (localUser && localUser.email) { // Verifica se o objeto esta Ok
      this.clienteService.findByEmail(localUser.email) // Faz a busca por email
        .subscribe(response => { // se Inscreve para resposta
          this.items = response['enderecos']; // E pega os endereços do cliente. Esta entre ['enderecos'] pq assim fica livre de erro do compilador e essa resposta que vem do backend
        },
        error => {
          if (error.status == 403) {
            this.navCtrl.setRoot('HomePage');
          }
        });
}
else{
    this.navCtrl.setRoot('HomePage');
    }
  }
}
