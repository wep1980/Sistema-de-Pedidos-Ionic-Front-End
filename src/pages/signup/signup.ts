import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    /**
     * Instanciando um formGroup dentro do construtor.
     * group() -> responsavel por instanciar o formGroup.
     * 
     * Todas as validações sintaticas e que não precisam ir no banco de dados serão as mesmas feitas no backend,
     * assim evita requisições no servidor desnecessarias.
     */
    this.formGroup = this.formBuilder.group({
      nome: ['waldir', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['wepjavamail@gmail.com', [Validators.required, Validators.email, Validators.maxLength(120)]],
      tipoCliente: ['1', [Validators.required]],
      cpfOuCnpj: ['08180009700', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123', [Validators.required]],
      logradouro: ['Rua Santa Clara', [Validators.required]],
      numero: ['271', [Validators.required]],
      complemento: ['apto 207', []],
      bairro: ['Copacabana', []],
      cep: ['22041011', [Validators.required]],
      telefone1: ['990561880', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]]
    })
  }

  signupUser() {
    console.log('Enviou o form');
  }
}
