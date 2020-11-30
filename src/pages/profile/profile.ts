import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  picture: string;
  cameraOn: boolean = false; // A camera esta ligada ou não

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService,
    public camera: Camera) {
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData(){
    let localUser = this.storage.getLocalUser(); 
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


  /**
   * Metodo para acionar a camera do dispositivo
   */
  getCameraPicture() {

    this.cameraOn = true; // Usando a camera(ON)

    const options: CameraOptions = {
      correctOrientation: true,
      quality: 100, // Qualidade maxima
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.picture = 'data:image/png;base64,' + imageData;
     this.cameraOn = false; // desliga a camera (OFF)
    }, (err) => {
      this.cameraOn = false;
    });
  }

  /**
   * Metodo que pega uma foto da galeria do celular
   */
  getGalleryPicture() {

    this.cameraOn = true; // Usando a camera(ON)

    const options: CameraOptions = {
      quality: 100, // Qualidade maxima
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.picture = 'data:image/png;base64,' + imageData;
     this.cameraOn = false; // desliga a camera (OFF)
    }, (err) => {
      this.cameraOn = false;
    });
  }


  sendPicture() {
    this.clienteService.uploadPicture(this.picture) // Envia a imagem
      .subscribe(response => {
        this.picture = null;
        this.loadData(); // recarrega os dados da pagina
      },
      error => {
      });
  }

  /**
   * Metodo para descartar a imagem
   */
  cancel() {
    this.picture = null;
  }

}
