// Controlador da pagina de endereços do cliente, armazena os dados do pedido
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';
import { PedidoDTO } from '../../models/pedido.dto';
import { CartService } from '../../services/domain/cart.service';
import { ClienteService } from '../../services/domain/cliente.service';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];
  pedido : PedidoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService,
    public cartService: CartService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser(); // pega o usario que esta logado no localStorage
    if (localUser && localUser.email) { // Verifica se o objeto esta Ok
      this.clienteService.findByEmail(localUser.email) // Faz a busca por email
        .subscribe(response => { // se Inscreve para resposta
          this.items = response['enderecos']; // E pega os endereços do cliente. Esta entre ['enderecos'] pq assim fica livre de erro do compilador e essa resposta que vem do backend
          
          let cart = this.cartService.getCart(); // Variavel que recebe o carrinho

                        /**
                         * Estrutura que precisa ser montada para armazenar os dados de um pedido
               * {
              "cliente" : {"id" : 1},           // PARTE 1
              "enderecoDeEntrega" : {"id" : 1},
              "pagamento" : {
              "numeroDeParcelas" : 10,      
              "@type": "pagamentoComCartao" 
              },
              "itens" : [
              {
              "quantidade" : 2,       // PARTE 4
              "produto" : {"id" : 3}  // PARTE 4
              },
              {
              "quantidade" : 1,       // PARTE 4
              "produto" : {"id" : 1}  // PARTE 4
              }
              ]
              }
              */
          this.pedido = {
            cliente: {id: response['id']}, // PARTE 1 - Pegando o id do cliente
            enderecoDeEntrega: null, // Por enquanto ainda não se sabe qual é, o usuario ainda vai escolher
            pagamento: null, // Por enquanto ainda não se sabe qual é, o usuario ainda vai escolher

            /**
             * Os itens do pedido são os itens do carrinho que precisam ser transformados em outro formato.
             * Percorre a lista de itens do carrinho convertendo cada objeto para o novo objeto do tipo item pedido - PARTE 4
             * 
             */
            itens: cart.items.map(x => {return {quantidade: x.quantidade , produto: {id: x.produto.id}}}) // PARTE 4
          }
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


  nextPage(item: EnderecoDTO){
     this.pedido.enderecoDeEntrega = {id: item.id};
     console.log(this.pedido);
  }
}
