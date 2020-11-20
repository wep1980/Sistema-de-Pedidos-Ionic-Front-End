import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    CidadeService, // Declaração de servico das cidades
    EstadoService // // Declaração de servico dos estados
  ]
})
export class SignupPageModule {}
