import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
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
              public produtoService: ProdutoService,
              public loadingCtrl: LoadingController) {
  }

  
  ionViewDidLoad() {
    this.loadData();
  } 

  loadData(){
    let categoria_id = this.navParams.get('categoria_id');
    let loader = this.presentLoading(); // Chamando o loading
    // Capturando o dado que foi passado na navegação = categorias.ts showProdutos()
    // A resposta que vem do backend e um endpoint paginado, entao vira uma resposta diferente. -- ['content'] e o atributo que vem que carrega as categorias. TESTAR NO POSTMAN URL http://localhost:8080/produtos?categorias=2
    this.produtoService.findByCategoria(categoria_id).subscribe(response => {
      this.items = response['content'];
      loader.dismiss(); // fecha a janela do loading
      this.loadImageUrls();
    },
    error => {
      loader.dismiss(); // fecha a janela do loading
    });
  }


  loadImageUrls() {
    for (var i=0; i<this.items.length; i++) { // Percorre a lista de produtos
      let item = this.items[i];
      this.produtoService.getSmallImageFromBucket(item.id)
        .subscribe(response => {
          item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.id}-small.jpg`;
        },
        error => {});
    }
  }


  /**
   * Metodo que exibe os detalhes dos produtos
   */
  showDatail(produto_id : string){
     this.navCtrl.push('ProdutoDetailPage', {produto_id : produto_id});
  }


  /**
   * Metodo que aparece o loading ao carregar a pagina
   */
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }


  /**
   * Metodo que da refresh na pagina ao puxar ela para baixo
   * @param refresher 
   */
  doRefresh(refresher) {
    this.loadData(); // recarrega os dados
    setTimeout(() => {
      refresher.complete(); // depois de 1 segundo fecha o refresher que aparece no canto da tela
    }, 1000);
  }
}