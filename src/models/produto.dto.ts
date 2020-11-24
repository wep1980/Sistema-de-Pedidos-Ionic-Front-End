export interface ProdutoDTO {
    id : string;
    nome : string;
    preco : number;

     //Guarda a URL da imagem. Para facilitar o trabalho com o front end -- imageUrl? -> Atributo opcional(Preenchimento não obrigatorio)
     imageUrl? : string; 
}