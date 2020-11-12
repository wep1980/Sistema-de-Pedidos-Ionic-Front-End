import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  email: string; //Criado provisioriamente

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: StorageService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser(); // Codigo temporario apenas para mostrar o email na tela
    console.log(localUser);
    if(localUser && localUser.email){
      this.email = localUser.email;

    }
  }

}
