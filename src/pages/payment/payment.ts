// Controlador da pagina de escolha de pagamentos
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';


@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  pedido : PedidoDTO; // Vai ser recebido pela pagina que vc escolhe o endereço, o endereço e armazenado no pedido que foi instanciado e passado para essa pagina de pagamento esse pedido. Esse pedido vem da pagina de endereço

  parcelas : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Ao selecionar o numero de parcelas, sera armazenado aqui 

  formGroup : FormGroup; // É utilizado um formulario para controlar os dados da tela que o usuario vai entrar

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.pedido = this.navParams.get('pedido'); // Pega o objeto pedido que vem de outra pagina

      console.log(this.pedido);

      // foi feito tambem na pagina de signup
      this.formGroup =  this.formBuilder.group({
        numeroDeParcelas : [1, Validators.required],
         // pagamentoComCartao -> igual esta no backend
        "@type" : ["pagamentoComCartao", Validators.required]
      })
  }

  nextPage(){
    this.pedido.pagamento = this.formGroup.value; // Pegando a forma de pagamento do formulario
    console.log(this.pedido);
  }

}
