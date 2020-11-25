import { itemPedidoDTO } from "./item-pedido.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { RefDTO } from "./ref.dto";

/**
 * Estrutura que precisa ser montada para armazenar os dados de um pedido
 * 
 * {
"cliente" : {"id" : 1},            ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
"enderecoDeEntrega" : {"id" : 1},  ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
"pagamento" : {                    ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
"numeroDeParcelas" : 10,    
"@type": "pagamentoComCartao"
},
"itens" : [                       ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA, Uma lista
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
export interface PedidoDTO {
    cliente : RefDTO;
    enderecoDeEntrega : RefDTO;
    pagamento : PagamentoDTO;
    itens : itemPedidoDTO[];
}