import { RefDTO } from "./ref.dto";

/**
 * Estrutura que precisa ser montada para armazenar os dados de um pedido
 * 
 * {
"cliente" : {"id" : 1},
"enderecoDeEntrega" : {"id" : 1},
"pagamento" : {
"numeroDeParcelas" : 10,    
"@type": "pagamentoComCartao"
},
"itens" : [
{
"quantidade" : 2,        ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
"produto" : {"id" : 3}   ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
},
{
"quantidade" : 1,
"produto" : {"id" : 1}
}
]
}
 */
export interface itemPedidoDTO {
    quantidade : number;
    produto : RefDTO;
}