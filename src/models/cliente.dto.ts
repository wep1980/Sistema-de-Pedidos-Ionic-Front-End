export interface ClienteDTO {

    id : string;
    nome : string;
    email : string;

    //Para facilitar o trabalho com o front end -- imageUrl? -> Atributo opcional(Preenchimento não obrigatorio)
    imageUrl? : string; 
}