import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items : ProdutoDTO[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public produtoService: ProdutoService) {
  }

  // Dados estaticos para testar a pagina
  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    // Capturando o dado que foi passado na navegação = categorias.ts showProdutos()
    // A resposta que vem do backend e um endpoint paginado, entao vira uma resposta diferente. -- ['content'] e o atributo que vem que carrega as categorias. TESTAR NO POSTMAN URL http://localhost:8080/produtos?categorias=2
    this.produtoService.findByCategoria(categoria_id).subscribe(response => {
      this.items = response['content'];
    },
    error => {});
  } 
}