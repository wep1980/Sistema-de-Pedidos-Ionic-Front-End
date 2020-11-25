/**
 * Estrutura que precisa ser montada para armazenar os dados de um pedido
 * 
 * {
"cliente" : {"id" : 1},
"enderecoDeEntrega" : {"id" : 1},
"pagamento" : {
"numeroDeParcelas" : 10,      ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
"@type": "pagamentoComCartao" ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
},
"itens" : [
{
"quantidade" : 2,
"produto" : {"id" : 3}
},
{
"quantidade" : 1,
"produto" : {"id" : 1}
}
]
}
 */

export interface PagamentoDTO {
    numeroDeParcelas : number;
    "@Type" : string; // É necessario colocar o nome da variavel entre "" pq não e permitido o nome de atributos começando com @
}