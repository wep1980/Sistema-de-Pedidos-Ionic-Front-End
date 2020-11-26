// Pacote de instalação para uso da camera :  ionic cordova platform add browser --save **** ionic cordova plugin add cordova-plugin-camera **** npm install --save @ionic-native/camera@4.5.3
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers : [
    Camera
  ]
})
export class ProfilePageModule {}
