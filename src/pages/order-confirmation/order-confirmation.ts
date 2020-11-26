import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';
import { CartItem } from '../../models/cart-item';
import { EnderecoDTO } from '../../models/endereco.dto';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { CartService } from '../../services/domain/cart.service';
import { PedidoService } from '../../services/domain/pedido.service';

@IonicPage()
@Component({
  selector: 'page-order-confirmation',
  templateUrl: 'order-confirmation.html',
})
export class OrderConfirmationPage {

  pedido: PedidoDTO;
  cartItems: CartItem[]; // Para mostrar os itens do carrinho
  cliente: ClienteDTO; // Para mostrar o cliente logado
  endereco: EnderecoDTO; // Para mostrar o endereço
  codpedido: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public clienteService: ClienteService,
    public cartService: CartService,
    public pedidoService: PedidoService) {

    // Carregando o pedido no construtor - Passa o pedido como parametro de uma pagina para outra  
    this.pedido = this.navParams.get('pedido');
  }

  ionViewDidLoad() {
    this.cartItems = this.cartService.getCart().items; // Carrega os itens do carrinho

    this.clienteService.findById(this.pedido.cliente.id) // Busca o id do cliente que esta no objeto pedido
      .subscribe(response => { // se inscreve para receber a resposta. Na resposta vem um cliente completo com todos os dados, é necessario fazer um casting para ClienteDTO que recebe apenas id, nome e email
        this.cliente = response as ClienteDTO;
        // No objeto de pedido tem somente o id, para pegar os dados e chamada a funcao que busca os endereços atraves do id do endereço de entrega na lista dos endereços do cliente
        this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.id, response['enderecos']);
      },
      error => {
        this.navCtrl.setRoot('HomePage'); // se acontecer algum erro e redirecionado para pagina inicial
      });
  }

  /**
   * Função que procura os endereços
   * @param id 
   * @param list 
   */
  private findEndereco(id: string, list: EnderecoDTO[]) : EnderecoDTO {
    let position = list.findIndex(x => x.id == id); // Encontra a posição do objeto x tal que x.id seja igual ao id passado por parametro
    return list[position];
  }

  // Mostra o valor total do pedido
  total() : number {
    return this.cartService.total();
  } 

  checkout() {
    this.pedidoService.insert(this.pedido)
      .subscribe(response => {
        this.cartService.createOrClearCart(); // Limpa o carrinho depois de salvar o pedido no BD 
        //console.log(response.headers.get('location')); // Pegando o location do headers do novo recurso salvo(Postman) -- Para o location funcionar no angular, no cap.8 aula 95 é ensinado como expor o location
        this.codpedido = this.extractId(response.headers.get('location')); // Extrai o id da URL que esta contida em location do novo pedido salvo
      },
      error => {
        if (error.status == 403) {
          this.navCtrl.setRoot('HomePage');
        }
      });
  }

  /**
   * Metodo para voltar a pagina de carrinho
   */
  back() {
    this.navCtrl.setRoot('CartPage');
  }


  /**
   * Metodo que pega o id da URL contida no location
   * @param location 
   */
  private extractId(location : string) : string {
    let position = location.lastIndexOf('/'); // achando a ultima posição do subString informado no ('/')
    return location.substring(position + 1, location.length); // recorta o caracter que estiver na frente da /
  }

  /**
   * Retorna para a pagina de categorias
   */
  home() {
    this.navCtrl.setRoot('CategoriasPage');
  }
}
