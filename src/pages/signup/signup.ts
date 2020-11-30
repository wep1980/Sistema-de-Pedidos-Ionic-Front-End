import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';
import { ClienteService } from '../../services/domain/cliente.service';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  // Armazena os estados
  estados: EstadoDTO[];

  // Armazena as cidades
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController) {

    /**
     * Instanciando um formGroup dentro do construtor.
     * group() -> responsavel por instanciar o formGroup.
     * 
     * Todas as validações sintaticas e que não precisam ir no banco de dados serão as mesmas feitas no backend,
     * assim evita requisições no servidor desnecessarias.
     */
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
      tipoCliente: ['1', [Validators.required]],
      cpfOuCnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', []],
      cep: ['', [Validators.required]],
      telefone1: ['', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]]
    });
  }

  /**
   * Método que inicia automaticamente quando a pagina e chamada
   */
  ionViewDidLoad() {
    this.estadoService.findAll().subscribe(response => {
      this.estados = response;
      //Pega o primeiro elemento da lista e atribui na lista estadoId do formulario
      this.formGroup.controls.estadoId.setValue(this.estados[0].id);
      //console.log(this.estados);
      // Busca as cidades correspondente ao estado selecionado
      this.updateCidades();
    },
    error => {});
  }

  updateCidades(){
    // Variavel que pega o estado selecionado na lista do HTML do formulario
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id).subscribe(response => {
      this.cidades = response;

      /**
       * Desceleciona a cidade que estava selecionado no formulario, pq como acabou acabou de mudar de estado
       * não vai ficar nenhuma cidade selecionada
       */
      this.formGroup.controls.cidadeId.setValue(null);
    },
    error => {});
  }

  signupUser() {
    console.log(this.formGroup.value); // Pegando os dados do formulario
    this.clienteService.insert(this.formGroup.value).subscribe(response => {
      this.showInsertOk();
    },
    error => {});
  }


  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false, // so pode sair do alert apertando no botão
      buttons: [ // Atributo buttons
        {
          text: 'Ok',
          // Executa quando o Ok e clicado, Função anonima que não reecebe nada e executa
          handler: () => {
            this.navCtrl.pop(); // Desempilha a pagina se der tudo certo -- Pq o formulario da pagina foi empilhado em cima da pagina de login
          }
        }
      ]
    });
    alert.present(); // Apresenta o alert na tela
  }
}
