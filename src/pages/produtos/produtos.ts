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

  /**
   * Iniciando a lista vazia. Sempre que for buscado uma nova pagina ela sera concatenada com uma lista que ja existe(Concatenação de listas), Na busca da primeira pag sera concatenada a lista vazia com a primeira pag, 
   * quando for buscado a segunda pag sera concatenada a primeira pag com a segunda pag, e assim por diante
   */
  items : ProdutoDTO[] = []; 
  page : number = 0;

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
    this.produtoService.findByCategoria(categoria_id, this.page, 10).subscribe(response => { // os produtos serão paginados de 10 em 10
      let start = this.items.length; // Pegando o tamanho da lista
      this.items = this.items.concat( response['content']); // Concatenando a nova resposta com o que ja tinha antes
      let end = this.items.length - 1; // Depois de concatenar salva o novo tamanho da lista
      loader.dismiss(); // fecha a janela do loading
      console.log(this.page); // verifica se a pagina esta correta 
      console.log(this.items); // verifica se a lista esta correta

      this.loadImageUrls(start, end);
    },
    error => {
      loader.dismiss(); // fecha a janela do loading
    });
  }


  /**
   * Metodo que carrega as imagens de acordo com o tamanho de elementos que vem por pagina
   * @param start 
   * @param end 
   */
  loadImageUrls(start : number, end : number) {
    for (var i = start; i <= end; i++) { // Percorre a lista de produtos
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
    this.page = 0; // Ao fazer o refresh carrega apenas os 10 primeiros (Resolve o problema de paginação)
    this.items = []; //  // Ao fazer o refresh carrega apenas os 10 primeiros (Resolve o problema de paginação)
    this.loadData(); // recarrega os dados
    setTimeout(() => {
      refresher.complete(); // depois de 1 segundo fecha o refresher que aparece no canto da tela
    }, 1000);
  }


  /**
   * Metodo que chama as as paginas de produtos atraves do infinity scroll, ao chegar no final da pagina ele carrega a proxima
   * @param infiniteScroll 
   */
  doInfinite(infiniteScroll) {
    this.page++; // Incrementa a pagina
    this.loadData(); // carrega mais dados
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }
}